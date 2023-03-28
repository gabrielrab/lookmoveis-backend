import { Router } from 'express';

const router = Router();

router.get('/random', (req, res) => {
  return res.send({
    random: Math.random(),
  });
});

module.exports = router;
