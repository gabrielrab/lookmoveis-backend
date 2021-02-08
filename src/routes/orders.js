import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { order as validation } from '../validations';
import { OrderController } from '../controllers';

const router = Router();

router.get('/order', auth, wrap(OrderController.list));
router.get('/order/:id', auth, wrap(OrderController.getById));
router.post(
  '/order',
  auth,
  validator(validation.store),
  wrap(OrderController.store),
);
router.delete('/order/:id', auth, wrap(OrderController.destroy));

module.exports = router;
