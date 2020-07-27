import { Router } from 'express';

const router = Router();

router.get('/order', (req, res) => {
  return res.send('Listagem de pedidos');
});

module.exports = router;
