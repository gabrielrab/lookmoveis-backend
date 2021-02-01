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
    check('categoryId').exists().isDecimal(),
  ],
  update: [
    check('name').optional().isString(),
    check('isAvailable').optional().isBoolean(),
    check('description').optional().isString(),
    check('weight').optional().isDecimal(),
    check('width').optional().isDecimal(),
    check('heigth').optional().isDecimal(),
    check('length').optional().isDecimal(),
    check('price').optional().isDecimal(),
    check('stock').optional().isBoolean(),
    check('categoryId').optional().isDecimal(),
  ],
};
