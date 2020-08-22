import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { order as validation } from '../validations';
import OrderController from '../controllers/OrderController';

const router = Router();

router.post(
  '/order',
  validator(validation.store),
  wrap(OrderController.store),
);

module.exports = router;
