import { check } from 'express-validator';

module.exports = {
  store: [
    check('name').exists().isString(),
    check('isAvailable').exists().isBoolean(),
    check('description').exists().isString(),
    check('weight').exists().isDecimal(),
    check('width').exists().isDecimal(),
    check('heigth').exists().isDecimal(),
    check('length').exists().isDecimal(),
    check('price').exists().isDecimal(),
    check('stock').exists().isBoolean(),
  ],
};
