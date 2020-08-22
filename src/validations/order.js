import { check } from 'express-validator';

module.exports = { store: [check('email').isEmail()] };
