import { Router } from 'express';

const router = Router();

import OrderController from '../controllers/OrderController';

router.post('/order', OrderController.store);

module.exports = router;
