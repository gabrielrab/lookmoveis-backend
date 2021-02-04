import { check } from 'express-validator';

module.exports = {
  auth: [
    check('email').exists().isString().isEmail(),
    check('password').exists().isString(),
  ],
};
