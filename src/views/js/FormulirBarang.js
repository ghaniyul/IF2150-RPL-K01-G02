// C04: UC07 dan UC09, layar I-07.
class FormulirBarang {
  constructor() {
    this.id = new URLSearchParams(location.search).get('id');
    this.foto = []; this.fotoAwal = []; this.berubah = false; this.sibuk = false;
    this.form = document.getElementById('formulir-barang');
  }
  async mulai() {
    this.renderFoto(); this.preview();
    if (!Api.getToken()) { PenjualUI.pesan('Masuk terlebih dahulu melalui tombol Akun untuk membuat atau mengubah listing.'); return; }
    try {
      const data = await PenjualUI.kirim('GET', this.id ? `/api/barang/${encodeURIComponent(this.id)}` : '/api/barang/formulir');
      for (const k of data.daftarKategori) document.getElementById('idKategori').add(new Option(k.namaKategori,k.idKategori));
      for (const l of data.daftarLokasi) document.getElementById('idLokasi').add(new Option(`${l.namaLokasi} · ${l.kampus}`,l.idLokasi));
      if (this.id) {
        document.getElementById('judul-halaman').textContent = 'Ubah Listing';
        document.getElementById('breadcrumb').textContent = 'Ubah listing';
        document.getElementById('simpan').textContent = 'Simpan Perubahan';
        for (const k of ['judul','harga','idKategori','idLokasi','deskripsiKondisi']) document.getElementById(k).value = data.barang[k] ?? '';
        this.waktuUbah = data.barang.waktuUbah;
        this.fotoAwal = data.daftarFoto.map(f => f.pathBerkas);
        this.foto = data.daftarFoto.map(f => ({ key:f.pathBerkas, url:f.pathBerkas }));
      }
      this.pasang(); this.renderFoto(); this.preview();
      document.getElementById('isian-listing').disabled = false;
    } catch (error) { PenjualUI.pesan(error.message); }
  }
  pasang() {
    const ubahIsian = e => {
      this.berubah = true; this.preview();
      if (document.getElementById(`error-${e.target.id}`)) this.error(e.target.id, '');
    };
    this.form.addEventListener('input', ubahIsian);
    this.form.addEventListener('change', ubahIsian);
    this.form.addEventListener('submit', e => { e.preventDefault(); this.simpan(); });
    document.getElementById('foto').addEventListener('change', e => { this.tambahFoto([...e.target.files]); e.target.value = ''; });
    const zone = document.getElementById('dropzone');
    zone.addEventListener('click', () => document.getElementById('foto').click());
    zone.addEventListener('keydown', e => { if (['Enter',' '].includes(e.key)) { e.preventDefault(); document.getElementById('foto').click(); } });
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('is-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('is-over'));
    zone.addEventListener('drop', e => { e.preventDefault(); zone.classList.remove('is-over'); this.tambahFoto([...e.dataTransfer.files]); });
    document.getElementById('batal').addEventListener('click', () => {
      if (!this.berubah || confirm('Ada perubahan yang belum disimpan. Batalkan perubahan?')) { this.berubah = false; location.href = '/listing-saya'; }
    });
    window.addEventListener('beforeunload', e => { if (this.berubah) { e.preventDefault(); e.returnValue = ''; } });
  }
  error(id, teks) {
    const el = document.getElementById(`error-${id}`); el.textContent = teks; el.hidden = !teks;
    const field = document.getElementById(id); field.classList.toggle('is-error', !!teks); field.setAttribute('aria-invalid', String(!!teks));
  }
  tambahFoto(files) {
    if (this.sibuk || !files.length) return;
    if (this.foto.length + files.length > 5) { this.error('foto','Maksimum 5 foto per listing.'); return; }
    if (files.some(f => !['image/jpeg','image/png'].includes(f.type) || f.size <= 0 || f.size > 5*1024*1024)) { this.error('foto','Gunakan JPG/PNG, maksimum 5 MB per foto.'); return; }
    this.error('foto','');
    this.foto.push(...files.map(f => ({ file:f, key:crypto.randomUUID(), url:URL.createObjectURL(f) })));
    this.berubah = true; this.renderFoto(); this.preview();
  }
  pindah(dari, ke) {
    if (this.sibuk || ke < 0 || ke >= this.foto.length) return;
    this.foto.splice(ke, 0, this.foto.splice(dari,1)[0]); this.berubah = true; this.renderFoto(); this.preview();
  }
  renderFoto() {
    const E = PenjualUI.el, list = document.getElementById('daftar-foto'); list.replaceChildren();
    this.foto.forEach((f,i) => {
      const box = E('div','foto-item'); box.draggable = true;
      box.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain',String(i)); this.dragFoto = i; });
      box.addEventListener('dragover', e => e.preventDefault());
      box.addEventListener('drop', e => { e.preventDefault(); if (this.dragFoto !== undefined) this.pindah(this.dragFoto,i); this.dragFoto = undefined; });
      box.addEventListener('dragend', () => { this.dragFoto = undefined; });
      const img = E('img'); img.src = f.url; img.alt = `Foto ${i+1}`; box.append(img);
      if (i === 0) box.append(E('span','badge badge--baru tag','Utama'));
      const hapus = E('button','foto-hapus','×'); hapus.type = 'button'; hapus.setAttribute('aria-label',`Hapus foto ${i+1}`);
      hapus.addEventListener('click', () => { if (this.sibuk) return; if (f.file) URL.revokeObjectURL(f.url); this.foto.splice(i,1); this.berubah = true; this.renderFoto(); this.preview(); });
      const actions = E('div','foto-urut');
      for (const [delta,label] of [[-1,'←'],[1,'→']]) {
        const btn = E('button','',label); btn.type = 'button'; btn.disabled = i+delta < 0 || i+delta >= this.foto.length; btn.setAttribute('aria-label',`Geser foto ${i+1} ke ${delta < 0 ? 'kiri' : 'kanan'}`); btn.addEventListener('click', () => this.pindah(i,i+delta)); actions.append(btn);
      }
      box.append(hapus,actions); list.append(box);
    });
    for (let i=this.foto.length; i<5; i++) {
      const add = E('button','foto-item foto-tambah','+'); add.type='button'; add.setAttribute('aria-label','Tambah foto'); add.addEventListener('click',() => document.getElementById('foto').click()); list.append(add);
    }
  }
  preview() {
    const val = id => document.getElementById(id).value;
    const selected = id => { const el = document.getElementById(id); return el.value ? el.selectedOptions[0].textContent : ''; };
    document.getElementById('hitung-judul').textContent = `${val('judul').length} / 80 karakter`;
    document.getElementById('hitung-deskripsi').textContent = `${val('deskripsiKondisi').length} / 1000 karakter`;
    document.getElementById('pratinjau').replaceChildren(KartuProduk.buat({ judul:val('judul'), harga:val('harga'), namaKategori:selected('idKategori'), namaLokasi:selected('idLokasi'), fotoUtama:this.foto[0]?.url }, { preview:true }));
  }
  validasi() {
    const errors = {
      judul: !document.getElementById('judul').value.trim() ? 'Judul barang wajib diisi.' : '',
      harga: !document.getElementById('harga').value || !document.getElementById('harga').checkValidity() ? 'Isi harga positif, maksimum 9.999.999.999,99.' : '',
      idKategori: !document.getElementById('idKategori').value ? 'Kategori wajib dipilih.' : '',
      idLokasi: !document.getElementById('idLokasi').value ? 'Lokasi titik temu COD wajib dipilih.' : '',
      foto: !this.foto.length ? 'Minimal satu foto wajib ditambahkan.' : '',
    };
    for (const [id,teks] of Object.entries(errors)) this.error(id,teks);
    const first = Object.keys(errors).find(k => errors[k]);
    if (first) (document.getElementById(first === 'foto' ? 'dropzone' : first)).focus();
    return !first;
  }
  async simpan() {
    if (this.sibuk || !this.validasi()) return;
    this.sibuk = true; document.getElementById('isian-listing').disabled = true;
    document.getElementById('pesan-halaman').hidden = true;
    const body = new FormData();
    for (const k of ['judul','harga','idKategori','idLokasi','deskripsiKondisi']) body.append(k,document.getElementById(k).value);
    let index=0;
    const urutan = this.foto.map(f => { if (!f.file) return f.key; body.append('foto',f.file); return `baru:${index++}`; });
    body.append('urutanFoto', JSON.stringify(urutan));
    body.append('fotoDihapus', JSON.stringify(this.fotoAwal.filter(p => !this.foto.some(f => f.key === p))));
    if (this.waktuUbah) body.append('waktuUbah',this.waktuUbah);
    try {
      const hasil = await PenjualUI.kirim(this.id ? 'PUT' : 'POST', this.id ? `/api/barang/${encodeURIComponent(this.id)}` : '/api/barang', body);
      this.berubah = false;
      sessionStorage.setItem('listing_toast',this.id ? 'Perubahan listing berhasil disimpan' : 'Listing berhasil dibuat');
      location.href = `/detail-listing?id=${encodeURIComponent(hasil.idBarang)}`;
    } catch(error) { PenjualUI.pesan(error.message); }
    finally { this.sibuk = false; document.getElementById('isian-listing').disabled = false; }
  }
}
document.addEventListener('DOMContentLoaded', () => new FormulirBarang().mulai());
