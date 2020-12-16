import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { order as validation } from '../validations';
import { OrderController } from '../controllers';

const router = Router();

router.get('/order', wrap(OrderController.list));
router.get('/order/:id', wrap(OrderController.getById));
router.post(
  '/order',
  validator(validation.store),
  wrap(OrderController.store),
);
router.delete('/order', wrap(OrderController.destroy));

module.exports = router;
