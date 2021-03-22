import { check } from 'express-validator';
import { validation as msg } from '../utils/messages';

module.exports = {
  store: [
    check('name').exists().isString(),
    check('addressId').exists().isInt(),
    check('invoiceType')
      .exists()
      .matches(/card|banck-split/)
      .withMessage(msg.isNotInvoiceType),
    check('paymentTerms')
      .isInt({ min: 1, max: 5 })
      .if((value, { req }) => req.body.invoiceType === 'card')
      .withMessage(msg.isNotPaymentTerms),
    check('clientId').exists().isInt(),
    check('role').optional().isInt(),
    check('note').optional().isString(),
    check('products').exists().isArray(),
  ],
};
