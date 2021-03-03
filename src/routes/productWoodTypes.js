import { Router } from 'express';
import { wrap, auth } from '../middlewares';
import { ProductWoodTypeController } from '../controllers';

const router = Router();

router.get(
  '/product-wood-types',
  auth,
  wrap(ProductWoodTypeController.list),
);
router.post(
  '/products/:id/wood-type/:woodTypeId',
  auth,
  wrap(ProductWoodTypeController.store),
);
router.delete(
  '/products/:id/wood-type/:woodTypeId',
  auth,
  wrap(ProductWoodTypeController.destroy),
);

module.exports = router;
