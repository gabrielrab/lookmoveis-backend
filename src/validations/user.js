/* eslint-disable no-useless-escape */
import { check } from 'express-validator';
import { validation as msg } from '../utils/messages';

module.exports = {
  store: [
    check('name').exists().isString(),
    check('email').exists().isEmail().withMessage(msg.isNotEmail),
    check('phoneNumber')
      .exists()
      .matches(/^\([1-9]{2}\)[9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/)
      .withMessage(msg.invalidPhoneNumber),
    check('password').exists().isString(),
    check('role')
      .exists()
      .matches(/superadmin|admin|buyer/),
  ],
  update: [
    check('name').optional().isString(),
    check('email').optional().isEmail().withMessage(msg.isNotEmail),
    check('phoneNumber')
      .optional()
      .matches(/^\([1-9]{2}\)[9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/)
      .withMessage(msg.invalidPhoneNumber),
    check('password').optional().isString(),
    check('role')
      .optional()
      .matches(/superadmin|admin|buyer/),
  ],
};
