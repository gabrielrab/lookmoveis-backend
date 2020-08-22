import { Router } from 'express';
import wrap from '../middleware/wrap';
import OrderController from '../controllers/OrderController';

const router = Router();

router.post('/order', wrap(OrderController.store));

module.exports = router;
