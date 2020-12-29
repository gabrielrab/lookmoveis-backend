import { check } from 'express-validator';
import { validation as msg } from '../utils/messages';

module.exports = {
  store: [
    check('type')
      .exists()
      .matches(/product|product-decorated|wood-type|category/)
      .withMessage(msg.isNotImageType),
  ],
};
