import { check } from 'express-validator';

module.exports = {
  store: [check('productId').exists().isString()],
  update: [check('productId').exists().isString()],
};
