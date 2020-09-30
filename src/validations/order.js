import { check } from 'express-validator';
import { validation as msg } from '../utils/messages';

module.exports = {
  store: [
    check('addressId').exists().isInt(),
    check('invoiceType')
      .exists()
      .matches(/card|banck-split/)
      .withMessage(msg.isNotInvoiceType),
    check('paymentTerms')
      .isInt({ min: 1, max: 5 })
      .if((value, { req }) => req.body.invoiceType === 'card')
      .withMessage(msg.isNotPaymentTerms),
  ],
};
