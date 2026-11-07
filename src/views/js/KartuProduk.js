// C06: satu renderer untuk listing saya dan pratinjau formulir. Data selalu textContent.
const KartuProduk = {
  buat(b, { preview = false, aksi } = {}) {
    const E = PenjualUI.el;
    const card = E('article', `card${b.status === 'Terjual' ? ' is-terjual' : ''}`);
    const wrap = E(preview ? 'div' : 'a', 'card-link');
    if (!preview) wrap.href = `/detail-listing?id=${encodeURIComponent(b.idBarang)}`;
    const media = E('div','card__media');
    if (b.fotoUtama) { const img = E('img'); img.src = b.fotoUtama; img.alt = b.judul || 'Pratinjau foto barang'; media.append(img); }
    else media.append(E('div','ph ph--jas'));
    if (b.status === 'Terjual') media.append(E('span','badge badge--terjual card__badge','Terjual'));
    const body = E('div','card__body');
    body.append(E('div','card__price',PenjualUI.rupiah(b.harga)), E('div','card__title', b.judul || 'Judul barang'), E('div','card__meta',`${b.namaLokasi || 'Pilih lokasi'} · ${b.namaKategori || 'Pilih kategori'}`));
    wrap.append(media, body); card.append(wrap);
    if (aksi) {
      const bar = E('div','card__actions');
      for (const [nama, label] of [['ubah','Ubah'], ['status', b.status === 'Terjual' ? 'Batalkan Terjual' : 'Tandai Terjual'], ['hapus','Hapus']]) {
        const btn = E('button',`btn btn--sekunder btn--sm${nama === 'hapus' ? ' btn-danger' : ''}`,label);
        btn.type = 'button';
        btn.setAttribute('aria-label',label); btn.title = label;
        if (nama === 'status') btn.textContent = b.status === 'Terjual' ? 'Batalkan' : 'Terjual';
        btn.addEventListener('click', () => aksi(nama,b)); bar.append(btn);
      }
      card.append(bar);
    }
    return card;
  },
};
