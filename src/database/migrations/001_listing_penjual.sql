-- Tambahan referensi UC07–UC12. Idempoten; tidak menghapus data lama.
CREATE TABLE IF NOT EXISTS kategori (
  id_kategori VARCHAR(50) PRIMARY KEY,
  nama_kategori VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS lokasi_cod (
  id_lokasi VARCHAR(50) PRIMARY KEY,
  nama_lokasi VARCHAR(100) NOT NULL,
  kampus VARCHAR(100) NOT NULL
);
INSERT INTO kategori VALUES
 ('jas-praktikum','Jas praktikum'), ('buku-diktat','Buku dan diktat'),
 ('elektronik','Elektronik'), ('perlengkapan-kos','Perlengkapan kos'),
 ('pakaian-jaket','Pakaian dan jaket himpunan'), ('lain-lain','Lain-lain')
ON CONFLICT (id_kategori) DO NOTHING;
-- Titik awal untuk demo lokal; dapat disesuaikan tim melalui tabel lokasi_cod.
INSERT INTO lokasi_cod VALUES
 ('labtek-v','Labtek V','Ganesha'), ('oktagon','Gedung Oktagon','Ganesha'),
 ('perpustakaan','Perpustakaan Pusat','Ganesha'), ('gerbang-belakang','Gerbang Belakang','Ganesha'),
 ('labtek-x','Labtek X','Ganesha'), ('gerbang-jatinangor','Gerbang Utama','Jatinangor'),
 ('gerbang-cirebon','Gerbang Utama','Cirebon')
ON CONFLICT (id_lokasi) DO NOTHING;
