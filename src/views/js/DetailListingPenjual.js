// Detail pendukung I-06 setelah simpan. Tidak menggantikan modul katalog/percakapan.
document.addEventListener('DOMContentLoaded', async () => {
  const id = new URLSearchParams(location.search).get('id');
  try {
    if (!id) throw new Error('ID listing tidak tersedia.');
    const data = await PenjualUI.kirim('GET',`/api/barang/${encodeURIComponent(id)}/detail`);
    const b = data.barang;
    for (const [el,teks] of Object.entries({ 'judul-barang':b.judul, 'harga-barang':PenjualUI.rupiah(b.harga), 'kategori-barang':data.daftarKategori.find(k => k.idKategori === b.idKategori)?.namaKategori || 'Kategori', 'lokasi-barang':data.daftarLokasi.find(l => l.idLokasi === b.idLokasi)?.namaLokasi || 'Lokasi COD', 'deskripsi-barang':b.deskripsiKondisi || 'Tidak ada deskripsi tambahan.', 'nama-penjual':data.identitasPenjual?.namaPenjual || 'Penjual', 'waktu-barang':`Diunggah ${new Date(b.waktuUnggah).toLocaleDateString('id-ID')}`, 'status-barang':b.status })) document.getElementById(el).textContent = teks;
    const main = document.getElementById('foto-utama'); main.alt = b.judul;
    data.daftarFoto.forEach((f,i) => {
      const btn = PenjualUI.el('button'), img = PenjualUI.el('img'); btn.type='button'; btn.setAttribute('aria-label',`Lihat foto ${i+1}`); img.src = f.pathBerkas; img.alt = `Foto ${i+1}`;
      btn.setAttribute('aria-pressed', String(i===0));
      btn.addEventListener('click',() => { main.src = f.pathBerkas; document.querySelectorAll('#galeri button').forEach(b => b.setAttribute('aria-pressed',String(b===btn))); });
      btn.append(img); document.getElementById('galeri').append(btn); if (i===0) main.src = f.pathBerkas;
    });
    const ubah = document.getElementById('ubah-barang'); ubah.href = `/formulir-listing?id=${encodeURIComponent(id)}`;
    ubah.hidden = !Api.getToken() || localStorage.getItem(Api.KUNCI_EMAIL)?.toLowerCase() !== data.identitasPenjual?.emailPenjual?.toLowerCase();
    document.getElementById('detail').hidden = false;
    const pesan = sessionStorage.getItem('listing_toast'); if (pesan) { PenjualUI.toast(pesan); sessionStorage.removeItem('listing_toast'); }
  } catch(error) { PenjualUI.pesan(error.message); }
  finally { document.getElementById('memuat').hidden = true; }
});
