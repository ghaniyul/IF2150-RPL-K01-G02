const request = require('supertest');
const app = require('../../app');
const C = require('../../controllers/BarangController');
const Otorisasi = require('../../pendukung/Otorisasi');
const id = '11111111-1111-4111-8111-111111111111';
afterEach(() => jest.restoreAllMocks());
function sesi() { jest.spyOn(Otorisasi,'verifikasiToken').mockResolvedValue({getIdAkun:()=>id}); }
test('endpoint listing menolak permintaan tanpa sesi',async () => {
  expect((await request(app).get('/api/barang/saya')).status).toBe(401);
  expect((await request(app).post('/api/barang')).status).toBe(401);
});
test('UUID tidak valid menghasilkan 400, bukan galat SQL',async () => {
  expect((await request(app).get('/api/barang/bukan-uuid/detail')).status).toBe(400);
});
test('Multer menolak ukuran lebih dari 5 MB dengan JSON 400',async () => {
  sesi();
  const hasil = await request(app).post('/api/barang').set('Authorization','Bearer valid')
    .attach('foto',Buffer.alloc(5242881),{filename:'besar.png',contentType:'image/png'});
  expect(hasil.status).toBe(400); expect(hasil.body.pesan).toMatch(/5 MB/);
});
test('Multer menolak enam foto',async () => {
  sesi(); let req = request(app).post('/api/barang').set('Authorization','Bearer valid');
  for(let i=0;i<6;i++) req = req.attach('foto',Buffer.alloc(10),{filename:'a.png',contentType:'image/png'});
  expect((await req).status).toBe(400);
});
test('router meneruskan kesalahan kepemilikan sebagai 403',async () => {
  sesi(); jest.spyOn(C,'deleteBarang').mockRejectedValue(Object.assign(new Error('Bukan pemilik'),{status:403}));
  expect((await request(app).delete(`/api/barang/${id}`).set('Authorization','Bearer valid')).status).toBe(403);
});
test('buat listing menghasilkan 201 dan identitas berasal dari token',async () => {
  sesi(); const buat = jest.spyOn(C,'buatBarang').mockResolvedValue({idBarang:id});
  const hasil = await request(app).post('/api/barang').set('Authorization','Bearer valid').field('judul','Jas');
  expect(hasil.status).toBe(201); expect(hasil.body.data.idBarang).toBe(id);
  expect(buat.mock.calls[0][0]).toBe('valid');
});
