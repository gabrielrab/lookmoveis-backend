import { check } from 'express-validator';

module.exports = {
  store: [check('name').exists().isString()],
  update: [check('name').exists().isString()],
};
