import { check } from 'express-validator';
import { validation as msg } from '../utils/messages';

module.exports = {
  store: [check('email').isEmail().withMessage(msg.isNotEmail)],
};
