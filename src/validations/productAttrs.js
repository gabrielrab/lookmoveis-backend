import { check } from 'express-validator';

module.exports = {
  store: [
    check('name').exists().isString(),
    check('value').exists().isString(),
    check('productId').exists().isInt(),
  ],
};
