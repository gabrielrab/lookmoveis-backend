import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { order as validation } from '../validations';
import { ClientsController } from '../controllers';

const router = Router();

router.post(
  '/order',
  validator(validation.store),
  wrap(ClientsController.store),
);

module.exports = router;
