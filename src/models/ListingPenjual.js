// Ekstensi C29 untuk UC07–UC12. Model Barang lama tetap kompatibel dengan moderasi.
const db = require('../config/db');
const Barang = require('./Barang');
const FotoBarang = require('./FotoBarang');
class ListingPenjual extends Barang {
  static async transaksi(operasi) {
    const client = await db.pool.connect();
    try {
      await client.query('BEGIN');
      const hasil = await operasi(client);
      await client.query('COMMIT');
      return hasil;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally { client.release(); }
  }
  static async kunci(id, client) {
    const { rows } = await client.query('SELECT * FROM barang WHERE id_barang = $1 FOR UPDATE', [id]);
    return this.dariBaris(rows[0]);
  }
  static async getListingPenjual(idPenjual) {
    const { rows } = await db.query(`SELECT b.*, k.nama_kategori, l.nama_lokasi, l.kampus,
      (SELECT path_berkas FROM foto_barang f WHERE f.id_barang = b.id_barang ORDER BY urutan, id_foto LIMIT 1) AS foto_utama
      FROM barang b LEFT JOIN kategori k USING (id_kategori) LEFT JOIN lokasi_cod l USING (id_lokasi)
      WHERE b.id_penjual = $1 ORDER BY b.waktu_unggah DESC, b.id_barang`, [idPenjual]);
    return rows.map(r => ({ ...this.dariBaris(r), namaKategori: r.nama_kategori,
      namaLokasi: r.nama_lokasi, kampus: r.kampus, fotoUtama: r.foto_utama }));
  }
  static async updateBarang(id, idPenjual, data, client) {
    await client.query(`UPDATE barang SET judul=$3, harga=$4, deskripsi_kondisi=$5,
      id_kategori=$6, id_lokasi=$7, waktu_ubah=clock_timestamp()
      WHERE id_barang=$1 AND id_penjual=$2`,
    [id, idPenjual, data.judul, data.harga, data.deskripsiKondisi, data.idKategori, data.idLokasi]);
  }
  static async perbaruiGaleri(id, galeri, client) {
    // Pertahankan ID foto lama supaya kontrak dengan modul lain tidak berubah.
    const ids = galeri.filter(f => f.idFoto).map(f => f.idFoto);
    await client.query('DELETE FROM foto_barang WHERE id_barang=$1 AND NOT (id_foto = ANY($2::uuid[]))', [id, ids]);
    for (const [i, foto] of galeri.entries()) {
      if (foto.idFoto) {
        await client.query('UPDATE foto_barang SET urutan=$3 WHERE id_barang=$1 AND id_foto=$2', [id, foto.idFoto, i + 1]);
      } else {
        await FotoBarang.simpan(id, foto.namaBerkas, foto.format, foto.ukuran, i + 1, foto.pathBerkas, client);
      }
    }
  }
  static async setStatus(id, idPenjual, asal, tujuan, client) {
    const { rowCount } = await client.query(`UPDATE barang SET status=$4, waktu_ubah=clock_timestamp()
      WHERE id_barang=$1 AND id_penjual=$2 AND status=$3`, [id, idPenjual, asal, tujuan]);
    return rowCount === 1;
  }
}
module.exports = ListingPenjual;
