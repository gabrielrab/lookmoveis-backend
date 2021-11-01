import { check } from 'express-validator';

module.exports = {
  store: [
    check('name').exists().isString(),
    check('price').exists().isString(),
    check('description').exists().isString(),
    check('productId').exists().isInt(),
  ],
};
