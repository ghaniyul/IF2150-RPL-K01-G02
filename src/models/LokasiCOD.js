// C32: daftar titik temu multikampus.
const db = require('../config/db');
class LokasiCOD {
  static async getDaftarLokasi() {
    const { rows } = await db.query('SELECT id_lokasi AS "idLokasi", nama_lokasi AS "namaLokasi", kampus FROM lokasi_cod ORDER BY kampus, nama_lokasi');
    return rows;
  }
  static async validasiLokasi(id, client = db) {
    const { rowCount } = await client.query('SELECT 1 FROM lokasi_cod WHERE id_lokasi = $1', [id]);
    return rowCount > 0;
  }
}
module.exports = LokasiCOD;
