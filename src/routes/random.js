import { Router } from 'express';

const router = Router();

router.get('/random', (req, res) => {
  return res.send({
    random: Math.random(),
    password: '123',
  });
});

module.exports = router;
