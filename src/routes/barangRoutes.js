const express = require('express');
const multer = require('multer');
const Controller = require('../controllers/BarangController');
const Otorisasi = require('../pendukung/Otorisasi');
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024, files: 5, fields: 12, fieldSize: 16384 } }).array('foto', 5);
const ok = (res, data, status = 200) => res.status(status).json({ sukses: true, data });
router.param('id', (req, res, next, id) => {
  if (!/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(id)) return res.status(400).json({ sukses: false, pesan: 'ID listing tidak valid.' });
  next();
});
// Endpoint detail pendukung agar hasil simpan I-07 dapat menuju I-06.
router.get('/:id/detail', async (req, res) => ok(res, await Controller.getBarang(req.params.id, Otorisasi.ambilToken(req), 'detail')));
router.use(Otorisasi.wajibLogin);
router.get('/formulir', async (req, res) => ok(res, await Controller.getDataFormulir()));
router.get('/saya', async (req, res) => ok(res, await Controller.getListingSaya(req.token)));
router.get('/:id', async (req, res) => ok(res, await Controller.getBarang(req.params.id, req.token)));
router.get('/:id/konfirmasi', async (req, res) => {
  const barang = req.query.aksi === 'hapus'
    ? await Controller.siapkanPenghapusan(req.token, req.params.id)
    : await Controller.siapkanPerubahanStatus(req.token, req.params.id, req.query.statusAsal);
  ok(res, barang);
});
router.post('/', upload, async (req, res) => ok(res, await Controller.buatBarang(req.token, req.body, req.files || []), 201));
router.put('/:id', upload, async (req, res) => ok(res, await Controller.updateBarang(req.token, req.params.id, req.body, req.files || [])));
router.delete('/:id', async (req, res) => ok(res, await Controller.deleteBarang(req.token, req.params.id)));
router.patch('/:id/status', async (req, res) => ok(res, await Controller.ubahStatusBarang(req.token, req.params.id, req.body?.statusAsal, req.body?.statusTujuan)));
// Multer gagal SEBELUM handler; tangani di middleware galat router, bukan try/catch handler.
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) return res.status(400).json({ sukses: false, pesan: err.code === 'LIMIT_FILE_SIZE' ? 'Ukuran foto maksimum 5 MB.' : 'Unggahan tidak valid; maksimum 5 foto dengan nama field foto.' });
  if (err.status) return res.status(err.status).json({ sukses: false, pesan: err.message });
  next(err);
});
module.exports = router;
