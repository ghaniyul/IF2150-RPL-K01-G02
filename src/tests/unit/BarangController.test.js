const C = require('../../controllers/BarangController');
const Kategori = require('../../models/Kategori');
const Lokasi = require('../../models/LokasiCOD');
const Otorisasi = require('../../pendukung/Otorisasi');
const Akun = require('../../models/Akun');
const Barang = require('../../models/ListingPenjual');
const Foto = require('../../models/FotoBarang');
const Storage = require('../../penyimpanan/PenyimpananBerkas');
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+a3ioAAAAASUVORK5CYII=', 'base64');
const foto = () => ({ buffer:png, mimetype:'image/png', originalname:'foto.png', size:png.length });
const data = () => ({ judul:'Jas Praktikum', harga:'120000', idKategori:'jas-praktikum', idLokasi:'labtek-v', deskripsiKondisi:'Baik' });
afterEach(() => jest.restoreAllMocks());
describe('UC07/09: validasi server', () => {
  beforeEach(() => {
    jest.spyOn(Kategori,'validasiKategori').mockResolvedValue(true);
    jest.spyOn(Lokasi,'validasiLokasi').mockResolvedValue(true);
  });
  test('menerima isian valid dan memangkas whitespace',async () => {
    expect(await C.validasiData({...data(),judul:'  Jas  '})).toMatchObject({judul:'Jas',harga:120000});
  });
  test.each(['', ' ', '0', '-1', 'Infinity', 'NaN', '10000000000', '1.234', '1e3'])('menolak harga %p',async harga => {
    await expect(C.validasiData({...data(),harga})).rejects.toMatchObject({status:400});
  });
  test.each(['', ' '.repeat(3), 'x'.repeat(81)])('menolak judul tidak valid', async judul => {
    await expect(C.validasiData({...data(),judul})).rejects.toMatchObject({status:400});
  });
  test('menolak deskripsi terlalu panjang',async () => {
    await expect(C.validasiData({...data(),deskripsiKondisi:'x'.repeat(1001)})).rejects.toMatchObject({status:400});
  });
  test('menolak kategori dan lokasi di luar daftar',async () => {
    Kategori.validasiKategori.mockResolvedValueOnce(false);
    await expect(C.validasiData(data())).rejects.toMatchObject({status:400});
    Lokasi.validasiLokasi.mockResolvedValueOnce(false);
    await expect(C.validasiData(data())).rejects.toMatchObject({status:400});
  });
  test('menerima satu atau lima foto',() => {
    expect(() => C.validasiFoto([foto()])).not.toThrow();
    expect(() => C.validasiFoto(Array.from({length:5},foto))).not.toThrow();
  });
  test('menolak galeri kosong atau lebih dari lima termasuk foto lama',() => {
    expect(() => C.validasiFoto([])).toThrow();
    expect(() => C.validasiFoto([foto()],Array(5).fill({}))).toThrow();
  });
  test('menolak berkas palsu, MIME berbeda dan foto melebihi 5 MB',() => {
    for (const f of [{...foto(),buffer:Buffer.from('<script>alert(1)</script>')},{...foto(),mimetype:'image/jpeg'},{...foto(),originalname:'evil.html'},{...foto(),size:5242881}]) expect(() => C.validasiFoto([f])).toThrow();
  });
  test('urutan mencampur foto lama dan baru serta menentukan foto utama',() => {
    const lama = {pathBerkas:'/uploads/old.png'}, baru = {pathBerkas:'/uploads/new.png'};
    expect(C.urutkanFoto({urutanFoto:JSON.stringify(['baru:0',lama.pathBerkas])},[lama],[baru])).toEqual([baru,lama]);
  });
  test.each(['bad','{}','["baru:0","baru:0"]','["asing"]','[]'])('menolak urutan rusak %p',urutanFoto => {
    expect(() => C.urutkanFoto({urutanFoto},[],[foto()])).toThrow();
  });
});
describe('UC09–UC12: pemilik, konflik, dan rollback', () => {
  beforeEach(() => {
    jest.spyOn(C,'getIdPenjualDariSesi').mockResolvedValue('pemilik');
    jest.spyOn(Barang,'transaksi').mockImplementation(fn => fn({}));
    jest.spyOn(Barang,'kunci').mockResolvedValue({idPenjual:'pemilik',status:'Tersedia',waktuUbah:new Date('2026-01-01')});
  });
  test('status berubah bersyarat, status stale ditolak',async () => {
    const status = jest.spyOn(Barang,'setStatus').mockResolvedValueOnce(true).mockResolvedValueOnce(false);
    await expect(C.ubahStatusBarang('token','id','Tersedia','Terjual')).resolves.toMatchObject({status:'Terjual'});
    expect(status).toHaveBeenCalledWith('id','pemilik','Tersedia','Terjual',{});
    await expect(C.ubahStatusBarang('token','id','Tersedia','Terjual')).rejects.toMatchObject({status:409});
  });
  test('menolak transisi sembarang',async () => {
    await expect(C.ubahStatusBarang('token','id','Terjual','Terjual')).rejects.toMatchObject({status:400});
  });
  test('pemilik lain tidak dapat hapus atau ubah status',async () => {
    Barang.kunci.mockResolvedValue({idPenjual:'orang-lain',status:'Tersedia'});
    await expect(C.deleteBarang('token','id')).rejects.toMatchObject({status:403});
    await expect(C.ubahStatusBarang('token','id','Tersedia','Terjual')).rejects.toMatchObject({status:403});
  });
  test('update stale ditolak sebelum galeri ditulis',async () => {
    await expect(C.updateBarang('token','id',{...data(),waktuUbah:'2025-01-01'},[])).rejects.toMatchObject({status:409});
  });
  test('tidak boleh menghapus path foto listing lain',async () => {
    jest.spyOn(C,'validasiData').mockResolvedValue(data());
    jest.spyOn(Foto,'getGaleri').mockResolvedValue([{pathBerkas:'/uploads/milik.png'}]);
    await expect(C.updateBarang('token','id',{...data(),fotoDihapus:'["/uploads/asing.png"]'},[])).rejects.toMatchObject({status:400});
  });
  test('gagal menyimpan metadata membersihkan unggahan baru',async () => {
    jest.spyOn(C,'validasiData').mockResolvedValue(data());
    jest.spyOn(C,'simpanFoto').mockResolvedValue([{pathBerkas:'/uploads/new.png'}]);
    jest.spyOn(Barang,'simpan').mockResolvedValue('id');
    jest.spyOn(Barang,'perbaruiGaleri').mockRejectedValue(new Error('Database gagal'));
    const hapus = jest.spyOn(Storage,'hapus').mockResolvedValue(true);
    await expect(C.buatBarang('token',data(),[foto()])).rejects.toThrow('Database gagal');
    expect(hapus).toHaveBeenCalledWith(['/uploads/new.png']);
  });
});
test('sesi aktif milik akun diblokir tetap ditolak',async () => {
  jest.spyOn(Otorisasi,'verifikasiToken').mockResolvedValue({getIdAkun:()=>'pemilik'});
  jest.spyOn(Akun,'cariById').mockResolvedValue({statusAkun:'Diblokir',statusBlokir:true});
  await expect(C.getIdPenjualDariSesi('token')).rejects.toMatchObject({status:403});
});
