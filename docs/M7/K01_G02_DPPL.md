<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 5
<br>
DESKRIPSI PERANCANGAN PERANGKAT LUNAK (DPPL)
</h1>
<br>

## *ITBELI*
### *[Logo Perangkat Lunak]*

### Untuk:  *Mikhael Andrian Yonatan*

Dipersiapkan oleh:

| Informasi | Keterangan |
| --- | --- |
| Kelas | *K01* |
| Kelompok | *G02*  |
| Nama Kelompok | *Indeks A*  |

| NIM | Nama |
|---|---|
| *13525124* | *Sulthan Dhiyazka Suwandi* |
| *13525034* | *Dhanesworo Muhammad Datiputro* |
| *13525115* | *Nazhif Hilmi Kistijantoro* |
| *13525121* | *I Made Adi Kusuma Ardana* |
| *13525106* | *Ghaniyul Amri Caulava* |

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
>
>
<br>

---


# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Dokumen Deskripsi Perancangan Perangkat Lunak (DPPL) ini disusun untuk menjabarkan rancangan perangkat lunak ITBELI yang memenuhi kebutuhan pada dokumen SKPL, meliputi lingkungan implementasi, arsitektur, realisasi setiap use case, diagram kelas perancangan, dan matriks kerunutan, sehingga setiap kelas pada kode program dapat ditelusuri kembali ke use case asalnya. Dokumen ini digunakan oleh pengembang sebagai acuan implementasi kelas dan interaksi antarobjek, oleh perancang sistem dan desainer antarmuka untuk menjaga konsistensi tanggung jawab setiap komponen, oleh tim penguji sebagai dasar penyusunan skenario pengujian, serta oleh manajer proyek dan pemangku kepentingan untuk memastikan seluruh use case telah dirancang sebelum tahap implementasi dimulai.

## 1.2 Lingkup Masalah
**ITBELI** adalah sebuah platform aplikasi marketplace barang preloved (bekas layak pakai) yang dirancang secara eksklusif untuk memfasilitasi transaksi jual-beli antar sivitas akademika Institut Teknologi Bandung (ITB). Sistem ini hadir sebagai solusi terpusat untuk mengatasi ketidakefisienan dan risiko penipuan pada transaksi jual-beli barang bekas mahasiswa yang selama ini tersebar tidak terstruktur di berbagai media sosial. Dengan mewajibkan verifikasi identitas menggunakan surel institusi (@itb.ac.id), perangkat lunak ini menyediakan ekosistem niaga yang aman dan tepercaya, dilengkapi dengan fitur manajemen katalog (listing), pencarian dan penyaringan barang spesifik kebutuhan kampus, ruang percakapan internal yang menjaga privasi negosiasi kesepakatan Cash on Delivery (COD), serta dasbor moderasi administratif untuk menindak tegas pelanggaran guna menjaga kenyamanan seluruh pengguna.

## 1.3 Definisi, Istilah, dan Singkatan
Semua definisi dan singkatan yang digunakan dalam dokumen ini beserta penjelasannya.

Tabel 1.3. Definisi Istilah dan Singkatan

| Singkatan, Akronim, atau Istilah | Penjelasan |
| :--- | :--- |
| *P/L* | *Singkatan dari Perangkat Lunak, yaitu aplikasi yang memberikan perintah kepada komputer untuk menjalankan tugas tertentu.* |
| *DPPL* | *Singkatan dari Deskripsi Perancangan Perangkat Lunak, yaitu dokumen ini, yang menjabarkan rancangan arsitektur, realisasi use case, dan kelas perancangan perangkat lunak sebagai acuan implementasi.* |
| *SKPL* | *Singkatan dari Spesifikasi Kebutuhan Perangkat Lunak, yaitu dokumen Tugas 5 yang memuat kebutuhan fungsional, kebutuhan non-fungsional, pemodelan use case, kelas analisis, dan traceability ITBELI. Dokumen ini menjadi masukan utama DPPL.* |
| *APL* | *Singkatan dari Arsitektur Perangkat Lunak, yaitu dokumen Tugas 6 yang menetapkan pattern arsitektur acuan, komponen penyusun aplikasi, dan model arsitektur ITBELI. Isinya menjadi dasar BAB 2 dokumen ini.* |
| *KF* | *Singkatan dari Kebutuhan Fungsional, yaitu kapabilitas, perilaku, atau aksi spesifik yang harus mampu dilakukan oleh sistem (bagaimana sistem merespons input).* |
| *KNF* | *Singkatan dari Kebutuhan Non-Fungsional, yaitu batasan, kualitas, dan kriteria kinerja sistem (seperti keamanan, keandalan, dan waktu respons) dalam menjalankan fungsi-fungsinya.* |
| *UC* | *Singkatan dari Use Case, yaitu deskripsi interaksi atau skenario langkah demi langkah antara aktor (pengguna) dengan sistem untuk mencapai tujuan tertentu.* |
| *ITBELI* | *Nama dari perangkat lunak (sistem) yang dirancang dan didokumentasikan di dalam dokumen DPPL ini.* |
| *Preloved* | *Istilah untuk barang bekas pakai milik pribadi yang kondisinya masih sangat layak fungsi untuk dijual dan digunakan kembali oleh orang lain.* |
| *Listing* | *Daftar barang dagangan yang dipublikasikan oleh penjual di dalam katalog sistem, mencakup sekumpulan data seperti foto, deskripsi, kondisi, dan harga barang.* |
| *COD* | *Singkatan dari Cash on Delivery, yaitu metode transaksi serah terima barang dan pembayaran secara langsung atau tatap muka di titik temu fisik wilayah kampus yang telah disepakati oleh pembeli dan penjual.* |
| *OTP* | *Singkatan dari One-Time Password, yaitu kode otentikasi berupa karakter numerik/alfanumerik unik yang di-generate oleh sistem dan hanya berlaku satu kali dalam batasan waktu tertentu (contoh: 15 menit) untuk memverifikasi surel pendaftar.* |
| *JWT* | *Singkatan dari JSON Web Token, yaitu standar terbuka untuk mengenkripsi dan membuat token sesi akses (bearer token) yang digunakan untuk memverifikasi hak akses otorisasi pengguna saat mereka masuk (login) ke dalam sistem.* |
| *Bcrypt / Hash* | *Fungsi algoritma kriptografi satu arah yang digunakan untuk mengacak dan menyamarkan kata sandi (password) pengguna sebelum disimpan di basis data, sehingga kerahasiaannya terjaga dan tidak dapat dibaca dalam bentuk teks murni (plain-text).* |
| *Log Audit* | *Catatan rekam jejak digital di dalam basis data sistem yang bersifat permanen, anti-ubah (immutable), dan kronologis untuk melacak kapan dan siapa admin yang melakukan tindakan moderasi tertentu.* |
| *MVC* | *Singkatan dari Model-View-Controller, yaitu pattern arsitektur yang memisahkan penyajian dan interaksi pengguna (View), penanganan permintaan dan aturan bisnis (Controller), serta data sistem beserta aturan integritasnya (Model). MVC menjadi pattern arsitektur acuan ITBELI.* |
| *View* | *Bagian MVC yang menampilkan halaman kepada pengguna dan meneruskan aksi pengguna ke Controller. Pada ITBELI, View berjalan pada peramban dan mewadahi kelas boundary.* |
| *Controller* | *Bagian MVC yang menerima permintaan dari View, memeriksa hak akses, memvalidasi masukan, menjalankan aturan bisnis, lalu memilih tampilan berikutnya. Pada ITBELI, Controller berjalan pada server dan mewadahi kelas control.* |
| *Model* | *Bagian MVC yang merepresentasikan data sistem beserta aturan integritasnya dan merupakan satu-satunya bagian yang mengakses basis data. Pada ITBELI, Model mewadahi kelas entity.* |
| *Komponen* | *Satuan penyusun aplikasi yang memiliki satu tanggung jawab utama, misalnya satu View, satu Controller, atau satu Model. Satu komponen dapat mewadahi lebih dari satu kelas.* |
| *Logical View* | *Salah satu sudut pandang (view) model arsitektur 4+1 yang menggambarkan komponen fungsional sistem beserta hubungan antarkomponennya.* |
| *Kelas Analisis* | *Kelas hasil pemodelan pada tahap analisis (dokumen SKPL) yang dikelompokkan menjadi kelas boundary, control, dan entity.* |
| *Kelas Perancangan* | *Kelas hasil tahap perancangan pada dokumen ini yang telah dilengkapi atribut bertipe data, metode berparameter dan bertipe kembalian, serta visibilitasnya, sehingga dapat langsung diimplementasikan pada kode program.* |
| *Sequence Diagram* | *Diagram UML yang menggambarkan urutan pesan (pemanggilan metode) antarobjek menurut waktu untuk menjalankan satu skenario use case.* |
| *Matriks Kerunutan* | *Tabel yang memetakan kelas perancangan terhadap use case yang direalisasikannya, sehingga setiap kelas dapat ditelusuri ke use case asalnya dan sebaliknya.* |
| *Supabase* | *Layanan cloud yang menyediakan basis data PostgreSQL terkelola (Database) dan penyimpanan berkas (Supabase Storage) yang digunakan oleh ITBELI.* |
| *Adapter* | *Komponen penghubung antara P/L dengan layanan eksternal, yaitu SurelAdapter untuk layanan SMTP dan PushNotifikasiAdapter untuk layanan Web Push, sehingga pergantian penyedia layanan tidak mengubah komponen lain.* |
| *Service Worker* | *Skrip yang dipasang oleh aplikasi web pada peramban dan berjalan terpisah dari halaman, sehingga dapat menerima dan menampilkan notifikasi push walaupun ITBELI sedang tidak dibuka.* |
| *HTTPS/TLS* | *Protokol komunikasi terenkripsi antara peramban dan server (HTTPS) serta antara server dan layanan eksternal (TLS), yang juga menyediakan secure context bagi Service Worker.* |

## 1.4 Aturan Penomoran
Aturan penomoran (ID) pada dokumen ini mengikuti pola yang telah digunakan pada dokumen SKPL (Tugas 5) dan APL (Tugas 6), sehingga setiap ID yang dirujuk pada dokumen ini memiliki arti yang sama dengan ID pada kedua dokumen tersebut. Setiap ID terdiri atas awalan huruf yang menunjukkan jenis artefak dan diikuti dua digit angka urut yang dimulai dari 01 (XX = 01, 02, 03, dst.).

Tabel 1.4. Aturan Penomoran

| Hal/Bagian | Penomoran | Keterangan |
| :--- | :--- | :--- |
| *Kebutuhan Fungsional* | *KFXX* | *KF = Kebutuhan Fungsional. Mengacu pada Tabel 3.1 dokumen SKPL (KF01–KF56) dan dirujuk pada BAB 2 dan BAB 3 dokumen ini.* |
| *Kebutuhan Non-Fungsional* | *KNFXX* | *KNF = Kebutuhan Non-Fungsional. Mengacu pada Tabel 3.2 dokumen SKPL (KNF01–KNF04) dan dirujuk pada BAB 2 dokumen ini.* |
| *Aktor* | *AXX* | *A = Aktor. Mengacu pada subbab 4.1 dokumen SKPL (A01–A03) dan muncul sebagai aktor pada sequence diagram di BAB 3.* |
| *Use Case* | *UCXX* | *UC = Use Case. Mengacu pada subbab 4.2 dokumen SKPL (UC01–UC24). Digunakan pada BAB 3 (satu subbab per use case, yaitu UC01 pada subbab 3.1 hingga UC24 pada subbab 3.24) dan BAB 5.* |
| *Kelas* | *CXX* | *C = Class. Digunakan pada BAB 3 hingga BAB 5. Kelas perancangan yang mewadahi kelas analisis SKPL memakai ID kelas analisis tersebut (C01–C12 untuk kelas pada komponen View, C13–C22 untuk kelas pada komponen Controller, dan C23–C40 untuk kelas pada komponen Model). Kelas yang baru muncul pada tahap perancangan, misalnya kelas pada komponen Pendukung dan Integrasi Eksternal, diberi ID lanjutan mulai dari C41.* |

## 1.5 Referensi
Berikut adalah referensi yang dirujuk dalam penyusunan dokumen ini.

1. Tim Pengajar IF2150, *Materi Perkuliahan (Slide) IF2150 Rekayasa Perangkat Lunak*, Sekolah Teknik Elektro dan Informatika, Institut Teknologi Bandung, Tahun Ajaran 2026/2027.
2. Kelompok G02 K01, *Spesifikasi Kebutuhan Perangkat Lunak (SKPL) ITBELI*, Tugas 5 IF2150 Rekayasa Perangkat Lunak, Institut Teknologi Bandung, 2026.
3. Kelompok G02 K01, *Arsitektur Perangkat Lunak (APL) ITBELI*, Tugas 6 IF2150 Rekayasa Perangkat Lunak, Institut Teknologi Bandung, 2026.
4. I. Sommerville, *Software Engineering 10th Edition: Chapter 6 Architectural Design (Slides)*. https://software-engineering-book.com/slides/
5. M. Fowler, *Model View Controller*, Catalog of Patterns of Enterprise Application Architecture. https://martinfowler.com/eaaCatalog/modelViewController.html
6. Wikipedia, *Entity-control-boundary*. https://en.wikipedia.org/wiki/Entity-control-boundary
7. Wikipedia, *4+1 architectural view model*. https://en.wikipedia.org/wiki/4%2B1_architectural_view_model
8. Visual Paradigm, *Mastering UML: A Complete Guide to Use Case and Class Diagrams for Software Design*. https://www.visual-paradigm.com/guide/mastering-uml-a-complete-guide-to-use-case-and-class-diagrams-for-software-design/
9. Visual Paradigm, *What is Sequence Diagram?*. https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-sequence-diagram/

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
Dokumen ini terdiri atas lima bab. BAB 1 menjelaskan tujuan penulisan, lingkup masalah, definisi istilah, aturan penomoran, referensi, dan ikhtisar dokumen. BAB 2 membahas perancangan arsitektur ITBELI, yang meliputi rancangan lingkungan implementasi, pattern arsitektur MVC sebagai acuan, identifikasi komponen penyusun aplikasi, dan model arsitektur dalam bentuk *logical view*. BAB 3 membahas realisasi setiap use case (UC01–UC24) melalui identifikasi kelas perancangan, *sequence diagram* untuk skenario normal dan seluruh skenario alternatif, serta diagram kelas per use case. BAB 4 menyajikan diagram kelas perancangan keseluruhan beserta daftar atribut dan metode setiap kelas. BAB 5 menyajikan matriks kerunutan yang memetakan setiap kelas perancangan terhadap use case terkait.

<br>

---

# BAB 2: Perancangan Arsitektur

## 2.1 Rancangan Lingkungan Implementasi

Lingkungan implementasi ITBELI mengikuti lingkungan operasi pada subbab 2.5 dokumen SKPL dan subbab 1.4 dokumen APL, dengan rincian pada Tabel 2.1.

Tabel 2.1. Rancangan Lingkungan Implementasi

| Aspek | Rancangan | Keterangan |
| :--- | :--- | :--- |
| *Operating System* (Pengembangan dan Server) | Windows 10/11, macOS, atau distribusi Linux 64-bit (misalnya Ubuntu 22.04 LTS atau lebih baru). | Node.js tersedia lintas platform, sehingga server dapat dikembangkan dan dijalankan pada sistem operasi milik setiap anggota tim. |
| *Operating System* (Klien) | Windows 10/11, macOS, Linux, ChromeOS, dan Android 10 atau lebih baru. | Klien menjalankan peramban berbasis Chromium versi stabil terbaru, sedangkan iOS dan iPadOS tidak didukung karena seluruh perambannya memakai mesin WebKit. |
| DBMS | PostgreSQL terkelola pada Supabase. | Menyimpan data seluruh komponen *Model* dan hanya diakses dari server melalui koneksi TLS. |
| Bahasa Pemrograman | JavaScript pada *runtime* Node.js 22.x LTS; HTML5, CSS3, dan JavaScript pada peramban; SQL. | JavaScript pada Node.js dipakai untuk *Controller*, *Model*, *Pendukung*, dan *Integrasi Eksternal*, HTML5, CSS3, dan JavaScript untuk *View*, serta SQL untuk skema basis data. |
| *Development Tools* | Visual Studio Code, Git dan GitHub, npm, mkcert, Supabase Dashboard, Chrome DevTools, serta draw.io dan StarUML. | Dipakai untuk penulisan kode, *version control*, pengelolaan pustaka, pembuatan sertifikat HTTPS lokal, pengelolaan basis data, pengujian pada peramban, dan penyusunan diagram. |
| *Filing System* | Sistem berkas OS server untuk kode program dan Supabase Storage untuk berkas unggahan pengguna. | Foto listing dan bukti laporan disimpan pada Supabase Storage, sedangkan *Model* Barang dan Laporan hanya menyimpan lokasi berkasnya. |

## 2.2 Style/Pattern Arsitektur Acuan

ITBELI memakai *pattern* **MVC (*Model-View-Controller*)** sebagai acuan arsitektur, yang diterapkan di atas *style* **klien-server** sesuai subbab 2.5 dokumen SKPL. *Style* klien-server menentukan tempat setiap bagian dijalankan, yaitu peramban pengguna sebagai klien dan server web ITBELI sebagai server. *Pattern* MVC menentukan pembagian tanggung jawab antarkomponen serta komponen mana yang boleh berhubungan dengan komponen lain. Penetapan ini mengikuti BAB 1 dokumen APL.

### 2.2.1 Peran Setiap Bagian MVC

MVC memisahkan penyajian dan interaksi pengguna dari data sistem ke dalam tiga bagian yang saling terhubung [4]. Pada aplikasi web, permintaan dari peramban diterima oleh *Controller*, yang kemudian memakai *Model* dan memilih *View* untuk menyusun tanggapan [5].

1. ***Model*** merepresentasikan data ITBELI, seperti akun, listing, percakapan, laporan, dan *log*, beserta aturan integritasnya, misalnya status listing yang hanya bernilai "Tersedia" atau "Terjual" dan *log* audit yang hanya dapat ditambah. *Model* adalah satu-satunya bagian yang membaca dan menulis Database. ITBELI memiliki 9 komponen *Model* yang mewadahi kelas *entity* C23–C40.
2. ***View*** menyajikan halaman kepada pengguna, menangkap aksi pengguna, lalu meneruskannya ke *Controller*. *View* boleh melakukan validasi awal di sisi klien, misalnya menandai isian yang belum lengkap (KF18), tetapi validasi ini hanya untuk kenyamanan pengguna. ITBELI memiliki 12 komponen *View* yang mewadahi kelas *boundary* C01–C12.
3. ***Controller*** menerima permintaan dari *View*, memeriksa sesi dan hak akses melalui Otorisasi, memvalidasi masukan, menjalankan aturan bisnis, meminta *Model* membaca atau mengubah data, lalu memilih tampilan berikutnya beserta datanya. ITBELI memiliki 10 komponen *Controller* yang mewadahi kelas *control* C13–C22.

Selain ketiga bagian tersebut, terdapat komponen *Pendukung* (Otorisasi dan Kriptografi), *Integrasi Eksternal* (SurelAdapter dan PushNotifikasiAdapter), serta *Penyimpanan Data* (Database dan PenyimpananBerkas). Komponen-komponen ini bukan bagian keempat MVC, melainkan alat bantu yang dipanggil oleh *Controller*, kecuali Database yang hanya diakses oleh *Model*.

Agar pemisahan tersebut terjaga saat implementasi, ITBELI menetapkan aturan ketergantungan berikut.

1. *View* tidak pernah mengakses *Model*, Database, maupun PenyimpananBerkas secara langsung. Seluruh permintaan data dari *View* melewati *Controller*.
2. *Controller* tidak menyusun tampilan, melainkan hanya memilih *View* yang ditampilkan dan menyerahkan data yang dibutuhkan.
3. *Model* tidak bergantung pada *View* maupun *Controller*, sehingga dapat diuji dan dipakai ulang tanpa antarmuka.
4. Aturan bisnis dan hak akses ditegakkan di *Controller*. Validasi yang dilakukan di *View* selalu diulang di *Controller*.
5. Komponen *Pendukung*, *Integrasi Eksternal*, dan PenyimpananBerkas hanya dipanggil oleh *Controller*, sedangkan Database hanya diakses oleh *Model*.

### 2.2.2 Alasan Pemilihan

1. **Meneruskan struktur *boundary–control–entity* pada SKPL.** Diagram kelas keseluruhan pada subbab 5.3 dokumen SKPL tersusun atas kelas *boundary* (C01–C12), *control* (C13–C22), dan *entity* (C23–C40), dengan 15 asosiasi *boundary–control* dan 33 dependensi *control–entity/control*, tanpa relasi langsung antara *boundary* dan *entity*. Aturan hubungan ini sama dengan MVC [6], sehingga setiap kelas analisis dapat dipetakan langsung ke *View*, *Controller*, atau *Model* tanpa mengubah rancangan, dan keterlacakan dari KF hingga kode program tetap terjaga.
2. **Satu data ditampilkan dengan banyak cara kepada tiga jenis pengguna.** Data listing pada *Model* Barang ditampilkan pada KatalogView dan DetailBarangView bagi pembeli, pada ProfilView dan ListingPenjualView bagi penjual, serta menjadi objek laporan pada DasborAdminView bagi admin. Kondisi ketika data yang sama dilihat dan diolah dengan banyak cara merupakan situasi utama penggunaan MVC [4].
3. **Aturan bisnis dan hak akses ditegakkan di satu tempat yang tidak dapat dilewati pengguna.** Banyak KF ITBELI berbentuk penolakan, misalnya surel di luar domain @itb.ac.id (KF05), *login* akun yang diblokir (KF53), perubahan listing oleh bukan pemilik (KF22), berkas foto yang melanggar ketentuan (KF24), akses percakapan oleh pihak luar (KF35), dan akses moderasi oleh bukan admin (KF56). Kode di peramban dapat diubah penggunanya, sehingga MVC menempatkan aturan tersebut di *Controller* yang berjalan di server.
4. **Privasi percakapan dan keamanan data dijamin oleh struktur.** *Controller* melakukan *hash* kata sandi dan enkripsi pesan melalui Kriptografi sebelum data diserahkan ke *Model* (KF09, KF36), sehingga Database hanya menyimpan nilai *hash* dan teks terenkripsi (KNF03). ModerasiController sebagai satu-satunya *Controller* yang melayani DasborAdminView tidak bergantung pada *Model* Percakapan, sehingga tidak ada jalur dari tampilan admin menuju isi pesan (KF35, KF38).
5. **Alur proses bisnis berbentuk permintaan dan tanggapan.** Seluruh skenario use case pada SKPL mengikuti pola aktor beraksi, lalu sistem memvalidasi, menyimpan atau mengambil data, dan menampilkan hasilnya. Pola ini sama dengan siklus *View* → *Controller* → *Model* → *Controller* → *View*. Efek samping seperti pengiriman kode verifikasi (KF06), notifikasi pesan baru (KF34), dan pencatatan *log* (KF48, KF55) cukup dipicu oleh *Controller* yang menangani aksi tersebut.
6. **Mendukung kebutuhan non-fungsional.** Tampilan dapat diperbaiki berulang kali berdasarkan uji coba pengguna tanpa menyentuh logika bisnis (KNF01). Pencatatan aktivitas berpusat pada *Model* LogAktivitas sehingga penelusuran masalah lebih mudah (KNF02). Sesi *login* disimpan sebagai data pada *Model* Otentikasi, bukan di memori server, sehingga *Controller* tidak menyimpan keadaan antarpermintaan dan kapasitas server dapat ditambah ketika jumlah pengguna bertambah (KNF04).
7. **Sesuai dengan keterbatasan tim dan rencana pengembangan lanjutan.** MVC memungkinkan anggota tim mengerjakan *View* dan *Controller*/*Model* suatu fitur secara paralel selama format data yang dipertukarkan sudah disepakati. Aplikasi *mobile* pada *roadmap* Tugas 1 juga cukup ditambahkan sebagai *View* baru yang memanggil *Controller* yang sama.

Kelemahan MVC adalah bertambahnya jumlah kode untuk alur yang sederhana [4], misalnya UC06 yang hanya melibatkan DokumenLegalView, DokumenLegalController, dan *Model* DokumenLegal. Tambahan ini diterima demi keseragaman alur, sedangkan fungsi yang dipakai berulang oleh beberapa *Controller* dipisahkan ke komponen *Pendukung* dan *Integrasi Eksternal* agar *Controller* tidak membengkak. *Pattern* lain juga telah dipertimbangkan. *Client-server* tidak mengatur susunan komponen di dalam server, sehingga hanya dipakai sebagai *style* penempatan. *Layered architecture* membatasi setiap lapisan hanya melayani lapisan tepat di atasnya, padahal *Controller* ITBELI juga memilih tampilan dan satu *Model* ditampilkan oleh banyak *View*. *Repository* tidak menjelaskan alur interaksi pengguna yang menjadi inti ITBELI. *Pipe and filter* cocok untuk pemrosesan data bertahap, bukan untuk sistem interaktif.

### 2.2.3 Penerapan MVC pada ITBELI

<p align="center">
<img alt="Penerapan Pola MVC pada ITBELI" src="./assets/diagram/Arsitektur_MVC_ITBELI.png" width="100%">
</p>
<p align="center">
<i>Gambar 2.1. Penerapan Pola MVC pada ITBELI</i>
</p>

Gambar 2.1 menempatkan seluruh komponen pada Tabel 2.3 ke dalam bagian MVC dengan nama yang sama, sekaligus menunjukkan lingkungan tempat setiap bagian dijalankan. Kotak *View* berisi 12 komponen yang berjalan pada peramban (zona Klien). Kotak *Controller* dan *Model* berada pada zona Server Web ITBELI bersama komponen *Pendukung* dan *Integrasi Eksternal*, sedangkan komponen *Penyimpanan Data* berada pada Supabase. Layanan Web Push dan layanan SMTP digambarkan dengan kotak bergaris putus-putus karena berada di luar P/L ITBELI. Kode kelas di samping nama komponen (misalnya C01) menunjukkan kelas analisis SKPL yang diwadahi komponen tersebut.

## 2.3 Identifikasi Komponen / Modul / Subsistem

Komponen ITBELI diambil dari Tabel 2.1 dokumen APL dan dikelompokkan berdasarkan lapisan MVC yang ditetapkan pada subbab 2.2. Kelas *boundary* (C01–C12) menjadi komponen *View*, kelas *control* (C13–C22) menjadi komponen *Controller*, dan kelas *entity* (C23–C40) dikelompokkan berdasarkan data yang dikelolanya menjadi komponen *Model*, sehingga satu komponen *Model* dapat mewadahi lebih dari satu kelas. Selain itu, terdapat tiga kelompok komponen di luar lapisan MVC, yaitu *Pendukung* (fungsi bantu yang dipakai bersama oleh beberapa *Controller*), *Integrasi Eksternal* (penghubung ke layanan surel SMTP dan layanan Web Push), dan *Penyimpanan Data* (basis data dan penyimpanan berkas pada Supabase). Komponen *Pendukung* dan *Integrasi Eksternal* tidak memiliki padanan kelas analisis pada SKPL, sehingga kelasnya diberi ID lanjutan C41–C44 sesuai aturan penomoran pada subbab 1.4.

Tabel 2.3. Identifikasi Komponen/Modul/Subsistem

| Nama Komponen/Modul/Subsistem | Jenis | Penjelasan |
| :--- | :--- | :--- |
| **Lapisan *View*** | | |
| OtentikasiView | *View* | Menampilkan formulir pendaftaran beserta kebijakan privasi dan kendali persetujuannya, formulir kode verifikasi beserta hitung mundur dan tombol kirim ulang, formulir *login*, serta tombol keluar. Seluruh aksi diteruskan ke AkunController. Mewadahi kelas C01 HalamanOtentikasi. |
| ProfilView | *View* | Menampilkan nama, NIM, surel, dan daftar listing milik akun (melalui KartuProdukView), menu pengaturan akun, serta tautan Kebijakan Privasi. Mewadahi kelas C02 HalamanProfil. |
| ListingPenjualView | *View* | Menampilkan seluruh listing milik penjual yang dikelompokkan per status ("Tersedia" dan "Terjual") beserta tombol hapus, tandai terjual, dan batalkan penandaan terjual, lalu meneruskan aksi tersebut ke BarangController. Mewadahi kelas C03 HalamanListingPenjual. |
| FormulirBarangView | *View* | Menampilkan formulir pembuatan dan pengubahan listing (judul, harga, deskripsi kondisi, kategori, lokasi titik temu COD, dan foto), melakukan validasi awal di sisi klien, dan menandai isian yang belum lengkap sebelum diteruskan ke BarangController. Mewadahi kelas C04 FormulirBarang. |
| KatalogView | *View* | Menampilkan katalog listing berhalaman (maksimum 20 listing per halaman), kolom pencarian, pilihan filter dan pengurutan, serta pesan barang tidak ditemukan. Aksi diteruskan ke KatalogController, PencarianController, dan FilterController. Mewadahi kelas C05 HalamanKatalog. |
| KartuProdukView | *View* | Menampilkan ringkasan satu listing (foto utama, judul, harga, dan status). Dipakai bersama oleh KatalogView, ProfilView, dan ListingPenjualView. Mewadahi kelas C06 KartuProduk. |
| DetailBarangView | *View* | Menampilkan seluruh foto, judul, harga, deskripsi kondisi, kategori, lokasi titik temu COD, dan identitas penjual sebuah listing, beserta tombol "Hubungi Penjual" yang diteruskan ke PercakapanController dan aksi pelaporan yang diteruskan ke LaporanController. Mewadahi kelas C07 HalamanDetailBarang. |
| PercakapanView | *View* | Menampilkan daftar percakapan beserta cuplikan pesan terakhir dan penanda pesan belum dibaca, ruang percakapan berisi pesan yang berurutan beserta waktu pengiriman, kolom pengiriman pesan, serta tautan Kebijakan Privasi. Aksi diteruskan ke PercakapanController. Mewadahi kelas C08 HalamanPercakapan. |
| NotifikasiView | *View* | Menampilkan daftar pemberitahuan serta penanda jumlah pesan atau notifikasi yang belum dibaca, lalu meneruskan penandaan sudah dibaca ke NotifikasiController. Mewadahi kelas C09 PanelNotifikasi. |
| FormulirLaporanView | *View* | Menampilkan formulir pelaporan berisi pilihan kategori laporan (penipuan, konten tidak pantas, atau *bug*), isian alasan, dan unggahan bukti tangkapan layar, lalu meneruskannya ke LaporanController. Mewadahi kelas C10 FormulirLaporan. |
| DasborAdminView | *View* | Menampilkan daftar laporan beserta penyaring status, detail laporan, serta tombol ubah status, hapus listing, blokir akun, dan buka blokir akun lengkap dengan isian alasan dan konfirmasi. Aksi diteruskan ke ModerasiController. Mewadahi kelas C11 DasborAdmin. |
| DokumenLegalView | *View* | Menampilkan isi Kebijakan Privasi dan Ketentuan Penggunaan, termasuk menyoroti pernyataan bahwa isi percakapan pribadi tidak dapat diakses oleh admin maupun pengembang. Mewadahi kelas C12 HalamanDokumenLegal. |
| **Lapisan *Controller*** | | |
| AkunController | *Controller* | Memproses pendaftaran akun (validasi domain @itb.ac.id, keunikan surel, dan persetujuan kebijakan), pembuatan, pengiriman ulang, dan pencocokan kode verifikasi, *login* (pencocokan kata sandi dan pemeriksaan status akun), *logout*, serta pengambilan data profil. Mewadahi kelas C13 AkunController. |
| BarangController | *Controller* | Memproses pembuatan, pengubahan, dan penghapusan listing, validasi isian dan foto, verifikasi kepemilikan listing, perubahan status "Tersedia"/"Terjual", pengambilan daftar listing milik penjual, serta pengambilan detail listing. Mewadahi kelas C14 BarangController. |
| KatalogController | *Controller* | Mengambil listing berstatus "Tersedia" milik akun yang tidak diblokir, membaginya menjadi halaman berisi maksimum 20 listing, dan mengurutkannya sesuai kriteria terbaru, harga terendah, atau harga tertinggi. Mewadahi kelas C15 KatalogController. |
| PencarianController | *Controller* | Menormalisasi kata kunci dan mencocokkannya dengan judul serta deskripsi listing yang tersedia. Mewadahi kelas C16 PencarianController. |
| FilterController | *Controller* | Memvalidasi parameter filter dan menyaring listing berdasarkan kategori, rentang harga minimum–maksimum, dan lokasi titik temu COD. Mewadahi kelas C17 FilterController. |
| PercakapanController | *Controller* | Membuka ruang percakapan antara pembeli dan penjual sebuah listing, memastikan hanya kedua peserta yang dapat mengaksesnya, mengenkripsi dan mendekripsi pesan melalui Kriptografi, menyimpan pesan, serta menyusun daftar percakapan beserta cuplikan pesan terakhir dan jumlah pesan belum dibaca. Meminta NotifikasiController mengirim notifikasi pesan baru. Mewadahi kelas C18 PercakapanController. |
| NotifikasiController | *Controller* | Membuat dan mengirim pemberitahuan kepada pengguna, yaitu kode verifikasi dan pemberitahuan tindakan moderasi melalui SurelAdapter, notifikasi pesan baru melalui PushNotifikasiAdapter, serta notifikasi di dalam aplikasi. Juga memperbarui status baca notifikasi. Mewadahi kelas C19 NotifikasiController. |
| LaporanController | *Controller* | Memproses pembuatan laporan, meliputi validasi data dan berkas bukti, penyusunan metadata percakapan tanpa isi pesan, penyimpanan laporan berstatus "Baru" beserta buktinya, serta pencatatan penerimaan laporan ke *log* audit. Mewadahi kelas C20 LaporanController. |
| ModerasiController | *Controller* | Memproses fungsi moderasi khusus admin, meliputi penampilan dan penyaringan laporan, perubahan status penanganan, penghapusan listing yang dilaporkan, pemblokiran dan pembukaan blokir akun (termasuk menonaktifkan dan memulihkan listing milik akun tersebut), serta pencatatan tindakan ke *log* admin dan *log* audit. Mewadahi kelas C21 ModerasiController. |
| DokumenLegalController | *Controller* | Mengambil versi terbaru dokumen Kebijakan Privasi dan Ketentuan Penggunaan beserta klausul privasi percakapan. Mewadahi kelas C22 DokumenLegalController. |
| **Lapisan *Model*** | | |
| Akun | *Model* | Merepresentasikan data akun pengguna (identitas, *hash* kata sandi, status verifikasi, status blokir, dan peran) beserta peran Pembeli, Penjual, dan Admin, serta metode untuk mengakses dan mengubahnya. Mewadahi kelas C23 Akun, C24 Pembeli, C25 Penjual, dan C26 Admin. |
| Otentikasi | *Model* | Merepresentasikan kode verifikasi surel yang berlaku 15 menit dan sesi *login* bertoken yang berlaku paling lama 24 jam, serta metode untuk membuat, mencocokkan, dan menonaktifkannya. Mewadahi kelas C27 TokenVerifikasi dan C28 SesiLogin. |
| Barang | *Model* | Merepresentasikan data listing (judul, harga, deskripsi kondisi, kategori, lokasi titik temu COD, status, dan pemilik) beserta metadata fotonya (maksimum 5 foto per listing), serta metode untuk mengakses dan mengubahnya. Mewadahi kelas C29 Barang dan C30 FotoBarang. |
| DataReferensi | *Model* | Merepresentasikan daftar kategori barang tetap dan daftar titik temu COD yang menjadi pilihan pada formulir listing dan filter katalog. Mewadahi kelas C31 Kategori dan C32 LokasiCOD. |
| Percakapan | *Model* | Merepresentasikan ruang percakapan antara pembeli dan penjual untuk satu listing beserta pesan terenkripsi di dalamnya dan status bacanya, serta metode untuk mengakses dan mengubahnya. Mewadahi kelas C33 Percakapan dan C34 Pesan. |
| Notifikasi | *Model* | Merepresentasikan pemberitahuan kepada pengguna beserta status sudah atau belum dibaca. Mewadahi kelas C35 Notifikasi. |
| Laporan | *Model* | Merepresentasikan laporan pengguna (pelapor, objek yang dilaporkan, kategori, alasan, dan status penanganan) beserta metadata berkas buktinya, serta metode untuk mengakses dan mengubahnya. Mewadahi kelas C36 Laporan dan C37 BuktiLaporan. |
| LogAktivitas | *Model* | Merepresentasikan *log* audit atas penerimaan dan tindak lanjut laporan yang hanya dapat ditambah, tidak dapat diubah maupun dihapus, serta *log* admin atas setiap tindakan moderasi beserta pelaku, objek, waktu, dan alasannya. Mewadahi kelas C38 LogAudit dan C39 LogAdmin. |
| DokumenLegal | *Model* | Merepresentasikan dokumen Kebijakan Privasi dan Ketentuan Penggunaan beserta versi, status publikasi, dan tautannya. Mewadahi kelas C40 DokumenLegal. |
| **Di luar lapisan MVC** | | |
| Otorisasi | *Pendukung* | Memeriksa token sesi pada setiap permintaan yang memerlukan *login*, mengidentifikasi akun yang sedang masuk sebagai dasar verifikasi kepemilikan dan keanggotaan percakapan, serta menolak akses ke fungsi moderasi oleh akun yang tidak berperan admin. Dipakai bersama oleh AkunController, BarangController, PercakapanController, LaporanController, dan ModerasiController. Diwujudkan sebagai kelas C41 Otorisasi. |
| Kriptografi | *Pendukung* | Menyediakan fungsi *hash* dan pencocokan kata sandi dengan bcrypt untuk AkunController, serta enkripsi dan dekripsi isi pesan untuk PercakapanController, sehingga kata sandi dan isi pesan tidak pernah tersimpan dalam bentuk teks biasa. Diwujudkan sebagai kelas C42 Kriptografi. |
| SurelAdapter | *Integrasi Eksternal* | Mengirim surel melalui layanan SMTP dengan TLS, yaitu kode verifikasi ke alamat surel @itb.ac.id pendaftar serta pemberitahuan tindakan moderasi beserta alasannya kepada pengguna yang bersangkutan. Dipanggil oleh NotifikasiController. Diwujudkan sebagai kelas C43 SurelAdapter. |
| PushNotifikasiAdapter | *Integrasi Eksternal* | Mengirim notifikasi pesan baru melalui layanan Web Push milik peramban sehingga notifikasi muncul di perangkat penerima, termasuk saat ITBELI sedang tidak dibuka. Notifikasi ditampilkan oleh *Service Worker* ITBELI pada peramban penerima. Dipanggil oleh NotifikasiController. Diwujudkan sebagai kelas C44 PushNotifikasiAdapter. |
| Database | *Penyimpanan Data* | Basis data PostgreSQL pada Supabase yang menyimpan seluruh data *Model* secara persisten dan terpusat sehingga data konsisten bagi seluruh perangkat. Hanya diakses oleh komponen *Model*. |
| PenyimpananBerkas | *Penyimpanan Data* | Supabase Storage yang menyimpan berkas foto listing dan berkas bukti tangkapan layar laporan, sedangkan lokasi berkasnya dicatat pada *Model* Barang dan Laporan. Diakses oleh BarangController dan LaporanController. |

Seluruh 40 kelas analisis pada SKPL tercakup oleh 31 komponen *View*, *Controller*, dan *Model* di atas, sehingga seluruh use case UC01–UC24 dapat dijalankan oleh komponen-komponen tersebut. Nama komponen pada Tabel 2.3 menjadi acuan nama kelas perancangan pada BAB 3 hingga BAB 5.

## 2.4 Model Arsitektur Perangkat Lunak

Model arsitektur ITBELI diambil dari BAB 3 dokumen APL dan digambarkan dengan satu *view*, yaitu ***logical view*** [7]. *View* lain tidak digambarkan karena belum memberi informasi tambahan yang berarti. *Physical view* hanya akan mengulang Gambar 2.1 yang sudah menunjukkan tempat setiap bagian dijalankan (peramban, server Node.js, dan Supabase). *Process view* kurang dibutuhkan karena hampir seluruh alur ITBELI berbentuk permintaan dan tanggapan, dan urutan interaksinya sudah dirinci per use case melalui *sequence diagram* pada BAB 3. *Development view* baru dapat digambarkan secara akurat setelah struktur kode program disusun pada tahap implementasi.

### 2.4.1 Logical View

*Logical view* dipilih karena menunjukkan seluruh komponen pada Tabel 2.3 beserta hubungan fungsionalnya, sehingga setiap komponen terlihat memiliki batas tanggung jawab yang jelas dan berhubungan dengan komponen lain sesuai rancangan pada SKPL. *View* ini digambarkan dalam bentuk *block diagram*, bukan diagram kelas, karena yang perlu ditunjukkan adalah interaksi antarkomponen yang masing-masing dapat mewadahi lebih dari satu kelas.

<p align="center">
<img alt="Logical View ITBELI" src="./assets/diagram/Logical_View_ITBELI.png" width="100%">
</p>
<p align="center">
<i>Gambar 2.2. Logical View ITBELI</i>
</p>

Gambar 2.2 membagi komponen ke dalam tiga lajur, yaitu *View*, *Controller*, dan *Model*, sedangkan komponen *Pendukung* dan *Integrasi Eksternal* berada di sebelah kanan dan komponen *Penyimpanan Data* di bagian bawah. Seluruh hubungan diturunkan dari tabel Hubungan Antarkelas pada subbab 5.3 dokumen SKPL. *View* memanggil *Controller* melalui 15 hubungan yang sesuai dengan 15 asosiasi *boundary–control* pada SKPL. *Controller* mengakses *Model*, memanggil Otorisasi dan Kriptografi, serta meminta NotifikasiController mengirim pemberitahuan melalui SurelAdapter dan PushNotifikasiAdapter ke layanan SMTP dan Web Push. Seluruh *Model* menyimpan datanya pada Database, dan di bawah lajur *Model* digambarkan 12 relasi antar-*Model* beserta multiplisitasnya, misalnya komposisi Akun–Barang dan asosiasi Barang–Percakapan.

Seluruh hubungan tersebut mematuhi aturan ketergantungan pada subbab 2.2.1. Salah satu akibatnya, ModerasiController tidak mengakses *Model* Percakapan, sehingga tidak ada jalur dari DasborAdminView menuju isi pesan (KF35).

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

<br>

---

# BAB 5: Matriks Kerunutan

Petakan kelas perancangan dengan use case yang terkait. Gunakan **BAB 6 Traceability pada dokumen SKPL** sebagai acuan keterkaitan kelas analisis dan use case, lalu sesuaikan dengan realisasi use case dan kelas perancangan pada BAB 3–BAB 5 DPPL.

Tabel 7.1. Matriks Kerunutan Kelas terhadap Use Case

| Kelas | Use Case Terkait |
| :--- | :--- |
| *[ID kelas - Nama kelas]* | *[ID UC - Nama use case]* |
| *[ID kelas - Nama kelas]* | *[ID UC - Nama use case]* |
| *...* | *...* |
