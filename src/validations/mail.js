import { check } from 'express-validator';
import { validation as msg } from '../utils/messages';

module.exports = {
  store: [
    check('name').exists().isString(),
    check('email').exists().isString(),
    check('tel')
      .exists()
      .matches(/^\([1-9]{2}\)[9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/)
      .withMessage(msg.invalidPhoneNumber),
    check('message').exists().isString(),
  ],
};
