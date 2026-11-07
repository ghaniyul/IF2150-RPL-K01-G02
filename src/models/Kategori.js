// C31: pilihan kategori ditentukan database, bukan input bebas dari klien.
const db = require('../config/db');
class Kategori {
  static async getDaftarKategori() {
    const { rows } = await db.query('SELECT id_kategori AS "idKategori", nama_kategori AS "namaKategori" FROM kategori ORDER BY id_kategori');
    return rows;
  }
  static async validasiKategori(id, client = db) {
    const { rowCount } = await client.query('SELECT 1 FROM kategori WHERE id_kategori = $1', [id]);
    return rowCount > 0;
  }
}
module.exports = Kategori;
