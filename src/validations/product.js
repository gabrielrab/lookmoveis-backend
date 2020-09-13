import { check } from 'express-validator';

module.exports = {
  store: [
    check('name').exists().isString(),
    check('isAvailable').exists().isBoolean(),
    check('descripion').exists().isString(),
    check('weigth').exists().isDecimal(),
    check('width').exists().isDecimal(),
    check('heigth').exists().isDecimal(),
    check('length').exists().isDecimal(),
    check('price').exists().isDecimal(),
    check('stock').exists().isBoolean(),
  ],
};
