<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 5
<br>
DESKRIPSI PERANCANGAN PERANGKAT LUNAK (DPPL)
</h1>
<br>

## *Nama Perangkat Lunak*
### *[Logo Perangkat Lunak]*

### Untuk: *[Nama Asisten]*

Dipersiapkan oleh:
| Informasi | Keterangan |
| --- | --- |
| Kelas | *\[Kelas\]* |
| Kelompok | *\[Nomor Kelompok\]*  |

| NIM | Nama |
|---|---|
| *[NIM 1]* | *[Nama Anggota 1]* |
| *[NIM 2]* | *[Nama Anggota 2]* |
| *[NIM 3]* | *[Nama Anggota 3]* |
| *[NIM 4]* | *[Nama Anggota 4]* |
| *[NIM 5]* | *[Nama Anggota 5]* |
---

## Daftar Perubahan

| Revisi | Deskripsi |
| :--- | :--- |
| *A* | *Deskripsikan perubahan yang dilakukan dari dokumen sebelumnya pada dokumen ini. Jika tidak terdapat perubahan, harap kosongkan tabel.* |
| *B* |  |
| *C* |  |
| ... |  |

---

<br>

> **Petunjuk pengerjaan:** *[Silahkan hapus bagian ini setelah selesai mengerjakan]*
>
> Dokumen ini melanjutkan **Deskripsi Perancangan Perangkat Lunak**. Gunakan nama, ID, kebutuhan, dan use case yang konsisten dengan kedua dokumen tersebut. Contoh pola ID baru di bawah dapat disesuaikan dengan kesepakatan kelompok, ID yang sudah ada tetap dipertahankan.

<br>

---


# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Tuliskan dengan ringkas tujuan dokumen DPPL ini dibuat dan siapa saja yang akan menggunakan dokumen ini.

## 1.2 Lingkup Masalah
Tuliskan dengan ringkas nama aplikasi dan deskripsi singkatnya. Bagian ini maksimal berisi satu paragraf, dapat diambil dari SKPL.

## 1.3 Definisi, Istilah, dan Singkatan
Semua definisi dan singkatan yang digunakan dalam dokumen ini beserta penjelasannya.

Tabel 1.3. Definisi Istilah dan Singkatan

| Singkatan, Akronim, atau Istilah | Penjelasan |
| :--- | :--- |
| *P/L* | *Singkatan dari Perangkat Lunak, yaitu aplikasi yang memberikan perintah kepada komputer untuk menjalankan tugas tertentu.* |
| *DPPL* | *Singkatan dari Spesifikasi Kebutuhan Perangkat Lunak, yaitu dokumen yang merangkum kriteria-kriteria yang diperlukan untuk membangun aplikasi menjalankan tugasnya.* |
| *UC* | *Singkatan dari Use Case.* |
| *...* | *...* |

## 1.4 Aturan Penomoran
Tuliskan aturan penomoran (ID) yang digunakan dalam dokumen ini. Gunakan pola ID yang **sama** dengan yang sudah dipakai pada dokumen-dokumen sebelumnya, jangan membuat pola baru di dokumen ini.

Tabel 1.4. Aturan Penomoran

| Hal/Bagian | Penomoran | Keterangan |
| :--- | :--- | :--- |
| *Uce Case* | *UCXX* | |
| *Kelas* | *CXX* | |
| *...* | *...* |

## 1.5 Referensi
Cantumkan dokumentasi P/L yang dirujuk oleh dokumen ini, **minimal dokumen SKPL dan APL**. Tambahkan buku, panduan, atau dokumentasi lain apabila digunakan.

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
Tuliskan sistematika pembahasan dokumen ini secara ringkas dan runut, dengan maksimal 1 paragraf.

<br>

---

# BAB 2: Perancangan Arsitektur

## 2.1 Rancangan Lingkungan Implementasi

Sebutkan *operating system*, DBMS, *development tools*, *filing system*, dan bahasa pemrograman yang digunakan.

## 2.2 Style/Pattern Arsitektur Acuan

Tentukan *architectural style* atau *pattern* yang menjadi acuan aplikasi, misalnya *layered architecture*, *client-server*, *repository*, *pipe and filter*, atau MVC (*Model-View-Controller*).


Gunakan hasil **BAB 1 Style/Pattern Arsitektur Acuan pada dokumen APL**, termasuk alasan pemilihan dan gambar penerapannya pada P/L kelompok. Gunakan komponen aplikasi sendiri pada gambar, bukan hanya contoh pola umum.

<p align="center">
<img alt="Contoh Arsitektur MVC" src="./assets/diagram/contoh-arsitektur-mvc.webp" width="40%">
</p>
<p align="center">
<i>Gambar 1. Contoh Arsitektur MVC</i>
</p>

## 2.3 Identifikasi Komponen / Modul / Subsistem

Identifikasi komponen, modul, atau subsistem penyusun aplikasi berdasarkan *pattern* yang telah ditetapkan. Jelaskan tanggung jawab masing-masing komponen. Pengelompokan dapat mengikuti lapisan arsitektur atau fungsi/peran komponen dalam sistem.

Dapat menyalin dari dokumen DPPL sebelumnya

Tabel 2.3. Identifikasi Komponen/Modul/Subsistem

| Nama Komponen/Modul/Subsistem | Jenis | Penjelasan |
| :--- | :--- | :--- |
| *[Nama komponen/modul/subsistem]* | *[Jenis]* | *[Tanggung jawab komponen]* |
| *[Nama komponen/modul/subsistem]* | *[Jenis]* | *[Tanggung jawab komponen]* |
| *...* | *...* | *...* |

## 2.4 Model Arsitektur Perangkat Lunak

Buat model arsitektur dalam bentuk satu atau lebih *view* yang memperlihatkan interaksi dan kolaborasi komponen, modul, serta subsistem dalam menjalankan fungsi sistem. Pilih notasi yang sesuai. Contoh *view*: *Logical View*, *Process View*, *Development View*, dan *Physical View*.

Gunakan hasil **BAB 3 Model Arsitektur Perangkat Lunak pada dokumen APL**. 

### 2.4.1 View [Nama View]

Tuliskan secara singkat model arsitektur yang dipilih dan alasan model tersebut cocok untuk aplikasi.

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-logical-view.webp" width="50%">
</p>
<p align="center">
<i>Gambar 2. Contoh Logical View pada P/L E-Commerce</i>
</p>

### 2.4.X View [Nama View]
*[Lakukan hal yang sama dengan bagian sebelumnya]*

<br>

---


# BAB 3: Realisasi Use Case

## 3.1 Use Case [Nama Use Case 1]

**ID Use Case:** *[UC01 sesuai SKPL]*  
**Nama Use Case:** *[Nama use case sesuai SKPL]*

### 3.1.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.1.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.1.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.2 Use Case XX

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>

---

# BAB 4: Diagram Kelas Keseluruhan

## 4.1 Diagram Kelas

**Bagian ini diisi dengan diagram kelas keseluruhan.**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-class_diargam.png" width="35%">
</p>
<p align="center">
<i>Gambar 4.1. Diagram Kelas Perancangan Keseluruhan [Nama P/L]</i>
</p>

Tabel 4.1. Daftar Kelas Perancangan Keseluruhan

| ID Kelas | Nama Kelas | Atribut | Metode/Operasi |
| :--- | :--- | :--- | :--- |
| *[C01]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *[C02]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *[C03]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *...* | *...* | *...* | *...* |

---

# BAB 5: Perancangan Rinci Kelas

Bagian ini diisi dengan daftar seluruh kelas dalam tabel berikut:

Tabel 5.1. Daftar Kelas Perancangan dan Kelas Analisis Terkait

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
| :--- | :--- | :--- |
| 1 | C01 HalamanOtentikasi | C01 HalamanOtentikasi |
| 2 | C02 HalamanProfil | C02 HalamanProfil |
| 3 | C03 HalamanListingPenjual | C03 HalamanListingPenjual |
| 4 | C04 FormulirBarang | C04 FormulirBarang |
| 5 | C05 HalamanKatalog | C05 HalamanKatalog |
| 6 | C06 KartuProduk | C06 KartuProduk |
| 7 | C07 HalamanDetailBarang | C07 HalamanDetailBarang |
| 8 | C08 HalamanPercakapan | C08 HalamanPercakapan |
| 9 | C09 PanelNotifikasi | C09 PanelNotifikasi |
| 10 | C10 FormulirLaporan | C10 FormulirLaporan |
| 11 | C11 DasborAdmin | C11 DasborAdmin |
| 12 | C12 HalamanDokumenLegal | C12 HalamanDokumenLegal |
| 13 | C13 AkunController | C13 AkunController |
| 14 | C14 BarangController | C14 BarangController |
| 15 | C15 KatalogController | C15 KatalogController |
| 16 | C16 PencarianController | C16 PencarianController |
| 17 | C17 FilterController | C17 FilterController |
| 18 | C18 PercakapanController | C18 PercakapanController |
| 19 | C19 NotifikasiController | C19 NotifikasiController |
| 20 | C20 LaporanController | C20 LaporanController |
| 21 | C21 ModerasiController | C21 ModerasiController |
| 22 | C22 DokumenLegalController | C22 DokumenLegalController |
| 23 | C23 Akun | C23 Akun |
| 24 | C24 Pembeli | C24 Pembeli |
| 25 | C25 Penjual | C25 Penjual |
| 26 | C26 Admin | C26 Admin |
| 27 | C27 TokenVerifikasi | C27 TokenVerifikasi |
| 28 | C28 SesiLogin | C28 SesiLogin |
| 29 | C29 Barang | C29 Barang |
| 30 | C30 FotoBarang | C30 FotoBarang |
| 31 | C31 Kategori | C31 Kategori |
| 32 | C32 LokasiCOD | C32 LokasiCOD |
| 33 | C33 Percakapan | C33 Percakapan |
| 34 | C34 Pesan | C34 Pesan |
| 35 | C35 Notifikasi | C35 Notifikasi |
| 36 | C36 Laporan | C36 Laporan |
| 37 | C37 BuktiLaporan | C37 BuktiLaporan |
| 38 | C38 LogAudit | C38 LogAudit |
| 39 | C39 LogAdmin | C39 LogAdmin |
| 40 | C40 DokumenLegal | C40 DokumenLegal |
| 41 | C41 Otorisasi | - |
| 42 | C42 Kriptografi | - |
| 43 | C43 SurelAdapter | - |
| 44 | C44 PushNotifikasiAdapter | - |
| 45 | C45 PenyimpananBerkas | - |

Untuk **setiap kelas**, identifikasi operasi berdasarkan tanggung jawab kelas beserta *visibility*-nya, serta atribut beserta *visibility* dan tipenya. Buat subbab tersendiri untuk setiap kelas.

## 5.1 Kelas HalamanOtentikasi

**Nama Kelas:** HalamanOtentikasi  
**ID Kelas:** C01

Tabel 5.1.1. Operasi Kelas HalamanOtentikasi

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `tampilkanFormulirPendaftaran(): void` | public | Menampilkan formulir pendaftaran berisi isian nama, NIM, surel, kata sandi, dan kendali persetujuan kebijakan (KF01, KF13). |
| `tampilkanKebijakanPrivasi(tautan: String): void` | public | Menampilkan tautan Kebijakan Privasi dan Ketentuan Penggunaan yang diperoleh dari `AkunController.getTautanDokumenLegal()` pada formulir pendaftaran. |
| `kirimFormulirPendaftaran(nama: String, nim: String, email: String, kataSandi: String, setujuKebijakan: Boolean): void` | public | Menangkap isian formulir pendaftaran dan meneruskannya ke `AkunController.daftarAkun()`. |
| `arahkanKeHalamanVerifikasi(): void` | public | Mengarahkan pengguna ke formulir kode verifikasi setelah pendaftaran berhasil. |
| `tampilkanFormulirVerifikasi(): void` | public | Menampilkan isian kode verifikasi, hitung mundur 15 menit, dan tombol kirim ulang kode. |
| `kirimKodeVerifikasi(email: String, kode: String): void` | public | Meneruskan kode verifikasi yang dimasukkan pengguna ke `AkunController.verifikasiAkun()`. |
| `mintaKirimUlang(email: String): void` | public | Meneruskan permintaan pengiriman ulang kode ke `AkunController.kirimUlangKode()`. |
| `resetHitungMundur(): void` | public | Mengatur ulang hitung mundur menjadi 15 menit setelah kode baru berhasil dikirim. |
| `tampilkanPesanSukses(pesan: String): void` | public | Menampilkan pesan keberhasilan, misalnya "Kode verifikasi baru telah dikirim." |
| `tampilkanFormulirLogin(): void` | public | Menampilkan formulir *login* berisi isian surel dan kata sandi. |
| `kirimFormulirLogin(email: String, kataSandi: String): void` | public | Meneruskan surel dan kata sandi ke `AkunController.login()`. |
| `arahkanKeBeranda(): void` | public | Mengarahkan pengguna ke beranda setelah *login* atau verifikasi surel berhasil. |
| `tampilkanPesanGalat(pesan: String): void` | public | Menampilkan pesan kegagalan, misalnya domain surel tidak valid, surel sudah terdaftar, kredensial salah, akun belum terverifikasi, atau akun diblokir. |
| `tampilkanTombolKeluar(): void` | public | Menampilkan tombol "Keluar" bagi pengguna yang sedang masuk. |
| `kirimPermintaanLogout(token: String): void` | public | Meneruskan permintaan *logout* beserta token sesi ke `AkunController.logout()`. |
| `hapusTokenLokal(): void` | public | Menghapus token sesi dari penyimpanan lokal peramban setelah *logout* berhasil. |
| `arahkanKeHalamanLogin(): void` | public | Mengarahkan pengguna ke halaman *login* setelah *logout*. |

Tabel 5.1.2. Atribut Kelas HalamanOtentikasi

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| nama | private | `String` |
| nim | private | `String` |
| email | private | `String` |
| kataSandi | private | `String` |
| setujuKebijakan | private | `Boolean` |
| kodeVerifikasi | private | `String` |
| sisaWaktu | private | `Integer` |
| token | private | `String` |

## 5.2 Kelas HalamanProfil

**Nama Kelas:** HalamanProfil  
**ID Kelas:** C02

Tabel 5.2.1. Operasi Kelas HalamanProfil

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `muatProfil(): void` | public | Meminta data profil akun yang sedang masuk ke `AkunController.getProfil(token)`. |
| `tampilkanProfil(data: Akun): void` | public | Menampilkan nama, NIM, dan surel akun (KF04). |
| `tampilkanDaftarListing(daftarBarang: List<Barang>): void` | public | Menampilkan daftar listing milik akun dengan memanggil `KartuProduk.render()` untuk setiap barang. |
| `bukaPengaturanAkun(): void` | public | Membuka menu pengaturan akun dan meminta tautan dokumen legal ke `AkunController.getTautanDokumenLegal()`. |
| `tampilkanTautanKebijakan(tautan: String): void` | public | Menampilkan tautan Kebijakan Privasi pada menu pengaturan akun. |

Tabel 5.2.2. Atribut Kelas HalamanProfil

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| dataAkun | private | `Akun` |
| daftarKartuProduk | private | `List<KartuProduk>` |

## 5.3 Kelas HalamanListingPenjual

**Nama Kelas:** HalamanListingPenjual  
**ID Kelas:** C03

Tabel 5.3.1. Operasi Kelas HalamanListingPenjual

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `muatDaftarListing(): void` | public | Meminta seluruh listing milik penjual yang sedang masuk ke `BarangController.getListingSaya(token)`. |
| `tampilkanDaftarListing(daftarListing: List<Barang>): void` | public | Mengelompokkan listing berdasarkan status, lalu menampilkan kartu produk pada tab yang aktif (KF20). |
| `kelompokkanBerdasarkanStatus(daftarListing: List<Barang>): void` | public | Memisahkan listing ke dalam `daftarTersedia` dan `daftarTerjual` sesuai status masing-masing. |
| `pilihTab(namaTab: String): void` | public | Mengganti tab aktif antara "Tersedia" dan "Terjual". |
| `onClickUbah(idBarang: String): void` | public | Meminta data listing untuk diubah ke `BarangController.getBarang(idBarang, token, "ubah")`, lalu membuka FormulirBarang dengan data tersebut. |
| `onClickHapus(idBarang: String): void` | public | Meminta pemeriksaan kepemilikan ke `BarangController.siapkanPenghapusan()` sebelum menampilkan dialog konfirmasi hapus. |
| `onClickTandaiTerjual(idBarang: String): void` | public | Meminta pemeriksaan kepemilikan dan status asal ke `BarangController.siapkanPerubahanStatus(token, idBarang, "Tersedia")`. |
| `onClickBatalTerjual(idBarang: String): void` | public | Meminta pemeriksaan kepemilikan dan status asal ke `BarangController.siapkanPerubahanStatus(token, idBarang, "Terjual")`. |
| `tampilkanKonfirmasi(barang: Barang, aksi: String): void` | public | Menampilkan dialog konfirmasi berisi judul listing dan dampak aksi, misalnya peringatan bahwa penghapusan bersifat permanen. |
| `konfirmasiAksi(): void` | public | Meneruskan aksi yang dikonfirmasi ke `BarangController.deleteBarang()` atau `BarangController.ubahStatusBarang()`. |
| `batalkanKonfirmasi(): void` | public | Menutup dialog tanpa mengirim permintaan apa pun, sehingga listing tetap seperti semula. |
| `tutupDialog(): void` | public | Menutup dialog konfirmasi setelah aksi selesai diproses. |
| `tampilkanNotifikasi(kodePesan: String): void` | public | Menampilkan notifikasi hasil aksi, misalnya listing berhasil dihapus, listing sudah terjual, atau akses ditolak. |

Tabel 5.3.2. Atribut Kelas HalamanListingPenjual

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| daftarTersedia | private | `List<Barang>` |
| daftarTerjual | private | `List<Barang>` |
| tabAktif | private | `String` |
| idBarangTerpilih | private | `String` |

## 5.4 Kelas FormulirBarang

**Nama Kelas:** FormulirBarang  
**ID Kelas:** C04

Tabel 5.4.1. Operasi Kelas FormulirBarang

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `bukaFormulir(): void` | public | Meminta daftar kategori dan lokasi COD ke `BarangController.getDataFormulir()` untuk formulir listing baru. |
| `tampilkanFormulir(barang: Barang, daftarFoto: List<FotoBarang>, daftarKategori: List<Kategori>, daftarLokasi: List<LokasiCOD>): void` | public | Menampilkan formulir listing. Isian kosong untuk pembuatan listing (`barang` bernilai `null`) dan terisi data lama untuk pengubahan listing (KF15, KF19). |
| `suntingIsian(data: Map<String, Any>): void` | public | Menyimpan perubahan isian judul, harga, deskripsi kondisi, kategori, dan lokasi COD ke atribut formulir. |
| `pilihFoto(fotoBaru: List<File>): void` | public | Menerima berkas foto yang dipilih penjual untuk divalidasi dan ditampilkan sebagai pratinjau. |
| `validasiTipeData(data: Map<String, Any>): Boolean` | public | Memeriksa tipe data isian di sisi klien, misalnya harga harus berupa angka positif. |
| `validasiFotoSisiKlien(fotoBaru: List<File>, fotoDipertahankan: List<FotoBarang>): Boolean` | public | Memeriksa bahwa setiap foto berformat JPG/PNG, berukuran maksimum 5 MB, dan jumlah foto akhir tidak melebihi 5 (KF23, KF24). |
| `validasiIsianWajib(data: Map<String, Any>, galeri: List<Any>): Boolean` | public | Memeriksa bahwa judul, harga, kategori, dan minimal satu foto sudah diisi sebelum formulir dikirim (KF18). |
| `tandaiIsianKosong(): void` | public | Memberi penanda merah pada isian wajib yang belum diisi. |
| `tolakPratinjau(): void` | public | Menolak pratinjau berkas yang melanggar ketentuan foto dan menampilkan ketentuan yang dilanggar. |
| `kirimFormulir(data: Map<String, Any>, fotoBaru: List<File>): void` | public | Mengirim data listing baru ke `BarangController.buatBarang()` setelah lolos validasi sisi klien. |
| `onClickUpdate(): void` | public | Memvalidasi isian, lalu mengirim perubahan listing ke `BarangController.updateBarang()`. |
| `arahkanKeDetail(idBarang: String): void` | public | Mengarahkan penjual ke halaman detail listing setelah perubahan tersimpan. |
| `tampilkanNotifikasi(kodePesan: String): void` | public | Menampilkan notifikasi hasil penyimpanan, misalnya "Listing berhasil dibuat". |

Tabel 5.4.2. Atribut Kelas FormulirBarang

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| judul | private | `String` |
| harga | private | `Double` |
| deskripsiKondisi | private | `String` |
| idKategori | private | `String` |
| idLokasi | private | `String` |
| daftarFoto | private | `List<FotoBarang>` |
| fotoBaru | private | `List<File>` |

## 5.5 Kelas HalamanKatalog

**Nama Kelas:** HalamanKatalog  
**ID Kelas:** C05

Tabel 5.5.1. Operasi Kelas HalamanKatalog

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `showKatalog(): void` | public | Memuat halaman pertama katalog tanpa kata kunci dan filter melalui `KatalogController.getProduk()`. |
| `inputPencarian(kataKunci: String): void` | public | Menyimpan kata kunci, mengembalikan tampilan ke halaman pertama, lalu meminta hasil ke `KatalogController.getProduk()`. |
| `pilihFilter(filterAktif: Map<String, Any>): void` | public | Menyimpan filter kategori, rentang harga, dan lokasi COD, lalu meminta hasil baru dari halaman pertama bila rentang harga sah. |
| `pilihUrutan(kriteriaUrutan: String): void` | public | Menyimpan kriteria urutan (terbaru, harga terendah, atau harga tertinggi), lalu meminta hasil baru dari halaman pertama. |
| `validasiRentangHarga(hargaMin: Double, hargaMax: Double): Boolean` | public | Memeriksa bahwa harga minimum tidak lebih besar daripada harga maksimum. |
| `tandaiRentangHarga(): void` | public | Menandai kedua kolom harga ketika rentang harga tidak sah. |
| `tampilkanFilterAktif(filterAktif: Map<String, Any>): void` | public | Menampilkan filter yang sedang diterapkan. |
| `hapusSemuaFilter(): void` | public | Mengosongkan kata kunci dan seluruh filter, lalu menampilkan katalog penuh dari halaman pertama. |
| `resetHalaman(): void` | public | Mengembalikan `halamanAktif` ke halaman pertama setiap kali kata kunci, filter, atau urutan berubah. |
| `tampilkanHasil(hasil: Map<String, Any>): void` | public | Menampilkan maksimum 20 kartu produk dengan memanggil `KartuProduk.render()` dan menyimpan jumlah total listing (KF28). |
| `pindahHalaman(halaman: Integer): void` | public | Meminta halaman lain dengan kata kunci, filter, dan urutan yang sama. |
| `gulirKeAtas(): void` | public | Menggulir tampilan ke bagian atas setelah berpindah halaman. |
| `tampilkanPagination(total: Integer, halaman: Integer): void` | public | Menampilkan navigasi antarhalaman berdasarkan jumlah total listing dan halaman aktif. |
| `sembunyikanPagination(): void` | public | Menyembunyikan navigasi antarhalaman ketika tidak ada listing yang ditampilkan. |
| `tampilkanPesanKosong(kodePesan: String): void` | public | Menampilkan pesan "Belum ada barang yang tersedia" atau "Barang tidak ditemukan" beserta tombol "Hapus Semua Filter" (KF29). |

Tabel 5.5.2. Atribut Kelas HalamanKatalog

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| listProduk | private | `List<Barang>` |
| halamanAktif | private | `Integer` |
| total | private | `Integer` |
| kataKunci | private | `String` |
| filterAktif | private | `Map<String, Any>` |
| kriteriaUrutan | private | `String` |

## 5.6 Kelas KartuProduk

**Nama Kelas:** KartuProduk  
**ID Kelas:** C06

Tabel 5.6.1. Operasi Kelas KartuProduk

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `render(barang: Barang): void` | public | Mengisi atribut kartu dari data barang, lalu menampilkan foto utama, judul, harga, status, kategori, dan lokasi COD. |
| `onClickDetail(idBarang: String): void` | public | Membuka HalamanDetailBarang untuk listing yang dipilih melalui `HalamanDetailBarang.showBarang(idBarang)`. |

Tabel 5.6.2. Atribut Kelas KartuProduk

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| idBarang | private | `String` |
| judul | private | `String` |
| harga | private | `Double` |
| fotoUtama | private | `String` |
| status | private | `String` |
| namaKategori | private | `String` |
| namaLokasi | private | `String` |

## 5.7 Kelas HalamanDetailBarang

**Nama Kelas:** HalamanDetailBarang  
**ID Kelas:** C07

Tabel 5.7.1. Operasi Kelas HalamanDetailBarang

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `showBarang(idBarang: String): void` | public | Meminta detail listing ke `BarangController.getBarang(idBarang, token, "detail")`, lalu menentukan tampilan sesuai hasilnya (Algo-001). |
| `tampilkanDetail(detail: Map<String, Any>): void` | public | Menampilkan seluruh foto, judul, harga, deskripsi kondisi, kategori, lokasi COD, dan identitas penjual (KF17). |
| `pilihFoto(indeksFoto: Integer): void` | public | Memilih foto pada galeri untuk dibuka dalam ukuran penuh. |
| `tampilkanLightbox(indeksFoto: Integer): void` | public | Menampilkan foto dalam ukuran penuh beserta navigasi maju dan mundur dari `daftarFoto` tanpa meminta data ulang. |
| `bukaProfilPenjual(idPenjual: String): void` | public | Membuka halaman profil penjual (UC05). |
| `tampilkanAksiPemilik(status: String): void` | public | Menampilkan tombol ubah, hapus, serta tandai atau batalkan penandaan terjual sesuai status listing bila pemohon adalah pemilik listing. |
| `tampilkanTombolPembeli(): void` | public | Menampilkan tombol "Hubungi Penjual" dan "Laporkan" bagi pengguna yang bukan pemilik listing. |
| `tampilkanArsipTerjual(): void` | public | Memberi label "Terjual" dan menonaktifkan tombol "Hubungi Penjual" bila listing sudah terjual. |
| `tampilkanTidakDitemukan(): void` | public | Menampilkan pemberitahuan bahwa listing tidak ditemukan. |
| `onClickContact(): void` | public | Meminta ruang percakapan ke `PercakapanController.mulaiPercakapan(token, idBarang)`, lalu membuka HalamanPercakapan (UC16). |
| `arahkanKeKatalog(): void` | public | Mengarahkan pengguna kembali ke HalamanKatalog. |
| `tampilkanNotifikasi(kodePesan: String): void` | public | Menampilkan notifikasi, misalnya penjual tidak dapat dihubungi karena akunnya diblokir. |
| `onClickLapor(): void` | public | Membuka FormulirLaporan dengan listing ini sebagai objek yang dilaporkan (UC19). |

Tabel 5.7.2. Atribut Kelas HalamanDetailBarang

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| barang | private | `Barang` |
| daftarFoto | private | `List<FotoBarang>` |
| fotoUtama | private | `String` |

### 5.7.1 Algoritma/Query: showBarang

Algoritma ini menentukan tombol yang ditampilkan sesuai skenario UC15, yaitu pengunjung biasa, pemilik listing, listing terjual, atau listing yang tidak ditemukan.

**Nama Kelas:** HalamanDetailBarang  
**Nama Operasi:** `showBarang(idBarang: String): void`  
**ID Algoritma:** Algo-001

```text
token ← token sesi pada penyimpanan lokal peramban (kosong bila belum login)
detail ← BarangController.getBarang(idBarang, token, "detail")

IF detail = null THEN                                     // listing dihapus atau tidak ada
    tampilkanTidakDitemukan()
    RETURN
END IF

barang ← detail["barang"]
daftarFoto ← detail["daftarFoto"]
fotoUtama ← daftarFoto[0].pathBerkas                      // foto dengan urutan pertama
tampilkanDetail(detail)

IF detail["idAkunPemohon"] ≠ null AND detail["idAkunPemohon"] = barang.idPenjual THEN
    tampilkanAksiPemilik(barang.status)                   // pemohon adalah pemilik listing
ELSE IF barang.status = "Terjual" THEN
    tampilkanArsipTerjual()                               // tombol Hubungi Penjual dinonaktifkan
ELSE
    tampilkanTombolPembeli()                              // tombol Hubungi Penjual dan Laporkan
END IF
```

## 5.8 Kelas HalamanPercakapan

**Nama Kelas:** HalamanPercakapan  
**ID Kelas:** C08

Tabel 5.8.1. Operasi Kelas HalamanPercakapan

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `bukaPercakapan(idPercakapan: String): void` | public | Meminta isi ruang percakapan ke `PercakapanController.bukaPercakapan(token, idPercakapan)`. |
| `showPercakapan(ruang: Map<String, Any>): void` | public | Menampilkan ruang percakapan berisi identitas lawan bicara, riwayat pesan, kolom pengiriman pesan, dan tautan Kebijakan Privasi. |
| `gulirKePesanTerakhir(): void` | public | Menggulir ruang percakapan ke pesan paling akhir. |
| `tampilkanAksesDitolak(): void` | public | Menampilkan penolakan akses bila pemohon bukan peserta percakapan, tanpa menampilkan isi pesan apa pun (KF35). |
| `tampilkanTautanKebijakan(): void` | public | Menampilkan tautan Kebijakan Privasi pada ruang percakapan (KF39). |
| `kirimPesan(isi: String): void` | public | Mengirim pesan ke `PercakapanController.kirimPesan(token, idPercakapan, isi)` bila isi pesan tidak kosong. |
| `validasiInputKosong(isi: String): Boolean` | public | Memeriksa apakah isi pesan kosong atau hanya berisi spasi setelah dipangkas, sehingga pesan kosong tidak dikirim ke server. |
| `tampilkanUrutanPesan(daftarPesan: List<Map<String, Any>>): void` | public | Menampilkan pesan secara berurutan berdasarkan waktu kirim beserta waktu pengirimannya. |
| `bukaDaftarPercakapan(): void` | public | Meminta daftar percakapan milik pengguna ke `PercakapanController.getDaftarPercakapan(token)`. |
| `showDaftarPercakapan(daftar: List<Map<String, Any>>): void` | public | Menampilkan daftar percakapan beserta lawan bicara, cuplikan pesan terakhir, dan penanda jumlah pesan belum dibaca. |

Tabel 5.8.2. Atribut Kelas HalamanPercakapan

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| percakapanAktif | private | `Percakapan` |
| daftarPercakapan | private | `List<Map<String, Any>>` |
| isiTeksInput | private | `String` |

## 5.9 Kelas PanelNotifikasi

**Nama Kelas:** PanelNotifikasi  
**ID Kelas:** C09

Tabel 5.9.1. Operasi Kelas PanelNotifikasi

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `tampilkanDaftarNotifikasi(daftar: List<Notifikasi>): void` | public | Menampilkan daftar pemberitahuan kepada pengguna, misalnya pesan baru dan tindakan moderasi. |
| `tampilkanPenandaBelumDibaca(jumlah: Integer): void` | public | Menampilkan penanda jumlah pesan atau notifikasi yang belum dibaca. |

Tabel 5.9.2. Atribut Kelas PanelNotifikasi

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| daftarNotifikasi | private | `List<Notifikasi>` |
| jumlahBelumDibaca | private | `Integer` |

## 5.10 Kelas FormulirLaporan

**Nama Kelas:** FormulirLaporan  
**ID Kelas:** C10

Tabel 5.10.1. Operasi Kelas FormulirLaporan

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `tampilkanFormulirLaporan(objekDilaporkan: String): void` | public | Menampilkan formulir laporan sesuai konteks objek yang dilaporkan, berisi pilihan kategori pelanggaran, isian alasan, dan unggahan bukti. |
| `unggahBukti(berkas: List<File>): void` | public | Menerima berkas bukti tangkapan layar yang dilampirkan pengguna. |
| `validasiIsianWajib(): Boolean` | public | Memeriksa bahwa kategori pelanggaran, alasan, dan minimal satu bukti tangkapan layar sudah diisi. |
| `tandaiIsianKosong(): void` | public | Memberi penanda merah pada isian yang kosong dan menampilkan galat "Alasan dan bukti tangkapan layar wajib diisi". |
| `kirimLaporan(): void` | public | Mengirim laporan beserta bukti ke `LaporanController.buatLaporan(token, data, berkasBukti)` setelah lolos validasi. |
| `tampilkanNotifikasi(pesan: String): void` | public | Menampilkan notifikasi hasil pengiriman, misalnya "Laporan berhasil dikirim". |

Tabel 5.10.2. Atribut Kelas FormulirLaporan

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| jenisPelanggaran | private | `String` |
| teksAlasan | private | `String` |
| objekDilaporkan | private | `String` |
| berkasBukti | private | `List<File>` |

## 5.11 Kelas DasborAdmin

**Nama Kelas:** DasborAdmin  
**ID Kelas:** C11

Tabel 5.11.1. Operasi Kelas DasborAdmin

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `bukaDaftarLaporan(): void` | public | Meminta seluruh laporan ke `ModerasiController.getAllLaporan(token)`. |
| `tampilkanDaftarLaporan(daftar: List<Laporan>): void` | public | Menampilkan tabel laporan beserta status penanganannya. |
| `filterLaporan(status: String): void` | public | Meminta laporan dengan status tertentu ke `ModerasiController.filterByStatus(token, status)`. |
| `tampilkanAksesDitolak(): void` | public | Menampilkan peringatan "Akses Ditolak" dan mengalihkan pengguna bukan admin ke beranda. |
| `bukaDetailLaporan(idLaporan: String): void` | public | Meminta detail laporan ke `ModerasiController.getDetailLaporan(token, idLaporan)`. |
| `tampilkanDetailLaporan(laporan: Laporan): void` | public | Menampilkan detail laporan beserta tombol ubah status, hapus listing, blokir akun, dan buka blokir akun. |
| `onClickUbahStatus(idLaporan: String, statusBaru: String): void` | public | Mengirim status penanganan baru ke `ModerasiController.ubahStatusLaporan()`. |
| `onClickHapusListing(idBarang: String): void` | public | Menyiapkan tindakan hapus listing dan menampilkan dialog konfirmasi beserta isian alasan. |
| `onClickBlokirAkun(idAkun: String): void` | public | Menyiapkan tindakan blokir akun dan menampilkan dialog konfirmasi beserta isian alasan. |
| `onClickBukaBlokir(idAkun: String): void` | public | Menyiapkan tindakan buka blokir akun dan menampilkan dialog konfirmasi. |
| `tampilkanModalKonfirmasi(aksi: String): void` | public | Menampilkan dialog konfirmasi sesuai tindakan moderasi yang dipilih. |
| `konfirmasiTindakan(alasan: String): void` | public | Meneruskan tindakan yang dikonfirmasi ke `ModerasiController.hapusListingDilaporkan()`, `blokirAkun()`, atau `bukaBlokirAkun()`. |
| `tampilkanStatusTerbaru(pesan: String): void` | public | Menampilkan status laporan atau status akun terbaru setelah tindakan berhasil. |

Tabel 5.11.2. Atribut Kelas DasborAdmin

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| daftarLaporan | private | `List<Laporan>` |
| filterStatus | private | `String` |
| detailLaporan | private | `Laporan` |
| statusBaru | private | `String` |
| alasanTindakan | private | `String` |

## 5.12 Kelas HalamanDokumenLegal

**Nama Kelas:** HalamanDokumenLegal  
**ID Kelas:** C12

Tabel 5.12.1. Operasi Kelas HalamanDokumenLegal

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `bukaDokumen(jenis: String): void` | public | Meminta dokumen versi terbaru ke `DokumenLegalController.getDokumen(jenis)` beserta klausul privasi percakapan. |
| `tampilkanDokumen(judul: String, isi: String): void` | public | Menampilkan judul dan isi lengkap Kebijakan Privasi atau Ketentuan Penggunaan. |
| `sorotKlausaPrivasi(klausa: String): void` | public | Menyoroti klausul bahwa isi percakapan pribadi tidak dapat diakses oleh admin maupun pengembang. |

Tabel 5.12.2. Atribut Kelas HalamanDokumenLegal

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| judul | private | `String` |
| isiDokumen | private | `String` |

## 5.13 Kelas AkunController

**Nama Kelas:** AkunController  
**ID Kelas:** C13

Tabel 5.13.1. Operasi Kelas AkunController

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `daftarAkun(nama: String, nim: String, email: String, kataSandi: String, setujuKebijakan: Boolean): Boolean` | public | Memproses pendaftaran akun baru, mulai dari validasi hingga pengiriman kode verifikasi (Algo-002). |
| `validasiKelengkapanFormulir(nama: String, nim: String, email: String, kataSandi: String, setujuKebijakan: Boolean): Boolean` | public | Memeriksa bahwa seluruh isian terisi dan kebijakan privasi telah disetujui (KF14). |
| `validasiDomainEmail(email: String): Boolean` | public | Memeriksa bahwa alamat surel berakhiran @itb.ac.id (KF05). |
| `cekKeunikanEmail(email: String): Boolean` | public | Memeriksa melalui `Akun.cariByEmail()` bahwa surel belum dipakai akun lain (KF05). |
| `hashKataSandi(kataSandi: String): String` | public | Menghasilkan nilai *hash* bcrypt kata sandi melalui `Kriptografi.hash()` (KF09). |
| `buatKodeVerifikasi(idAkun: String): String` | public | Membangkitkan kode verifikasi berbatas waktu 15 menit dan menyimpannya ke TokenVerifikasi (KF06, Algo-003). |
| `getTautanDokumenLegal(): String` | public | Mengambil tautan Kebijakan Privasi dan Ketentuan Penggunaan melalui `DokumenLegal.getTautan()` (KF13). |
| `verifikasiAkun(email: String, kode: String): Boolean` | public | Mencocokkan kode verifikasi dan mengubah status akun menjadi "Terverifikasi" (KF07, Algo-004). |
| `validasiKodeVerifikasi(kode: String): Boolean` | public | Mencocokkan kode masukan dengan token aktif melalui `TokenVerifikasi.cocokkanKode()`. Bernilai `true` bila cocok. |
| `cekKedaluwarsaKode(idToken: String): Boolean` | public | Memeriksa melalui `TokenVerifikasi.sudahKedaluwarsa()` apakah kode telah melewati 15 menit. Bernilai `true` bila sudah kedaluwarsa. |
| `hanguskanKodeLama(idAkun: String): void` | public | Menandai token verifikasi aktif milik akun sebagai hangus sebelum kode baru dibuat. |
| `kirimUlangKode(email: String): Boolean` | public | Menghanguskan kode lama, membangkitkan kode baru, lalu mengirimkannya ke surel pengguna (Algo-005). |
| `login(email: String, kataSandi: String): Map<String, Any>` | public | Memproses *login*, meliputi pencocokan kredensial, pemeriksaan status akun, dan pembuatan sesi (Algo-006). |
| `cariAkunByEmail(email: String): Akun` | public | Mengambil akun berdasarkan surel melalui `Akun.cariByEmail()`. |
| `verifikasiKataSandi(kataSandi: String, kataSandiHash: String): Boolean` | public | Membandingkan kata sandi masukan dengan *hash* tersimpan melalui `Kriptografi.cocokkanHash()` (KF10). |
| `cekStatusAkun(idAkun: String): String` | public | Mengambil status akun, yaitu "Belum Terverifikasi", "Terverifikasi", atau "Diblokir". |
| `buatSesiLogin(idAkun: String): SesiLogin` | public | Membuat token sesi melalui `SesiLogin.buatToken()` dan menyimpannya dengan masa berlaku 24 jam (KF11). |
| `logout(token: String): Boolean` | public | Memverifikasi token melalui Otorisasi, lalu mencabut sesi yang sedang aktif (KF12). |
| `cabutSesi(token: String): void` | public | Menonaktifkan sesi *login* melalui `SesiLogin.nonaktifkan(token)`. |
| `getProfil(token: String): Map<String, Any>` | public | Mengambil data identitas akun dan daftar listing milik akun yang sedang masuk (KF04). |
| `getIdAkunDariSesi(token: String): String` | public | Memverifikasi token melalui `Otorisasi.verifikasiToken()` dan mengembalikan ID akun pemilik sesi. |
| `getDaftarBarangAkun(idAkun: String): List<Barang>` | public | Mengambil daftar listing milik akun melalui `Barang.getListingPenjual()`. |

Tabel 5.13.2. Atribut Kelas AkunController

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| - | - | - |

AkunController tidak memiliki atribut. Seluruh data yang dibutuhkan diterima melalui parameter operasi atau dibaca dari kelas *Model*, sehingga *Controller* tidak menyimpan keadaan antarpermintaan (subbab 2.2.2).

### 5.13.1 Algoritma/Query: daftarAkun

**Nama Kelas:** AkunController  
**Nama Operasi:** `daftarAkun(nama: String, nim: String, email: String, kataSandi: String, setujuKebijakan: Boolean): Boolean`  
**ID Algoritma:** Algo-002

```text
IF NOT validasiKelengkapanFormulir(nama, nim, email, kataSandi, setujuKebijakan) THEN
    RETURN false                                          // isian kosong atau kebijakan tidak disetujui (KF14)
END IF

IF NOT validasiDomainEmail(email) THEN
    RETURN false                                          // surel bukan @itb.ac.id (KF05)
END IF

IF NOT cekKeunikanEmail(email) THEN
    RETURN false                                          // surel sudah terdaftar (KF05)
END IF

kataSandiHash ← hashKataSandi(kataSandi)                  // bcrypt, kata sandi asli tidak disimpan (KF09)
idAkun ← Akun.simpan(nama, nim, email, kataSandiHash, "Belum Terverifikasi", setujuKebijakan)  // KF02
kode ← buatKodeVerifikasi(idAkun)                         // Algo-003
RETURN NotifikasiController.kirimEmailVerifikasi(email, kode)  // KF06
```

### 5.13.2 Algoritma/Query: buatKodeVerifikasi

**Nama Kelas:** AkunController  
**Nama Operasi:** `buatKodeVerifikasi(idAkun: String): String`  
**ID Algoritma:** Algo-003

```text
kode ← string 6 digit angka acak
waktuBuat ← waktu sekarang
waktuKedaluwarsa ← waktuBuat + 15 menit                   // KF06
TokenVerifikasi.simpan(idAkun, kode, waktuBuat, waktuKedaluwarsa, "Aktif")
RETURN kode
```

### 5.13.3 Algoritma/Query: verifikasiAkun

**Nama Kelas:** AkunController  
**Nama Operasi:** `verifikasiAkun(email: String, kode: String): Boolean`  
**ID Algoritma:** Algo-004

```text
akun ← Akun.cariByEmail(email)
IF akun = null THEN
    RETURN false
END IF

tokenVerifikasi ← TokenVerifikasi.cariTokenAktif(akun.idAkun)
IF tokenVerifikasi = null THEN
    RETURN false                                          // tidak ada kode aktif, pengguna perlu meminta kode baru
END IF

IF NOT validasiKodeVerifikasi(kode) THEN
    RETURN false                                          // kode salah
END IF

IF cekKedaluwarsaKode(tokenVerifikasi.idToken) THEN
    RETURN false                                          // kode melewati 15 menit
END IF

tokenVerifikasi.tandaiTerpakai()                          // kode tidak dapat dipakai ulang
akun.perbaruiStatusAkun("Terverifikasi")                  // KF07
RETURN true
```

### 5.13.4 Algoritma/Query: kirimUlangKode

**Nama Kelas:** AkunController  
**Nama Operasi:** `kirimUlangKode(email: String): Boolean`  
**ID Algoritma:** Algo-005

```text
akun ← Akun.cariByEmail(email)
IF akun = null THEN
    RETURN false
END IF

hanguskanKodeLama(akun.idAkun)                            // TokenVerifikasi.cariTokenAktif() lalu tandaiHangus()
kodeBaru ← buatKodeVerifikasi(akun.idAkun)                // Algo-003, batas waktu 15 menit yang baru
RETURN NotifikasiController.kirimEmailVerifikasi(email, kodeBaru)
```

### 5.13.5 Algoritma/Query: login

**Nama Kelas:** AkunController  
**Nama Operasi:** `login(email: String, kataSandi: String): Map<String, Any>`  
**ID Algoritma:** Algo-006

```text
akun ← cariAkunByEmail(email)
IF akun = null THEN
    RETURN {berhasil: false, kodePesan: "KREDENSIAL_SALAH"}
END IF

IF NOT verifikasiKataSandi(kataSandi, akun.kataSandiHash) THEN
    RETURN {berhasil: false, kodePesan: "KREDENSIAL_SALAH"}  // KF10
END IF

status ← cekStatusAkun(akun.idAkun)
IF status = "Belum Terverifikasi" THEN
    RETURN {berhasil: false, kodePesan: "BELUM_TERVERIFIKASI"}  // disertai opsi kirim ulang kode (KF08)
ELSE IF status = "Diblokir" THEN
    RETURN {berhasil: false, kodePesan: "AKUN_DIBLOKIR"}  // pesan penangguhan
END IF

sesi ← buatSesiLogin(akun.idAkun)                         // token baru, berlaku paling lama 24 jam (KF11)
RETURN {berhasil: true, token: sesi.token, peran: akun.peran}
```

## 5.14 Kelas BarangController

**Nama Kelas:** BarangController  
**ID Kelas:** C14

Tabel 5.14.1. Operasi Kelas BarangController

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `getDataFormulir(): Map<String, Any>` | public | Mengambil daftar kategori dan daftar lokasi COD untuk formulir listing baru (KF15, KF19). |
| `buatBarang(token: String, data: Map<String, Any>, fotoBaru: List<File>): Boolean` | public | Memvalidasi ulang isian dan foto di sisi server, menyimpan listing berstatus "Tersedia" beserta fotonya, lalu menerbitkannya ke katalog (KF16, Algo-008). |
| `getIdPenjualDariSesi(token: String): String` | public | Memverifikasi token melalui `Otorisasi.verifikasiToken()` dan mengembalikan ID akun pemilik sesi melalui `SesiLogin.getIdAkun()`. |
| `validasiKelengkapanIsian(data: Map<String, Any>, galeri: List<Any>): Boolean` | public | Memeriksa bahwa judul, harga, kategori, dan minimal satu foto sudah diisi (KF18). |
| `validasiFoto(fotoBaru: List<File>, fotoDipertahankan: List<FotoBarang>): Boolean` | public | Memeriksa jumlah, format, dan ukuran foto listing (KF23, KF24, Algo-007). |
| `simpanFoto(idBarang: String, fotoBaru: List<File>): List<String>` | public | Mengunggah berkas foto ke `PenyimpananBerkas.simpan()` dan mengembalikan lokasi berkasnya. |
| `terbitkanKeKatalog(idBarang: String): void` | public | Menyelesaikan penerbitan listing berstatus "Tersedia" setelah data dan fotonya tersimpan, sehingga listing muncul pada katalog (KF16). |
| `getListingSaya(token: String): List<Barang>` | public | Mengambil seluruh listing milik penjual yang sedang masuk melalui `Barang.getListingPenjual()` (KF20). |
| `getBarang(idBarang: String, token: String, tujuan: String): Map<String, Any>` | public | Mengambil data listing untuk tujuan "detail" (UC15) atau "ubah" (UC09) (Algo-009). |
| `updateBarang(token: String, idBarang: String, data: Map<String, Any>, fotoBaru: List<File>, fotoDihapus: List<String>): Boolean` | public | Memverifikasi kepemilikan, memvalidasi ulang isian dan foto, lalu menyimpan perubahan listing dan galerinya (KF21, Algo-010). |
| `verifikasiKepemilikan(idAkun: String, idPenjual: String): Boolean` | public | Memeriksa bahwa akun yang sedang masuk adalah pemilik listing (KF22). |
| `siapkanPenghapusan(token: String, idBarang: String): Barang` | public | Memverifikasi token dan kepemilikan, lalu mengembalikan data listing untuk ditampilkan pada dialog konfirmasi hapus. |
| `deleteBarang(token: String, idBarang: String): Boolean` | public | Memverifikasi ulang kepemilikan, lalu menghapus listing, metadata foto, dan berkas fotonya (KF21, Algo-011). |
| `siapkanPerubahanStatus(token: String, idBarang: String, statusAsal: String): Barang` | public | Memverifikasi token, kepemilikan, dan status asal listing, lalu mengembalikan data listing untuk dialog konfirmasi perubahan status. |
| `ubahStatusBarang(token: String, idBarang: String, statusAsal: String, statusTujuan: String): Boolean` | public | Mengubah status listing antara "Tersedia" dan "Terjual" (KF40, KF41, Algo-012). |

Tabel 5.14.2. Atribut Kelas BarangController

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| - | - | - |

BarangController tidak memiliki atribut dengan alasan yang sama dengan AkunController.

### 5.14.1 Algoritma/Query: validasiFoto

Algoritma ini dipakai oleh `buatBarang()` dan `updateBarang()` sebagai validasi sisi server, karena validasi pada FormulirBarang dapat dilewati oleh pengguna.

**Nama Kelas:** BarangController  
**Nama Operasi:** `validasiFoto(fotoBaru: List<File>, fotoDipertahankan: List<FotoBarang>): Boolean`  
**ID Algoritma:** Algo-007

```text
IF panjang(fotoBaru) + panjang(fotoDipertahankan) > 5 THEN
    RETURN false                                          // maksimum 5 foto per listing (KF23)
END IF

FOR EACH foto IN fotoBaru DO
    IF NOT FotoBarang.validasiFormat(foto.format) THEN
        RETURN false                                      // hanya JPG atau PNG (KF24)
    END IF
    IF NOT FotoBarang.validasiUkuran(foto.ukuran) THEN
        RETURN false                                      // maksimum 5 MB per foto (KF24)
    END IF
END FOR

RETURN true
```

### 5.14.2 Algoritma/Query: buatBarang

**Nama Kelas:** BarangController  
**Nama Operasi:** `buatBarang(token: String, data: Map<String, Any>, fotoBaru: List<File>): Boolean`  
**ID Algoritma:** Algo-008

```text
idPenjual ← getIdPenjualDariSesi(token)
IF idPenjual = null THEN
    RETURN false                                          // sesi tidak sah atau kedaluwarsa
END IF

IF NOT validasiKelengkapanIsian(data, fotoBaru) THEN
    RETURN false                                          // KF18
END IF
IF NOT Kategori.validasiKategori(data["idKategori"]) OR NOT LokasiCOD.validasiLokasi(data["idLokasi"]) THEN
    RETURN false
END IF
IF NOT validasiFoto(fotoBaru, []) THEN
    RETURN false                                          // Algo-007
END IF

data["idPenjual"] ← idPenjual
idBarang ← Barang.simpan(data, waktu sekarang)            // status awal "Tersedia" (KF16)

daftarPath ← simpanFoto(idBarang, fotoBaru)               // unggah ke PenyimpananBerkas
FOR i ← 0 TO panjang(fotoBaru) - 1 DO
    foto ← fotoBaru[i]
    FotoBarang.simpan(idBarang, foto.nama, foto.format, foto.ukuran, i + 1, daftarPath[i])
END FOR

terbitkanKeKatalog(idBarang)
RETURN true
```

### 5.14.3 Algoritma/Query: getBarang

**Nama Kelas:** BarangController  
**Nama Operasi:** `getBarang(idBarang: String, token: String, tujuan: String): Map<String, Any>`  
**ID Algoritma:** Algo-009

```text
barang ← Barang.cariById(idBarang)

IF tujuan = "ubah" THEN                                   // UC09, wajib login dan pemilik
    idAkun ← getIdPenjualDariSesi(token)
    IF idAkun = null OR barang = null THEN
        RETURN null
    END IF
    IF NOT verifikasiKepemilikan(idAkun, barang.idPenjual) THEN
        RETURN {aksesDitolak: true}                       // KF22
    END IF
    RETURN {
        barang: barang,
        daftarFoto: FotoBarang.getGaleri(idBarang),
        daftarKategori: Kategori.getDaftarKategori(),
        daftarLokasi: LokasiCOD.getDaftarLokasi()
    }
END IF

// tujuan = "detail" (UC15), dapat dibuka tanpa login
IF barang = null THEN
    RETURN null                                           // listing dihapus atau tidak ada
END IF

idAkunPemohon ← null
IF token ≠ null THEN
    sesi ← Otorisasi.verifikasiToken(token)
    IF sesi ≠ null THEN
        idAkunPemohon ← sesi.getIdAkun()                  // token tidak sah diperlakukan sebagai pengunjung
    END IF
END IF

RETURN {
    barang: barang,
    daftarFoto: FotoBarang.getGaleri(idBarang),
    kategori: Kategori.getKategori(barang.idKategori),
    lokasi: LokasiCOD.getLokasi(barang.idLokasi),
    identitasPenjual: Penjual.getIdentitas(barang.idPenjual),
    idAkunPemohon: idAkunPemohon
}
```

### 5.14.4 Algoritma/Query: updateBarang

**Nama Kelas:** BarangController  
**Nama Operasi:** `updateBarang(token: String, idBarang: String, data: Map<String, Any>, fotoBaru: List<File>, fotoDihapus: List<String>): Boolean`  
**ID Algoritma:** Algo-010

```text
idAkun ← getIdPenjualDariSesi(token)
barang ← Barang.cariById(idBarang)
IF idAkun = null OR barang = null THEN
    RETURN false
END IF
IF NOT verifikasiKepemilikan(idAkun, barang.idPenjual) THEN
    RETURN false                                          // bukan pemilik, data tidak diubah (KF22)
END IF

galeri ← FotoBarang.getGaleri(idBarang)
IF terdapat path pada fotoDihapus yang bukan milik galeri THEN
    RETURN false                                          // foto yang dibuang harus milik listing ini
END IF
fotoDipertahankan ← foto pada galeri yang pathBerkas-nya tidak ada pada fotoDihapus
galeriAkhir ← fotoDipertahankan + fotoBaru

IF NOT validasiKelengkapanIsian(data, galeriAkhir) THEN
    RETURN false                                          // KF18
END IF
IF NOT Kategori.validasiKategori(data["idKategori"]) OR NOT LokasiCOD.validasiLokasi(data["idLokasi"]) THEN
    RETURN false
END IF
IF NOT validasiFoto(fotoBaru, fotoDipertahankan) THEN
    RETURN false                                          // Algo-007
END IF

pathBaru ← simpanFoto(idBarang, fotoBaru)

BEGIN TRANSACTION
    data["idBarang"] ← idBarang
    Barang.simpan(data, waktu sekarang)                   // memperbarui listing dan waktuUbah
    FotoBarang.perbaruiGaleri(idBarang, fotoDipertahankan, pathBaru)
COMMIT TRANSACTION

PenyimpananBerkas.hapus(fotoDihapus)                      // berkas dihapus setelah data tersimpan
RETURN true
```

### 5.14.5 Algoritma/Query: deleteBarang

**Nama Kelas:** BarangController  
**Nama Operasi:** `deleteBarang(token: String, idBarang: String): Boolean`  
**ID Algoritma:** Algo-011

```text
idAkun ← getIdPenjualDariSesi(token)
barang ← Barang.cariById(idBarang)
IF idAkun = null OR barang = null THEN
    RETURN false
END IF
IF NOT verifikasiKepemilikan(idAkun, barang.idPenjual) THEN
    RETURN false                                          // ditolak sebelum menyentuh data (KF22)
END IF

daftarFoto ← FotoBarang.getGaleri(idBarang)

BEGIN TRANSACTION
    FotoBarang.hapus(idBarang)
    Barang.hapus(idBarang)
COMMIT TRANSACTION

PenyimpananBerkas.hapus(pathBerkas setiap foto pada daftarFoto)
RETURN true
```

### 5.14.6 Algoritma/Query: ubahStatusBarang

**Nama Kelas:** BarangController  
**Nama Operasi:** `ubahStatusBarang(token: String, idBarang: String, statusAsal: String, statusTujuan: String): Boolean`  
**ID Algoritma:** Algo-012

```text
IF NOT ((statusAsal = "Tersedia" AND statusTujuan = "Terjual")
       OR (statusAsal = "Terjual" AND statusTujuan = "Tersedia")) THEN
    RETURN false                                          // hanya dua perubahan status yang diizinkan
END IF

idAkun ← getIdPenjualDariSesi(token)
barang ← Barang.cariById(idBarang)
IF idAkun = null OR barang = null THEN
    RETURN false
END IF
IF NOT verifikasiKepemilikan(idAkun, barang.idPenjual) THEN
    RETURN false                                          // KF22
END IF
IF barang.getStatus() ≠ statusAsal THEN
    RETURN false                                          // status sudah berubah, misalnya dari perangkat lain
END IF

// perubahan atomik bersyarat pada idBarang, idPenjual, dan statusAsal (KF40, KF41)
RETURN Barang.setStatus(idBarang, idAkun, statusAsal, statusTujuan, waktu sekarang)
```

## 5.15 Kelas KatalogController

**Nama Kelas:** KatalogController  
**ID Kelas:** C15

Tabel 5.15.1. Operasi Kelas KatalogController

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| `getProduk(kataKunci: String, filterAktif: Map<String, Any>, kriteriaUrutan: String, halaman: Integer): Map<String, Any>` | public | Menyusun kriteria pencarian, filter, urutan, dan halaman, lalu meminta Barang menjalankan kueri katalog (KF25–KF30, Algo-013). |
| `paginasi(halaman: Integer, batas: Integer): Integer` | public | Mengembalikan nomor halaman yang sah, yaitu minimal 1, untuk batas 20 listing per halaman (KF28). |
| `urutkanHasil(kriteriaUrutan: String): String` | public | Menerjemahkan kriteria urutan menjadi urutan kueri, yaitu terbaru (baku), harga terendah, atau harga tertinggi (KF27). |

Tabel 5.15.2. Atribut Kelas KatalogController

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| - | - | - |

KatalogController tidak memiliki atribut dengan alasan yang sama dengan AkunController. Batas 20 listing per halaman ditulis sebagai konstanta di dalam operasi `getProduk()`.

### 5.15.1 Algoritma/Query: getProduk

**Nama Kelas:** KatalogController  
**Nama Operasi:** `getProduk(kataKunci: String, filterAktif: Map<String, Any>, kriteriaUrutan: String, halaman: Integer): Map<String, Any>`  
**ID Algoritma:** Algo-013

```text
BATAS_HALAMAN ← 20                                        // KF28
kriteria ← {}

kataKunciNormal ← PencarianController.normalisasiKataKunci(kataKunci)
IF kataKunciNormal ≠ "" THEN
    kriteria["kataKunci"] ← PencarianController.cocokkanKataKunci(kataKunciNormal)  // judul atau deskripsi (KF25)
END IF

IF NOT FilterController.validasiParameterFilter(filterAktif) THEN
    RETURN {daftarBarang: [], total: 0, halaman: 1, kodePesan: "FILTER_TIDAK_SAH"}
END IF
IF filterAktif["idKategori"] terisi THEN
    kriteria["kategori"] ← FilterController.filterCategory(filterAktif["idKategori"])
END IF
IF filterAktif["hargaMin"] terisi OR filterAktif["hargaMax"] terisi THEN
    kriteria["harga"] ← FilterController.filterPrice(filterAktif["hargaMin"], filterAktif["hargaMax"])
END IF
IF filterAktif["idLokasi"] terisi THEN
    kriteria["lokasi"] ← FilterController.filterLocation(filterAktif["idLokasi"])
END IF
// seluruh kriteria yang terisi digabung dengan AND (KF26)

urutan ← urutkanHasil(kriteriaUrutan)                     // "terbaru" bila kosong (KF27)
halamanSah ← paginasi(halaman, BATAS_HALAMAN)

// Barang selalu menambahkan syarat status "Tersedia" dan pemilik tidak diblokir (KF30)
hasil ← Barang.getKatalog(kriteria, urutan, halamanSah, BATAS_HALAMAN)
RETURN hasil                                              // {daftarBarang, total, halaman}
```

<br>

---

# BAB 6: Perancangan Antarmuka

## 6.1 Rancangan Antarmuka [ID Layar 1]

Masukkan versi awal prototipe antarmuka, dimana untuk setiap antarmuka/layar, tuliskan spesifikasi rinci objek yang ditampilkan dan reaksi sistem terhadap interaksi pengguna.

**Antarmuka:** *[ID layar]*  
**Nama Layar:** *[Nama layar]*

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-design.png" width="50%">
</p>
<p align="center">
<i>Gambar 6.1. Rancangan Antarmuka [ID Layar] - [Nama Layar]</i>
</p>

Tabel 6.1. Spesifikasi Objek Antarmuka [ID Layar]

| Id_Objek | Jenis | Konten | Keterangan |
| :--- | :--- | :--- | :--- |
| *[ID objek]* | *[Jenis objek, misalnya Button, RTF Box, dll]* | *[String yang tampil pada layar]* | *[Reaksi sistem, layar tujuan, tautan, atau ID algoritma yang dijalankan]* |
| *[ID objek]* | *[Jenis objek]* | *[Konten yang ditampilkan]* | *[Reaksi sistem atau nama file terkait beserta deskripsi ringkasnya]* |
| *...* | *...* | *...* | *...* |


## 6.X Rancangan Antarmuka [ID Layar X]

*[Ulangi pola 6.1 untuk layar berikutnya sampai semua layar teridentifikasi]*

## 6.Y Rancangan Antarmuka Keseluruhan

Tuliskan daftar gambar seluruh antarmuka. Berikan ID unik untuk setiap tampilan dan gunakan ID yang sama pada subbab perancangan antarmuka masing-masing.

Tabel 6.Y. Rancangan Antarmuka Keseluruhan

| No | Tampilan Antarmuka |
| :--- | :--- |
| *[I-01]* | <img src="./assets/diagram/contoh-design.png" alt="Contoh Desain" width="400"> |
| *[I-02]* | *[Sisipkan gambar antarmuka I-02]* |
| *[I-XX]* | *[Sisipkan gambar antarmuka berikutnya]* |

<br>

---

# BAB 7: Matriks Kerunutan

Petakan kelas perancangan dengan use case yang terkait. Gunakan **BAB 6 Traceability pada dokumen SKPL** sebagai acuan keterkaitan kelas analisis dan use case, lalu sesuaikan dengan realisasi use case dan kelas perancangan pada BAB 3–BAB 5 DPPL.

Tabel 7.1. Matriks Kerunutan Kelas terhadap Use Case

| Kelas | Use Case Terkait |
| :--- | :--- |
| *[ID kelas - Nama kelas]* | *[ID UC - Nama use case; tuliskan seluruh use case terkait]* |
| *[ID kelas - Nama kelas]* | *[ID UC - Nama use case]* |
| *...* | *...* |
