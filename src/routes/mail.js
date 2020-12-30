import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { mail as validation } from '../validations';
import { MailController } from '../controllers';

const router = Router();

router.post(
  '/mail',
  validator(validation.store),
  wrap(MailController.sendEmail),
);
module.exports = router;
