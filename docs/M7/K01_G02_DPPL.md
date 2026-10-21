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

Bab ini mendeskripsikan realisasi use case ITBELI ke dalam perancangan perangkat lunak untuk use case UC01 sampai dengan UC08. Setiap subbab use case memuat identifikasi kelas perancangan yang terlibat, *sequence diagram* untuk skenario normal dan seluruh skenario alternatif berdasarkan dokumen SKPL, serta diagram kelas perancangan yang memuat spesifikasi lengkap atribut dan operasi.

---

## 3.1 Use Case Mendaftar Akun

**ID Use Case:** UC01  
**Nama Use Case:** Mendaftar Akun

### 3.1.1 Identifikasi Kelas

Realisasi use case pendaftaran akun melibatkan kelas *boundary* untuk menyajikan formulir dan menangkap masukan, kelas *control* untuk menegakkan aturan bisnis (validasi domain @itb.ac.id, keunikan surel, *hashing* kata sandi, serta pemicuan verifikasi surel), kelas *entity* untuk persistensi data, serta kelas *pendukung* dan *integrasi eksternal*.

Tabel 3.1. Identifikasi Kelas Use Case UC01

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanOtentikasi | C01 HalamanOtentikasi | Menyajikan formulir pendaftaran, memvalidasi kelengkapan isian di sisi klien, dan menampilkan pesan galat atau mengarahkan ke halaman verifikasi. |
| 2 | AkunController | C13 AkunController | Mengorkestrasikan pendaftaran: validasi kelengkapan, verifikasi domain @itb.ac.id, pengecekan keunikan surel, pemanggilan fungsi hash kata sandi, serta pembuatan token verifikasi. |
| 3 | NotifikasiController | C19 NotifikasiController | Mengelola pembuatan notifikasi surel verifikasi dan meneruskannya ke surel adapter. |
| 4 | Akun | C23 Akun | Menyimpan entitas akun baru dengan status awal "Belum Terverifikasi". |
| 5 | TokenVerifikasi | C27 TokenVerifikasi | Menyimpan kode verifikasi unik (OTP) dengan masa berlaku 15 menit dan status aktif. |
| 6 | Notifikasi | C35 Notifikasi | Menyimpan rekaman riwayat pemberitahuan verifikasi yang dikirimkan kepada pengguna. |
| 7 | DokumenLegal | C40 DokumenLegal | Menyediakan naskah Kebijakan Privasi dan Ketentuan Penggunaan yang disetujui pendaftar. |
| 8 | Kriptografi | C42 Kriptografi (Pendukung) | Melakukan enkripsi satu arah (*hashing*) kata sandi menggunakan pustaka bcrypt sebelum disimpan. |
| 9 | SurelAdapter | C43 SurelAdapter (Integrasi) | Mengirimkan kode verifikasi ke alamat surel @itb.ac.id pengguna melalui protokol SMTP berenkripsi TLS. |

### 3.1.2 Sequence Diagram

- **Skenario Normal**

Alur pendaftaran normal diawali saat calon pengguna membuka halaman pendaftaran akun, mengisi identitas lengkap dengan surel berdomain @itb.ac.id, menyetujui ketentuan privasi, dan menekan tombol daftar. Sistem melakukan validasi, mengenkripsi kata sandi, menyimpan akun baru berstatus "Belum Terverifikasi", membangkitkan token verifikasi, serta mengirimkan kode ke surel pengguna.

<p align="center">
<img alt="Sequence Diagram UC01 - Skenario Normal" src="./assets/diagram/Sequence_UC01_Normal.png" width="95%">
</p>
<p align="center">
<i>Gambar 3.1. Sequence Diagram UC01 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Domain Email Tidak Valid**

Skenario ini terjadi apabila calon pengguna memasukkan alamat surel yang tidak berakhiran domain institusi resmi (@itb.ac.id), seperti @gmail.com atau @yahoo.com. AkunController mendeteksi ketidaksesuaian domain, membatalkan penyimpanan, dan HalamanOtentikasi menampilkan pesan galat validasi institusi.

<p align="center">
<img alt="Sequence Diagram UC01 - Skenario Alternatif 1: Domain Email Tidak Valid" src="./assets/diagram/Sequence_UC01_Alt1.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.2. Sequence Diagram UC01 - Skenario Alternatif 1: Domain Email Tidak Valid</i>
</p>

- **Skenario Alternatif 2: Email Sudah Terdaftar**

Skenario ini terjadi apabila calon pengguna mendaftar dengan surel yang telah tersimpan sebelumnya pada basis data ITBELI. Pengecekan keunikan surel oleh AkunController menghasilkan status terdaftar, sehingga proses pembuatan akun digagalkan dan sistem menyarankan pengguna untuk masuk atau menggunakan alamat lain.

<p align="center">
<img alt="Sequence Diagram UC01 - Skenario Alternatif 2: Email Sudah Terdaftar" src="./assets/diagram/Sequence_UC01_Alt2.png" width="80%">
</p>
<p align="center">
<i>Gambar 3.3. Sequence Diagram UC01 - Skenario Alternatif 2: Email Sudah Terdaftar</i>
</p>

### 3.1.3 Diagram Kelas

Diagram kelas perancangan UC01 menggambarkan struktur statis kelas perancangan yang merealisasikan proses pendaftaran akun. HalamanOtentikasi berasosiasi langsung dengan AkunController. AkunController bergantung pada Akun, TokenVerifikasi, DokumenLegal, Kriptografi, serta NotifikasiController. NotifikasiController selanjutnya berkolaborasi dengan SurelAdapter dan entitas Notifikasi. Multiplisitas relasi antar-entitas menunjukkan bahwa satu Akun dapat memiliki banyak TokenVerifikasi dan Notifikasi, serta merujuk ke satu versi DokumenLegal yang disetujui.

<p align="center">
<img alt="Diagram Kelas Use Case UC01" src="./assets/diagram/Diagram_Kelas_UC01.png" width="85%">
</p>
<p align="center">
<i>Gambar 3.4. Diagram Kelas Use Case UC01</i>
</p>

---

## 3.2 Use Case Memverifikasi Surel

**ID Use Case:** UC02  
**Nama Use Case:** Memverifikasi Surel

### 3.2.1 Identifikasi Kelas

Realisasi use case verifikasi surel melibatkan antarmuka verifikasi untuk menerima kode masukan dan menampilkan hitung mundur waktu kedaluwarsa, kelas pengendali untuk memverifikasi keabsahan kode dan memperbarui status akun, serta entitas token verifikasi dan surel adapter untuk kebutuhan pengiriman ulang kode.

Tabel 3.2. Identifikasi Kelas Use Case UC02

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanOtentikasi | C01 HalamanOtentikasi | Menyajikan kolom isian kode verifikasi, indikator hitung mundur 15 menit, opsi tombol kirim ulang, serta notifikasi hasil validasi. |
| 2 | AkunController | C13 AkunController | Memvalidasi kode verifikasi terhadap basis data token, memeriksa batas waktu kedaluwarsa, memperbarui status akun, serta memproses permintaan kode baru. |
| 3 | NotifikasiController | C19 NotifikasiController | Menangani pengiriman surel kode verifikasi baru ketika diminta pengiriman ulang. |
| 4 | Akun | C23 Akun | Menyimpan pembaruan status akun dari "Belum Terverifikasi" menjadi "Terverifikasi". |
| 5 | TokenVerifikasi | C27 TokenVerifikasi | Melakukan pencocokan kode masukan, pengecekan kedaluwarsa 15 menit, penandaan status terpakai, dan penandaan hangus saat kode baru dibangkitkan. |
| 6 | Notifikasi | C35 Notifikasi | Menyimpan rekaman riwayat pengiriman ulang kode verifikasi. |
| 7 | SurelAdapter | C43 SurelAdapter (Integrasi) | Mengirimkan surel berisi kode verifikasi baru ke alamat pengguna melalui SMTP. |

### 3.2.2 Sequence Diagram

- **Skenario Normal**

Pada skenario normal, pengguna menyalin kode verifikasi dari surel, memasukkannya ke antarmuka, lalu menekan tombol verifikasi. Sistem mencocokkan kode dengan data token, memastikan waktu belum melampaui 15 menit, mengubah status token menjadi terpakai, memperbarui status akun menjadi "Terverifikasi", dan mengarahkan pengguna ke halaman beranda/login.

<p align="center">
<img alt="Sequence Diagram UC02 - Skenario Normal" src="./assets/diagram/Sequence_UC02_Normal.png" width="65%">
</p>
<p align="center">
<i>Gambar 3.5. Sequence Diagram UC02 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Kode Tidak Valid / Kedaluwarsa**

Skenario ini terjadi jika kode yang dimasukkan salah atau waktu penginputan telah melewati batas toleransi 15 menit. Sistem menolak pembaruan status akun dan menampilkan pesan galat yang menginstruksikan pengguna untuk meminta kode verifikasi baru.

<p align="center">
<img alt="Sequence Diagram UC02 - Skenario Alternatif 1: Kode Tidak Valid / Kedaluwarsa" src="./assets/diagram/Sequence_UC02_Alt1.png" width="70%">
</p>
<p align="center">
<i>Gambar 3.6. Sequence Diagram UC02 - Skenario Alternatif 1: Kode Tidak Valid / Kedaluwarsa</i>
</p>

- **Skenario Alternatif 2: Meminta Pengiriman Ulang Kode**

Skenario ini terjadi saat pengguna menekan tombol "Kirim Ulang Kode". Sistem menandai token lama sebagai hangus (*invalidated*), membangkitkan kode baru dengan batas waktu 15 menit baru, menyimpannya ke basis data, mengirimkannya melalui SurelAdapter, dan me-reset hitung mundur di layar antarmuka.

<p align="center">
<img alt="Sequence Diagram UC02 - Skenario Alternatif 2: Meminta Pengiriman Ulang Kode" src="./assets/diagram/Sequence_UC02_Alt2.png" width="80%">
</p>
<p align="center">
<i>Gambar 3.7. Sequence Diagram UC02 - Skenario Alternatif 2: Meminta Pengiriman Ulang Kode</i>
</p>

### 3.2.3 Diagram Kelas

Diagram kelas perancangan UC02 mendefinisikan kelas dan operasi yang dibutuhkan untuk validasi dan pengiriman ulang token verifikasi. HalamanOtentikasi berasosiasi dengan AkunController. AkunController bergantung pada Akun, TokenVerifikasi, dan NotifikasiController. NotifikasiController berkolaborasi dengan SurelAdapter dan entitas Notifikasi.

<p align="center">
<img alt="Diagram Kelas Use Case UC02" src="./assets/diagram/Diagram_Kelas_UC02.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.8. Diagram Kelas Use Case UC02</i>
</p>

---

## 3.3 Use Case Masuk ke Sistem (Login)

**ID Use Case:** UC03  
**Nama Use Case:** Masuk ke Sistem (Login)

### 3.3.1 Identifikasi Kelas

Realisasi use case login melibatkan antarmuka autentikasi untuk menerima kredensial, controller untuk memverifikasi kecocokan hash sandi dan memeriksa status keaktifan akun, modul kriptografi untuk verifikasi bcrypt, serta entitas sesi untuk pembentukan token akses (JWT).

Tabel 3.3. Identifikasi Kelas Use Case UC03

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanOtentikasi | C01 HalamanOtentikasi | Menyajikan formulir login, menangkap surel dan kata sandi, serta menampilkan pesan kegagalan (kredensial salah, belum verifikasi, atau terblokir). |
| 2 | AkunController | C13 AkunController | Mengorkestrasikan login: pencarian akun, pemanggilan verifikasi hash sandi, pemeriksaan status akun dan blokir, serta penerbitan token sesi. |
| 3 | Akun | C23 Akun | Menyimpan data kredensial, status verifikasi akun, status pemblokiran, dan peran pengguna (Pembeli/Penjual/Admin). |
| 4 | SesiLogin | C28 SesiLogin | Membangkitkan token sesi (JWT) bertenggat kedaluwarsa 24 jam dan menyimpannya sebagai catatan sesi aktif. |
| 5 | Kriptografi | C42 Kriptografi (Pendukung) | Membandingkan kata sandi teks murni dengan nilai hash bcrypt yang tersimpan secara aman. |

### 3.3.2 Sequence Diagram

- **Skenario Normal**

Pada skenario normal, pengguna memasukkan surel dan kata sandi yang valid. AkunController mengambil data akun, memverifikasi hash melalui Kriptografi, memastikan status akun adalah "Terverifikasi" dan tidak terblokir, membangkitkan token sesi 24 jam melalui SesiLogin, serta mengarahkan pengguna ke beranda aplikasi.

<p align="center">
<img alt="Sequence Diagram UC03 - Skenario Normal" src="./assets/diagram/Sequence_UC03_Normal.png" width="85%">
</p>
<p align="center">
<i>Gambar 3.9. Sequence Diagram UC03 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Kredensial Tidak Sesuai**

Skenario ini terjadi saat surel tidak ditemukan pada sistem atau kata sandi yang dimasukkan tidak cocok dengan nilai hash yang tersimpan. Sistem menolak pembentukan sesi dan memunculkan pesan galat kredensial salah.

<p align="center">
<img alt="Sequence Diagram UC03 - Skenario Alternatif 1: Kredensial Tidak Sesuai" src="./assets/diagram/Sequence_UC03_Alt1.png" width="65%">
</p>
<p align="center">
<i>Gambar 3.10. Sequence Diagram UC03 - Skenario Alternatif 1: Kredensial Tidak Sesuai</i>
</p>

- **Skenario Alternatif 2: Akun Belum Terverifikasi**

Skenario ini terjadi ketika kredensial pengguna cocok, namun atribut status akun masih bernilai "Belum Terverifikasi". Sistem menahan pembuatan sesi login dan menampilkan pesan peringatan beserta tombol pintasan untuk verifikasi/kirim ulang kode.

<p align="center">
<img alt="Sequence Diagram UC03 - Skenario Alternatif 2: Akun Belum Terverifikasi" src="./assets/diagram/Sequence_UC03_Alt2.png" width="65%">
</p>
<p align="center">
<i>Gambar 3.11. Sequence Diagram UC03 - Skenario Alternatif 2: Akun Belum Terverifikasi</i>
</p>

- **Skenario Alternatif 3: Akun Sedang Diblokir**

Skenario ini terjadi jika kredensial cocok dan akun terverifikasi, namun nilai atribut statusBlokir bernilai true (telah ditangguhkan oleh admin). Sistem membatalkan sesi masuk dan menampilkan pesan penangguhan resmi.

<p align="center">
<img alt="Sequence Diagram UC03 - Skenario Alternatif 3: Akun Sedang Diblokir" src="./assets/diagram/Sequence_UC03_Alt3.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.12. Sequence Diagram UC03 - Skenario Alternatif 3: Akun Sedang Diblokir</i>
</p>

### 3.3.3 Diagram Kelas

Diagram kelas perancangan UC03 memodelkan komponen autentikasi pengguna. HalamanOtentikasi berasosiasi dengan AkunController. AkunController bergantung pada Akun, SesiLogin, dan kelas utilitas Kriptografi. Satu entitas Akun berelasi 1 ke 0..* dengan SesiLogin.

<p align="center">
<img alt="Diagram Kelas Use Case UC03" src="./assets/diagram/Diagram_Kelas_UC03.png" width="65%">
</p>
<p align="center">
<i>Gambar 3.13. Diagram Kelas Use Case UC03</i>
</p>

---

## 3.4 Use Case Keluar dari Sistem (Logout)

**ID Use Case:** UC04  
**Nama Use Case:** Keluar dari Sistem (Logout)

### 3.4.1 Identifikasi Kelas

Realisasi use case logout melibatkan komponen antarmuka yang menyediakan tombol keluar, controller untuk memproses pencabutan otorisasi, modul otorisasi untuk validasi token, serta entitas sesi login untuk menonaktifkan token secara permanen.

Tabel 3.4. Identifikasi Kelas Use Case UC04

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanOtentikasi | C01 HalamanOtentikasi | Menampilkan opsi tombol "Keluar", mengirimkan permintaan logout, menghapus token lokal peramban, dan mengalihkan ke halaman login. |
| 2 | AkunController | C13 AkunController | Memproses permintaan pencabutan sesi di sisi server web. |
| 3 | Akun | C23 Akun | Entitas pemilik sesi login yang sedang aktif. |
| 4 | SesiLogin | C28 SesiLogin | Mengubah status sesi menjadi tidak aktif (*revoked*) atau menghapus rekaman sesi aktif dari basis data. |
| 5 | Otorisasi | C41 Otorisasi (Pendukung) | Memvalidasi keberlakuan token sesi pengguna sebelum dieksekusi pencabutannya. |

### 3.4.2 Sequence Diagram

- **Skenario Normal**

Pengguna yang sedang masuk mengklik menu profil dan memilih "Keluar". Permintaan diteruskan ke AkunController yang memvalidasi token melalui Otorisasi dan mencabut sesi di entitas SesiLogin. Setelah berhasil, token pada penyimpanan lokal peramban dihapus dan tampilan dialihkan ke halaman login.

<p align="center">
<img alt="Sequence Diagram UC04 - Skenario Normal" src="./assets/diagram/Sequence_UC04_Normal.png" width="55%">
</p>
<p align="center">
<i>Gambar 3.14. Sequence Diagram UC04 - Skenario Normal</i>
</p>

### 3.4.3 Diagram Kelas

Diagram kelas perancangan UC04 menunjukkan relasi antara HalamanOtentikasi, AkunController, entitas SesiLogin dan Akun, serta komponen pendukung Otorisasi. Operasi cabutSesi() dan nonaktifkan() menjamin integritas penutupan sesi.

<p align="center">
<img alt="Diagram Kelas Use Case UC04" src="./assets/diagram/Diagram_Kelas_UC04.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.15. Diagram Kelas Use Case UC04</i>
</p>

---

## 3.5 Use Case Melihat Profil Akun

**ID Use Case:** UC05  
**Nama Use Case:** Melihat Profil Akun

### 3.5.1 Identifikasi Kelas

Realisasi use case melihat profil melibatkan antarmuka profil akun dan komponen kartu produk, controller akun untuk menghimpun data identitas dan daftar listing milik pengguna, modul otorisasi untuk mengekstrak identitas dari token sesi, serta entitas Akun, Barang, dan DokumenLegal.

Tabel 3.5. Identifikasi Kelas Use Case UC05

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanProfil | C02 HalamanProfil | Menampilkan informasi identitas (nama, NIM, surel), daftar kartu barang dagangan milik sendiri, dan menu pengaturan akun. |
| 2 | KartuProduk | C06 KartuProduk | Komponen visual penyaji ringkasan tiap listing produk milik akun pada antarmuka profil. |
| 3 | AkunController | C13 AkunController | Mengambil identitas akun dan deretan listing yang berelasi dengan idAkun sesi pengguna aktif. |
| 4 | Akun | C23 Akun | Menyediakan data identitas profil (nama, NIM, surel). |
| 5 | Pembeli | C24 Pembeli | Peran pembeli dari akun yang melihat profil. |
| 6 | Penjual | C25 Penjual | Peran penjual dari akun yang melihat profil dan mengelola barang dagangannya. |
| 7 | SesiLogin | C28 SesiLogin | Menyediakan konteks idAkun yang terikat pada token sesi login aktif. |
| 8 | Barang | C29 Barang | Menyediakan sekumpulan entitas produk yang dimiliki oleh idAkun pengguna. |
| 9 | DokumenLegal | C40 DokumenLegal | Menyediakan tautan Kebijakan Privasi yang dapat dibuka melalui menu pengaturan akun. |
| 10 | Otorisasi | C41 Otorisasi (Pendukung) | Mengekstrak dan memverifikasi idAkun dari token sesi otentikasi. |

### 3.5.2 Sequence Diagram

- **Skenario Normal**

Pengguna membuka menu profil. Sistem mengekstrak idAkun dari token sesi melalui Otorisasi, mengambil data identitas dari Akun, mengambil daftar listing dari entitas Barang, dan merender tampilan profil beserta kartu produk. Ketika pengguna membuka pengaturan akun, sistem menyediakan tautan dokumen kebijakan privasi.

<p align="center">
<img alt="Sequence Diagram UC05 - Skenario Normal" src="./assets/diagram/Sequence_UC05_Normal.png" width="80%">
</p>
<p align="center">
<i>Gambar 3.16. Sequence Diagram UC05 - Skenario Normal</i>
</p>

### 3.5.3 Diagram Kelas

Diagram kelas perancangan UC05 menggambarkan struktur komponen tampilan profil. HalamanProfil memiliki relasi komposisi 1 ke 0..* dengan KartuProduk, berasosiasi dengan AkunController. AkunController bergantung pada Akun, SesiLogin, Barang, DokumenLegal, dan Otorisasi. Akun memiliki subtipe generalisasi Pembeli dan Penjual.

<p align="center">
<img alt="Diagram Kelas Use Case UC05" src="./assets/diagram/Diagram_Kelas_UC05.png" width="85%">
</p>
<p align="center">
<i>Gambar 3.17. Diagram Kelas Use Case UC05</i>
</p>

---

## 3.6 Use Case Melihat Kebijakan Privasi dan Ketentuan Penggunaan

**ID Use Case:** UC06  
**Nama Use Case:** Melihat Kebijakan Privasi dan Ketentuan Penggunaan

### 3.6.1 Identifikasi Kelas

Realisasi use case dokumen legal melibatkan antarmuka pembaca naskah hukum, controller pengambil dokumen legal yang sedang berlaku, serta entitas DokumenLegal yang menyimpan teks statis dan klausul penjaminan kerahasiaan percakapan pribadi.

Tabel 3.6. Identifikasi Kelas Use Case UC06

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanDokumenLegal | C12 HalamanDokumenLegal | Merender teks dokumen hukum secara penuh dan memberikan penekanan visual khusus pada klausul privasi percakapan. |
| 2 | DokumenLegalController | C22 DokumenLegalController | Mengambil naskah dokumen kebijakan versi aktif dan klausul proteksi percakapan. |
| 3 | DokumenLegal | C40 DokumenLegal | Menyimpan data dokumen hukum (versi, tanggal berlaku, teks isi, dan klausul privasi). |

### 3.6.2 Sequence Diagram

- **Skenario Normal**

Pengguna mengklik tautan dokumen hukum dari formulir pendaftaran, profil, atau ruang percakapan. DokumenLegalController mengambil naskah versi terbaru beserta klausul spesifik yang menyatakan bahwa isi percakapan pribadi dienkripsi dan tidak dapat diakses admin maupun pengembang sistem. HalamanDokumenLegal merender teks dan menyoroti klausul tersebut.

<p align="center">
<img alt="Sequence Diagram UC06 - Skenario Normal" src="./assets/diagram/Sequence_UC06_Normal.png" width="55%">
</p>
<p align="center">
<i>Gambar 3.18. Sequence Diagram UC06 - Skenario Normal</i>
</p>

### 3.6.3 Diagram Kelas

Diagram kelas perancangan UC06 memiliki struktur yang sederhana dan modular: HalamanDokumenLegal memanggil DokumenLegalController, yang kemudian mengakses entitas DokumenLegal untuk mengambil data dokumen dan klausul privasi.

<p align="center">
<img alt="Diagram Kelas Use Case UC06" src="./assets/diagram/Diagram_Kelas_UC06.png" width="40%">
</p>
<p align="center">
<i>Gambar 3.19. Diagram Kelas Use Case UC06</i>
</p>

---

## 3.7 Use Case Membuat Listing

**ID Use Case:** UC07  
**Nama Use Case:** Membuat Listing

### 3.7.1 Identifikasi Kelas

Realisasi use case pembuatan listing melibatkan antarmuka formulir barang (dengan validasi berkas dan isian di sisi klien), controller barang untuk validasi ganda di sisi server dan orkestrasinya, modul otorisasi untuk identifikasi penjual, entitas data referensi (Kategori dan LokasiCOD), entitas utama Barang dan FotoBarang, serta layanan penyimpanan berkas (Supabase Storage).

Tabel 3.7. Identifikasi Kelas Use Case UC07

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | FormulirBarang | C04 FormulirBarang | Menampilkan formulir input barang, memvalidasi tipe data dan spesifikasi foto di browser, menandai isian kosong, serta mengirimkan data ke backend. |
| 2 | BarangController | C14 BarangController | Menjalankan validasi server (kelengkapan isian dan keabsahan berkas), mengunggah berkas foto ke storage, menyimpan objek Barang dan FotoBarang, serta menerbitkan produk ke katalog. |
| 3 | Penjual | C25 Penjual | Aktor pengguna yang berwenang menerbitkan produk jualan. |
| 4 | SesiLogin | C28 SesiLogin | Menyediakan konteks idPenjual dari sesi login aktif. |
| 5 | Barang | C29 Barang | Menyimpan informasi utama listing dengan status ketersediaan awal "Tersedia". |
| 6 | FotoBarang | C30 FotoBarang | Menyimpan metadata berkas foto produk (1 sampai 5 foto, JPG/PNG, ukuran ≤ 5 MB). |
| 7 | Kategori | C31 Kategori | Menyediakan daftar kategori barang tetap dan memvalidasi keabsahan kategori yang dipilih. |
| 8 | LokasiCOD | C32 LokasiCOD | Menyediakan pilihan titik temu fisik transaksi COD di wilayah kampus ITB. |
| 9 | Otorisasi | C41 Otorisasi (Pendukung) | Memverifikasi token sesi dan memastikan idAkun berstatus aktif. |
| 10 | PenyimpananBerkas | PenyimpananBerkas (Storage) | Layanan Supabase Storage untuk menyimpan fisik berkas foto produk secara persisten. |

### 3.7.2 Sequence Diagram

- **Skenario Normal**

Penjual mengisi formulir produk, mengunggah foto yang memenuhi syarat (maksimum 5 foto JPG/PNG, ≤ 5 MB), lalu menekan tombol simpan. Sistem melakukan verifikasi token, validasi ganda kelengkapan formulir dan foto di sisi server, mengunggah berkas ke Supabase Storage, menyimpan entitas Barang dengan status "Tersedia", menyimpan rujukan FotoBarang, dan menerbitkannya ke katalog utama.

<p align="center">
<img alt="Sequence Diagram UC07 - Skenario Normal" src="./assets/diagram/Sequence_UC07_Normal.png" width="90%">
</p>
<p align="center">
<i>Gambar 3.20. Sequence Diagram UC07 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Isian Formulir Tidak Lengkap**

Skenario ini terjadi apabila penjual mengosongkan kolom wajib (misalnya judul, harga, atau tidak memilih kategori). FormulirBarang mendeteksi kegagalan pada validasi wajib-isi di sisi klien, membatalkan pengiriman ke backend, dan memberi penanda visual merah pada kolom yang terlewat.

<p align="center">
<img alt="Sequence Diagram UC07 - Skenario Alternatif 1: Isian Formulir Tidak Lengkap" src="./assets/diagram/Sequence_UC07_Alt1.png" width="55%">
</p>
<p align="center">
<i>Gambar 3.21. Sequence Diagram UC07 - Skenario Alternatif 1: Isian Formulir Tidak Lengkap</i>
</p>

- **Skenario Alternatif 2: Pelanggaran Syarat Unggahan Foto**

Skenario ini terjadi ketika penjual mencoba mengunggah foto berformat di luar JPG/PNG (misal .pdf atau .heic), berkas berukuran lebih dari 5 MB, atau mencoba mengunggah lebih dari 5 foto. FormulirBarang memblokir pratinjau berkas dan menampilkan pesan galat spesifikasi berkas.

<p align="center">
<img alt="Sequence Diagram UC07 - Skenario Alternatif 2: Pelanggaran Syarat Unggahan Foto" src="./assets/diagram/Sequence_UC07_Alt2.png" width="65%">
</p>
<p align="center">
<i>Gambar 3.22. Sequence Diagram UC07 - Skenario Alternatif 2: Pelanggaran Syarat Unggahan Foto</i>
</p>

### 3.7.3 Diagram Kelas

Diagram kelas perancangan UC07 memodelkan struktur pembuatan listing. FormulirBarang berasosiasi ke BarangController. BarangController bergantung pada SesiLogin, Penjual, Kategori, LokasiCOD, Barang, FotoBarang, dan Otorisasi. Multiplisitas relasi komposisi Barang terhadap FotoBarang adalah 1 ke 1..5, menjamin setiap barang wajib memiliki sekurang-kurangnya satu foto dan paling banyak lima foto.

<p align="center">
<img alt="Diagram Kelas Use Case UC07" src="./assets/diagram/Diagram_Kelas_UC07.png" width="90%">
</p>
<p align="center">
<i>Gambar 3.23. Diagram Kelas Use Case UC07</i>
</p>

---

## 3.8 Use Case Melihat Daftar Listing Milik Sendiri

**ID Use Case:** UC08  
**Nama Use Case:** Melihat Daftar Listing Milik Sendiri

### 3.8.1 Identifikasi Kelas

Realisasi use case ini melibatkan antarmuka dasbor listing penjual dan komponen kartu produk, controller barang untuk mengambil dan mengelompokkan data berdasarkan status, modul otorisasi untuk mengekstrak identitas penjual dari token sesi, serta entitas Penjual, SesiLogin, dan Barang.

Tabel 3.8. Identifikasi Kelas Use Case UC08

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanListingPenjual | C03 HalamanListingPenjual | Menyajikan dasbor kelola jualan dengan pemisahan tab barang "Tersedia" dan tab riwayat "Terjual". |
| 2 | KartuProduk | C06 KartuProduk | Merender representasi visual ringkas tiap produk pada masing-masing tab. |
| 3 | BarangController | C14 BarangController | Mengambil seluruh listing milik idPenjual yang sedang masuk dan mengelompokkannya menurut label status. |
| 4 | Penjual | C25 Penjual | Aktor pemilik listing yang mengakses riwayat jualannya. |
| 5 | SesiLogin | C28 SesiLogin | Menyediakan konteks idAkun penjual dari token sesi yang aktif. |
| 6 | Barang | C29 Barang | Entitas data produk jualan beserta status ketersediaannya. |
| 7 | Otorisasi | C41 Otorisasi (Pendukung) | Memverifikasi token sesi dan mengekstrak identitas pengguna. |

### 3.8.2 Sequence Diagram

- **Skenario Normal**

Penjual membuka menu "Listing Saya". Sistem memvalidasi token sesi, mengambil seluruh data listing milik idPenjual dari entitas Barang, mengelompokkan barang ke dalam daftar "Tersedia" dan riwayat "Terjual", lalu merender HalamanListingPenjual dengan tab aktif yang menampilkan kartu produk untuk masing-masing item.

<p align="center">
<img alt="Sequence Diagram UC08 - Skenario Normal" src="./assets/diagram/Sequence_UC08_Normal.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.24. Sequence Diagram UC08 - Skenario Normal</i>
</p>

### 3.8.3 Diagram Kelas

Diagram kelas perancangan UC08 memodelkan relasi HalamanListingPenjual yang mengomposisikan 1 ke 0..* KartuProduk, berasosiasi dengan BarangController. BarangController bergantung pada Penjual, SesiLogin, Barang, dan Otorisasi. Relasi Penjual dan Barang berupa komposisi 1 ke 0..*.

<p align="center">
<img alt="Diagram Kelas Use Case UC08" src="./assets/diagram/Diagram_Kelas_UC08.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.25. Diagram Kelas Use Case UC08</i>
</p>

<br>

---

## 3.9 Use Case Mengubah Listing

**ID Use Case:** UC09  
**Nama Use Case:** Mengubah Listing

### 3.9.1 Identifikasi Kelas

Tabel 3.9. Identifikasi Kelas Use Case UC09

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanListingPenjual | C03 HalamanListingPenjual | Titik masuk tombol Ubah Listing pada daftar listing sendiri (UC08). |
| 2 | FormulirBarang | C04 FormulirBarang | Merender formulir berisi atribut dan foto lama, memvalidasi kolom dan jumlah akhir foto. |
| 3 | BarangController | C14 BarangController | Memverifikasi pemilik pada GET dan UPDATE; memvalidasi ulang data/foto sebelum memperbarui listing dan metadata. |
| 4 | Penjual | C25 Penjual | Pemilik listing yang meminta pengubahan data dan galeri barang miliknya. |
| 5 | SesiLogin | C28 SesiLogin | Menyediakan idAkun dari token sesi aktif untuk otorisasi. |
| 6 | Barang | C29 Barang | Menyimpan dan menyediakan data listing, status, idPenjual serta waktu perubahan. |
| 7 | FotoBarang | C30 FotoBarang | Menyimpan metadata galeri/berkas foto barang dan urutannya. |
| 8 | Kategori | C31 Kategori | Menyediakan kategori baku untuk validasi, filter dan detail. |
| 9 | LokasiCOD | C32 LokasiCOD | Menyediakan titik temu COD baku untuk pilihan/filter dan detail. |
| 10 | Otorisasi | C41 Otorisasi (Pendukung) | Mengesahkan token sesi dan mengenali idAkun pemohon di server. |
| 11 | PenyimpananBerkas (Supabase Storage) | PenyimpananBerkas (Storage) | Menyimpan dan membersihkan berkas foto fisik pada Supabase Storage. |

- **Skenario Normal**

<p align="center">
<img alt="Gambar 3.26. Sequence Diagram UC09 - Skenario Normal" src="./assets/diagram/Sequence_UC09_Normal.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.26. Sequence Diagram UC09 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1:  Kolom Wajib Dikosongkan saat Pengubahan**

<p align="center">
<img alt="Gambar 3.27. Sequence Diagram UC09 - Skenario Alternatif 1" src="./assets/diagram/./assets/diagram/Sequence_UC09_Alt1.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.27. Sequence Diagram UC09 — Skenario Alternatif 1</i>
</p>

- **Skenario Alternatif 2: Pelanggaran Syarat Unggahan Foto saat Pengubahan**

<p align="center">
<img alt="Gambar 3.28. Sequence Diagram UC09 - Alternatif 2" src="./assets/diagram/Sequence_UC09_Alt2.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.28. Sequence Diagram UC09 — Alternatif 2</i>
</p>

- **Skenario Alternatif 3: Percobaan Pengubahan oleh Akun Bukan Pemilik**

<p align="center">
<img alt="Gambar 3.29. Sequence Diagram UC09 - Skenario Alternatif 3" src="./assets/diagram/Sequence_UC09_Alt3.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.29. Sequence Diagram UC09 - Skenario Alternatif 3</i>
</p>

### 3.9.3 Diagram Kelas
<p align="center">
<img alt="Gambar 3.30. Diagram Kelas UC09 " src="./assets/diagram/Diagram_Kelas_UC09.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.30. Diagram Kelas UC09</i>
</p>

---

## 3.10 Use Case Menghapus Listing

**ID Use Case:** UC10  
**Nama Use Case:** Menghapus Listing

### 3.10.1 Identifikasi Kelas

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanListingPenjual | C03 HalamanListingPenjual | Menampilkan Listing Saya, dialog konfirmasi, dan aksi kelola listing. |
| 2 | BarangController | C14 BarangController | Memeriksa pemilik sebelum dialog dan sebelum operasi hapus; menghapus listing serta mengoordinasikan pembersihan foto. |
| 3 | Penjual | C25 Penjual | Penjual pemilik listing yang mengonfirmasi penghapusan permanen. |
| 4 | SesiLogin | C28 SesiLogin | Menyediakan idAkun dari token sesi aktif untuk otorisasi. |
| 5 | Barang | C29 Barang | Menyimpan dan menyediakan data listing, status, idPenjual serta waktu perubahan. |
| 6 | FotoBarang | C30 FotoBarang | Menyimpan metadata galeri/berkas foto barang dan urutannya. |
| 7 | Otorisasi | C41 Otorisasi (Pendukung) | Mengesahkan token sesi dan mengenali idAkun pemohon di server. |
| 8 | PenyimpananBerkas (Supabase Storage) | PenyimpananBerkas (Storage) | Menyimpan dan membersihkan berkas foto fisik pada Supabase Storage. |

### 3.10.2 Sequence Diagram

- **Skenario Normal**
<p align="center">
<img alt="Gambar 3.31. Sequence Diagram UC10 - Skenario Normal" src="./assets/diagram/Sequence_UC10_Normal.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.31. Sequence Diagram UC10 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Penjual Membatalkan Konfirmasi Penghapusan**
<p align="center">
<img alt="Gambar 3.32. Sequence Diagram UC10 - Skenario Alternatif 1" src="./assets/diagram/Sequence_UC10_Alt1.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.32. Sequence Diagram UC10 - Skenario Alternatif 1</i>
</p>

- **Skenario Alternatif 2: Percobaan Penghapusan oleh Akun Bukan Pemilik**
<p align="center">
<img alt="Gambar 3.33. Sequence Diagram UC10 - Skenario Alternatif 2" src="./assets/diagram/Sequence_UC10_Alt2.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.33. Sequence Diagram UC10 - Skenario Alternatif 2</i>
</p>

### 3.10.3 Diagram Kelas

<p align="center">
<img alt="Gambar 3.34. Diagram Kelas UC10" src="./assets/diagram/Diagram_Kelas_UC10.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.34. Diagram Kelas UC10</i>
</p>

---

## 3.11 Use Case Menandai Listing Terjual

**ID Use Case:** UC11  
**Nama Use Case:** Menandai Listing Terjual

### 3.11.1 Identifikasi Kelas

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanListingPenjual | C03 HalamanListingPenjual | Menampilkan Listing Saya, dialog konfirmasi, dan aksi kelola listing. |
| 2 | KartuProduk | C06 KartuProduk | Merender kartu listing beserta foto utama, harga dan status. |
| 3 | BarangController | C14 BarangController | Memeriksa kepemilikan dan hanya menerima perubahan status Tersedia menjadi Terjual. |
| 4 | Penjual | C25 Penjual | Penjual pemilik barang yang mengonfirmasi penandaan Terjual. |
| 5 | SesiLogin | C28 SesiLogin | Menyediakan idAkun dari token sesi aktif untuk otorisasi. |
| 6 | Barang | C29 Barang | Menyimpan dan menyediakan data listing, status, idPenjual serta waktu perubahan. |
| 7 | Otorisasi | C41 Otorisasi (Pendukung) | Mengesahkan token sesi dan mengenali idAkun pemohon di server. |

### 3.11.2 Sequence Diagram

- **Skenario Normal**
<p align="center">
<img alt="Gambar 3.35. Sequence Diagram UC11 — Skenario Normal" src="./assets/diagram/Sequence_UC11_Normal.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.35. Sequence Diagram UC11 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Penjual Membatalkan Dialog Konfirmasi**
<p align="center">
<img alt="Gambar 3.36. Sequence Diagram UC11 - Skenario Alternatif 1" src="./assets/diagram/Sequence_UC11_Alt1.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.36. Sequence Diagram UC11 - Skenario Alternatif 1</i>
</p>

- **Skenario Alternatif 2: Listing Sudah Berstatus Terjual**
<p align="center">
<img alt="Gambar 3.37. Sequence Diagram UC11 - Skenario Alternatif 2" src="./assets/diagram/Sequence_UC11_Alt2.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.37. Sequence Diagram UC11 - Skenario Alternatif 2</i>
</p>

### 3.11.3 Diagram Kelas
<p align="center">
<img alt="Gambar 3.38. Diagram Kelas UC11" src="./assets/diagram/Diagram_Kelas_UC11.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.38. Diagram Kelas UC11</i>
</p>

---
## 3.12 Use Case Membatalkan Penandaan Terjual

**ID Use Case:** UC12  
**Nama Use Case:** Membatalkan Penandaan Terjual

### 3.12.1 Identifikasi Kelas
| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait | Peran / Tanggung Jawab dalam Use Case |
| :--- | :--- | :--- | :--- |
| 1 | HalamanListingPenjual | C03 HalamanListingPenjual | Menampilkan Listing Saya, dialog konfirmasi, dan aksi kelola listing. |
| 2 | KartuProduk | C06 KartuProduk | Merender kartu listing beserta foto utama, harga dan status. |
| 3 | BarangController | C14 BarangController | Memeriksa kepemilikan dan hanya menerima perubahan status Terjual menjadi Tersedia. |
| 4 | Penjual | C25 Penjual | Penjual pemilik barang yang membatalkan status Terjual. |
| 5 | SesiLogin | C28 SesiLogin | Menyediakan idAkun dari token sesi aktif untuk otorisasi. |
| 6 | Barang | C29 Barang | Menyimpan dan menyediakan data listing, status, idPenjual serta waktu perubahan. |
| 7 | Otorisasi | C41 Otorisasi (Pendukung) | Mengesahkan token sesi dan mengenali idAkun pemohon di server. |

### 3.12.2 Sequence Diagram

- **Skenario Normal**
<p align="center">
<img alt="Gambar 3.39. Sequence Diagram UC12 - Skenario Normal" src="./assets/diagram/Sequence_UC12_Normal.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.39. Sequence Diagram UC12 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Penjual Membatalkan Dialog Konfirmasi**
<p align="center">
<img alt="Gambar 3.40. Sequence Diagram UC12 - Skenario Alternatif 1" src="./assets/diagram/Sequence_UC12_Alt1.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.40. Sequence Diagram UC12 - Skenario Alternatif 1</i>
</p>

- **Skenario Alternatif 2: Listing Sudah Kembali Berstatus Tersedia**
<p align="center">
<img alt="Gambar 3.41. Sequence Diagram UC12 - Skenario Alternatif 2" src="./assets/diagram/Sequence_UC12_Alt2.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.41. Sequence Diagram UC12 - Skenario Alternatif 2</i>
</p>


### 3.12.3 Diagram Kelas
<p align="center">
<img alt="Gambar 3.42. Diagram Kelas UC12" src="./assets/diagram/Diagram_Kelas_UC12.png" width="75%">
</p>
<p align="center">
<i>Gambar 3.42. Diagram Kelas UC12</i>
</p>

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
