// C03: UC08–UC12, layar I-08.
class HalamanListingPenjual {
  constructor() { this.daftar = []; this.tab = 'Tersedia'; this.sibuk = false; this.dialog = document.getElementById('konfirmasi'); }
  async mulai() {
    document.querySelectorAll('[data-status]').forEach(btn => {
      btn.addEventListener('click', () => { this.tab = btn.dataset.status; this.render(); });
      btn.addEventListener('keydown', e => { if (['ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); const next = document.querySelector(`[data-status="${btn.dataset.status === 'Tersedia' ? 'Terjual' : 'Tersedia'}"]`); next.click(); next.focus(); } });
    });
    document.getElementById('batal-dialog').addEventListener('click', () => { if (!this.sibuk) this.dialog.close(); });
    this.dialog.addEventListener('cancel', e => { if (this.sibuk) e.preventDefault(); });
    document.getElementById('setuju-dialog').addEventListener('click', () => this.konfirmasi());
    await this.muat();
  }
  async muat() {
    document.getElementById('memuat').hidden = false;
    try {
      this.daftar = await PenjualUI.kirim('GET','/api/barang/saya');
      document.getElementById('pesan-halaman').hidden = true; this.render();
    } catch(error) { PenjualUI.pesan(error.message); }
    finally { document.getElementById('memuat').hidden = true; }
  }
  render() {
    document.querySelectorAll('[data-status]').forEach(btn => {
      const aktif = btn.dataset.status === this.tab;
      btn.textContent = `${btn.dataset.status} (${this.daftar.filter(b => b.status === btn.dataset.status).length})`;
      btn.classList.toggle('is-active',aktif); btn.setAttribute('aria-selected',String(aktif)); btn.tabIndex = aktif ? 0 : -1;
    });
    const items = this.daftar.filter(b => b.status === this.tab), list = document.getElementById('daftar-listing');
    list.setAttribute('aria-labelledby',this.tab === 'Tersedia' ? 'tab-tersedia' : 'tab-terjual');
    list.replaceChildren(...items.map(b => KartuProduk.buat(b,{ aksi:(aksi,barang) => this.aksi(aksi,barang) })));
    document.getElementById('kosong').hidden = items.length > 0;
    document.getElementById('judul-kosong').textContent = this.tab === 'Terjual' ? 'Belum ada barang terjual' : this.daftar.length ? 'Tidak ada listing tersedia' : 'Anda belum punya listing';
    document.getElementById('teks-kosong').textContent = this.tab === 'Terjual' ? 'Barang yang Anda tandai terjual akan muncul di sini.' : 'Mulai jual barang preloved Anda di ITBELI.';
  }
  async aksi(aksi, barang) {
    if (this.sibuk) return;
    if (aksi === 'ubah') { location.href = `/formulir-listing?id=${encodeURIComponent(barang.idBarang)}`; return; }
    this.sibuk = true;
    try {
      const fresh = await PenjualUI.kirim('GET',`/api/barang/${barang.idBarang}/konfirmasi?aksi=${aksi}&statusAsal=${encodeURIComponent(barang.status)}`);
      this.pending = { aksi, barang:fresh };
      const hapus = aksi === 'hapus', sold = fresh.status === 'Tersedia';
      document.getElementById('judul-dialog').textContent = hapus ? `Hapus “${fresh.judul}”?` : `${sold ? 'Tandai terjual' : 'Batalkan penandaan terjual'} “${fresh.judul}”?`;
      document.getElementById('teks-dialog').textContent = hapus ? 'Listing beserta seluruh fotonya akan dihapus permanen dan tidak dapat dikembalikan.' : sold ? 'Status listing akan berubah menjadi Terjual. Anda dapat membatalkan penandaan ini nanti.' : 'Status listing akan kembali menjadi Tersedia.';
      document.getElementById('error-dialog').hidden = true;
      const btn = document.getElementById('setuju-dialog'); btn.textContent = hapus ? 'Hapus Listing' : sold ? 'Tandai Terjual' : 'Batalkan Terjual'; btn.className = `btn ${hapus ? 'btn--merusak' : 'btn--primer'}`;
      this.dialog.showModal(); document.getElementById('batal-dialog').focus();
    } catch(error) { PenjualUI.pesan(error.message); }
    finally { this.sibuk = false; }
  }
  async konfirmasi() {
    if (this.sibuk || !this.pending) return;
    this.sibuk = true;
    const btn = document.getElementById('setuju-dialog'), batal = document.getElementById('batal-dialog'); btn.disabled = true; batal.disabled = true;
    const { aksi, barang } = this.pending;
    try {
      if (aksi === 'hapus') await PenjualUI.kirim('DELETE',`/api/barang/${barang.idBarang}`);
      else await PenjualUI.kirim('PATCH',`/api/barang/${barang.idBarang}/status`, { statusAsal:barang.status, statusTujuan:barang.status === 'Tersedia' ? 'Terjual' : 'Tersedia' });
      this.dialog.close(); this.pending = null;
      PenjualUI.toast(aksi === 'hapus' ? 'Listing berhasil dihapus' : barang.status === 'Tersedia' ? 'Listing ditandai terjual' : 'Listing kembali tersedia');
      await this.muat();
    } catch(error) { const el = document.getElementById('error-dialog'); el.textContent = error.message; el.hidden = false; }
    finally { this.sibuk = false; btn.disabled = false; batal.disabled = false; }
  }
}
document.addEventListener('DOMContentLoaded', () => new HalamanListingPenjual().mulai());
