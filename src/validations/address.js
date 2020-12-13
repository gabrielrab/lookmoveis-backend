/* eslint-disable no-useless-escape */
import { check } from 'express-validator';
import { validation as msg } from '../utils/messages';

module.exports = {
  store: [
    check('name').exists().isString(),
    check('streetName').exists().isString(),
    check('streetNumber').exists().isInt(),
    check('streetAdd').optional().isString(),
    check('neighborhood').exists().isString(),
    check('zipcode')
      .exists()
      .matches(/\d{5}\-\d{3}/)
      .withMessage(msg.invalidZipCode),
    check('city').exists().isString(),
    check('state').exists().isString(),
    check('clientId').exists().isInt(),
  ],
  update: [
    check('name').optional().isString(),
    check('streetName').optional().isString(),
    check('streetNumber').optional().isInt(),
    check('streetAdd').optional().isString(),
    check('neighborhood').exists().isString(),
    check('zipcode')
      .optional()
      .matches(/\d{5}\-\d{3}/)
      .withMessage(msg.invalidZipCode),
    check('city').optional().isString(),
    check('state').optional().isString(),
    check('clientId').optional().isInt(),
  ],
};
