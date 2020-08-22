import { Router } from 'express';

import OrderController from '../controllers/OrderController';

const router = Router();

router.post('/order', OrderController.store);

module.exports = router;
