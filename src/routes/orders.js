import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { order as validation } from '../validations';
import { ClientController } from '../controllers';

const router = Router();

router.post(
  '/order',
  validator(validation.store),
  wrap(ClientController.store),
);

module.exports = router;
