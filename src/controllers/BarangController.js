// C14: UC07–UC12. Identitas pemilik selalu berasal dari sesi, bukan body HTTP.
const crypto = require('crypto');
const Otorisasi = require('../pendukung/Otorisasi');
const Akun = require('../models/Akun');
const Barang = require('../models/ListingPenjual');
const FotoBarang = require('../models/FotoBarang');
const Kategori = require('../models/Kategori');
const LokasiCOD = require('../models/LokasiCOD');
const Penjual = require('../models/Penjual');
const Penyimpanan = require('../penyimpanan/PenyimpananBerkas');

function gagal(status, pesan) { const error = new Error(pesan); error.status = status; throw error; }
class BarangController {
  static async getIdPenjualDariSesi(token) {
    const sesi = await Otorisasi.verifikasiToken(token);
    if (!sesi) gagal(401, 'Silakan masuk terlebih dahulu.');
    const akun = await Akun.cariById(sesi.getIdAkun());
    if (!akun || akun.statusBlokir || akun.statusAkun !== 'Terverifikasi') {
      gagal(403, 'Hanya akun terverifikasi dan tidak diblokir yang dapat mengelola listing.');
    }
    return sesi.getIdAkun();
  }
  static async getDataFormulir() {
    const [daftarKategori, daftarLokasi] = await Promise.all([Kategori.getDaftarKategori(), LokasiCOD.getDaftarLokasi()]);
    return { daftarKategori, daftarLokasi };
  }
  static verifikasiKepemilikan(idAkun, idPenjual) { return idAkun === idPenjual; }
  static periksaPemilik(barang, id) {
    if (!barang) gagal(404, 'Listing tidak ditemukan atau sudah dihapus.');
    if (!this.verifikasiKepemilikan(id, barang.idPenjual)) gagal(403, 'Anda bukan pemilik listing ini.');
    if (barang.status === 'Dinonaktifkan') gagal(409, 'Listing dinonaktifkan dan tidak dapat diubah.');
  }
  static async validasiData(data, client) {
    const judul = typeof data.judul === 'string' ? data.judul.trim() : '';
    const deskripsi = typeof data.deskripsiKondisi === 'string' ? data.deskripsiKondisi.trim() : '';
    if (!judul || judul.length > 80) gagal(400, 'Judul wajib diisi, maksimum 80 karakter.');
    // Sesuai NUMERIC(12,2), hindari konversi kosong, Infinity, dan pembulatan diam-diam.
    if (!/^(?:\d{1,10})(?:\.\d{1,2})?$/.test(String(data.harga ?? '')) || Number(data.harga) <= 0) {
      gagal(400, 'Harga harus positif, maksimum 9.999.999.999,99 rupiah (dua desimal).');
    }
    if (deskripsi.length > 1000) gagal(400, 'Deskripsi maksimum 1000 karakter.');
    if (typeof data.idKategori !== 'string' || !(await Kategori.validasiKategori(data.idKategori, client))) gagal(400, 'Pilih kategori yang tersedia.');
    if (typeof data.idLokasi !== 'string' || !(await LokasiCOD.validasiLokasi(data.idLokasi, client))) gagal(400, 'Pilih lokasi titik temu COD yang tersedia.');
    return { judul, harga: Number(data.harga), deskripsiKondisi: deskripsi, idKategori: data.idKategori, idLokasi: data.idLokasi };
  }
  static validasiFoto(fotoBaru, fotoLama = []) {
    if (fotoBaru.length + fotoLama.length < 1 || fotoBaru.length + fotoLama.length > 5) gagal(400, 'Listing harus memiliki 1 sampai 5 foto.');
    for (const f of fotoBaru) {
      const b = f.buffer;
      const png = Buffer.isBuffer(b) && b.length >= 24 && b.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
      const jpg = Buffer.isBuffer(b) && b.length >= 4 && b[0] === 255 && b[1] === 216 && b[2] === 255;
      const cocok = (png && f.mimetype === 'image/png' && /\.png$/i.test(f.originalname)) ||
        (jpg && ['image/jpeg','image/jpg'].includes(f.mimetype) && /\.jpe?g$/i.test(f.originalname));
      if (!cocok || !FotoBarang.validasiUkuran(f.size)) gagal(400, 'Foto harus berupa JPG/PNG, maksimum 5 MB per foto.');
    }
  }
  static daftarJSON(nilai, nama, bawaan) {
    if (nilai === undefined) return bawaan;
    let hasil;
    try { hasil = typeof nilai === 'string' ? JSON.parse(nilai) : nilai; } catch { gagal(400, `${nama} tidak valid.`); }
    if (!Array.isArray(hasil) || hasil.some(x => typeof x !== 'string') || new Set(hasil).size !== hasil.length) gagal(400, `${nama} tidak valid.`);
    return hasil;
  }
  static urutkanFoto(data, lama, baru) {
    const map = new Map([...lama.map(f => [f.pathBerkas, f]), ...baru.map((f,i) => [`baru:${i}`, f])]);
    const urutan = this.daftarJSON(data.urutanFoto, 'Urutan foto', [...map.keys()]);
    if (urutan.length !== map.size || urutan.some(k => !map.has(k))) gagal(400, 'Urutan foto harus memuat seluruh foto tepat satu kali.');
    return urutan.map(k => map.get(k));
  }
  static async simpanFoto(id, files) {
    if (!files.length) return [];
    const paths = await Penyimpanan.simpan(id, files);
    if (!paths || paths.length !== files.length) gagal(500, 'Foto gagal disimpan. Silakan coba lagi.');
    return files.map((f,i) => ({ namaBerkas: f.originalname, format: f.mimetype === 'image/png' ? 'png' : 'jpg', ukuran: f.size, pathBerkas: paths[i] }));
  }
  static async getListingSaya(token) { return Barang.getListingPenjual(await this.getIdPenjualDariSesi(token)); }
  static async getBarang(id, token, tujuan = 'ubah') {
    const barang = await Barang.cariById(id);
    if (tujuan === 'ubah') this.periksaPemilik(barang, await this.getIdPenjualDariSesi(token));
    else {
      if (!barang || barang.status === 'Dinonaktifkan') gagal(404, 'Listing tidak ditemukan.');
      const penjual = await Akun.cariById(barang.idPenjual);
      if (!penjual || penjual.statusBlokir || penjual.statusAkun !== 'Terverifikasi') gagal(404, 'Listing tidak tersedia.');
    }
    const [daftarFoto, pilihan, identitasPenjual] = await Promise.all([
      FotoBarang.getGaleri(id), this.getDataFormulir(), Penjual.getIdentitas(barang.idPenjual),
    ]);
    return { barang, daftarFoto, ...pilihan, identitasPenjual };
  }
  static async buatBarang(token, data, files) {
    const idPenjual = await this.getIdPenjualDariSesi(token);
    this.validasiFoto(files);
    const id = crypto.randomUUID();
    let foto = [];
    try {
      await Barang.transaksi(async client => {
        const valid = await this.validasiData(data, client);
        // Validasi urutan sebelum menulis berkas.
        this.urutkanFoto(data, [], files);
        foto = await this.simpanFoto(id, files);
        await Barang.simpan({ ...valid, idBarang: id, idPenjual, status: 'Tersedia' }, new Date(), client);
        await Barang.perbaruiGaleri(id, this.urutkanFoto(data, [], foto), client);
      });
      return { idBarang: id };
    } catch (error) { await Penyimpanan.hapus(foto.map(f => f.pathBerkas)); throw error; }
  }
  static async updateBarang(token, id, data, files) {
    const pemilik = await this.getIdPenjualDariSesi(token);
    let baru = [], dihapus = [];
    try {
      await Barang.transaksi(async client => {
        const barang = await Barang.kunci(id, client);
        this.periksaPemilik(barang, pemilik);
        if (data.waktuUbah && new Date(data.waktuUbah).getTime() !== new Date(barang.waktuUbah).getTime()) gagal(409, 'Listing telah berubah. Muat ulang halaman sebelum menyimpan.');
        const valid = await this.validasiData(data, client);
        const galeri = await FotoBarang.getGaleri(id, client);
        dihapus = this.daftarJSON(data.fotoDihapus, 'Foto dihapus', []);
        if (dihapus.some(p => !galeri.some(f => f.pathBerkas === p))) gagal(400, 'Foto yang dihapus bukan milik listing ini.');
        const tetap = galeri.filter(f => !dihapus.includes(f.pathBerkas));
        this.validasiFoto(files, tetap);
        this.urutkanFoto(data, tetap, files);
        baru = await this.simpanFoto(id, files);
        await Barang.updateBarang(id, pemilik, valid, client);
        await Barang.perbaruiGaleri(id, this.urutkanFoto(data, tetap, baru), client);
      });
    } catch (error) { await Penyimpanan.hapus(baru.map(f => f.pathBerkas)); throw error; }
    await Penyimpanan.hapus(dihapus);
    return { idBarang: id };
  }
  static async siapkanPenghapusan(token, id) {
    const pemilik = await this.getIdPenjualDariSesi(token);
    const barang = await Barang.cariById(id);
    this.periksaPemilik(barang, pemilik);
    return barang;
  }
  static async siapkanPerubahanStatus(token, id, asal) {
    const barang = await this.siapkanPenghapusan(token, id);
    if (!['Tersedia','Terjual'].includes(asal) || barang.status !== asal) gagal(409, 'Status listing sudah berubah. Muat ulang daftar.');
    return barang;
  }
  static async deleteBarang(token, id) {
    const pemilik = await this.getIdPenjualDariSesi(token);
    let foto;
    await Barang.transaksi(async client => {
      this.periksaPemilik(await Barang.kunci(id, client), pemilik);
      foto = await FotoBarang.getGaleri(id, client);
      await FotoBarang.hapus(id, client);
      await Barang.hapus(id, client);
    });
    await Penyimpanan.hapus(foto.map(f => f.pathBerkas));
    return { idBarang: id };
  }
  static async ubahStatusBarang(token, id, asal, tujuan) {
    if (!((asal === 'Tersedia' && tujuan === 'Terjual') || (asal === 'Terjual' && tujuan === 'Tersedia'))) gagal(400, 'Perubahan status tidak valid.');
    const pemilik = await this.getIdPenjualDariSesi(token);
    await Barang.transaksi(async client => {
      this.periksaPemilik(await Barang.kunci(id, client), pemilik);
      if (!(await Barang.setStatus(id, pemilik, asal, tujuan, client))) gagal(409, 'Status listing sudah berubah. Muat ulang daftar.');
    });
    return { idBarang: id, status: tujuan };
  }
}
module.exports = BarangController;
