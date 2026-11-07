// Kerangka I-07/I-08: tidak mengubah shell mockup maupun UI modul lain.
const PenjualUI = {
  el(tag, kelas, teks) {
    const node = document.createElement(tag);
    if (kelas) node.className = kelas;
    if (teks !== undefined) node.textContent = teks;
    return node;
  },
  rupiah(nilai) { return new Intl.NumberFormat('id-ID', { style:'currency', currency:'IDR', minimumFractionDigits:0, maximumFractionDigits:2 }).format(Number(nilai) || 0); },
  pesan(teks, sukses = false) {
    const el = document.getElementById('pesan-halaman');
    el.textContent = teks; el.className = `infobox ${sukses ? 'infobox--netral' : 'infobox--galat'}`; el.hidden = false;
    el.scrollIntoView({ block:'nearest' });
  },
  async kirim(method, path, body) {
    const hasil = await Api.kirim(method, path, body);
    if (!hasil.sukses) {
      if (hasil.status === 401) {
        Api.hapusSesi();
        throw new Error('Sesi berakhir. Masuk kembali melalui tombol Akun; isian belum disimpan.');
      }
      throw new Error(hasil.pesan || 'Permintaan gagal.');
    }
    return hasil.data;
  },
  toast(teks) {
    const el = document.getElementById('toast');
    el.textContent = teks; el.hidden = false;
    setTimeout(() => { el.hidden = true; }, 4500);
  },
  kerangka() {
    document.querySelector('[data-topbar]').innerHTML = `
      <header class="topbar"><a class="brand" href="/listing-saya"><div class="brand__mark">IT</div><div><div class="brand__name">ITBELI</div><div class="brand__tag">Marketplace preloved sivitas ITB</div></div></a>
      <div class="searchbar" aria-disabled="true" title="Pencarian katalog belum tersedia"><span class="ic ic--search"></span><span>Cari jas praktikum, buku, kalkulator…</span></div>
      <div class="topbar__right"><span class="iconbtn" title="Notifikasi belum tersedia"><span class="ic ic--bell"></span></span><span class="iconbtn" title="Percakapan belum tersedia"><span class="ic ic--chat"></span></span><a class="btn btn--sekunder btn--sm" href="/masuk">Akun</a><span class="avatar" id="avatar-penjual"></span></div></header>`;
    document.getElementById('avatar-penjual').textContent = (localStorage.getItem(Api.KUNCI_EMAIL) || 'IT').slice(0,2).toUpperCase();
    const rail = document.querySelector('[data-rail-penjual]');
    if (rail) {
      rail.className = 'rail';
      rail.innerHTML = `<a href="/formulir-listing" class="btn btn--primer btn--blok">+ Jual Barang</a><div class="rail__group"><div class="rail__title">Akun Saya</div><nav class="navlist" aria-label="Akun Saya"><span class="nav-disabled" title="Belum tersedia"><span class="dot"></span>Katalog</span><a class="is-active" href="/listing-saya"><span class="dot"></span>Listing Saya</a><span class="nav-disabled" title="Belum tersedia"><span class="dot"></span>Percakapan</span><span class="nav-disabled" title="Belum tersedia"><span class="dot"></span>Notifikasi</span><a href="/masuk"><span class="dot"></span>Akun / Keluar</a></nav></div>`;
    }
  },
};
document.addEventListener('DOMContentLoaded', () => PenjualUI.kerangka());
