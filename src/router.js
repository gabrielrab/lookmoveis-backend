import express from 'express';

const allRoutes = require('./routes/index');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Farmavida API');
});

Object.keys(allRoutes)
  .filter((i) => i !== 'index')
  .forEach((route) => router.use(allRoutes[route]));

module.exports = router;
