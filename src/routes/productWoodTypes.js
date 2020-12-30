import { Router } from 'express';
import { wrap } from '../middlewares';
import { ProductWoodTypeController } from '../controllers';

const router = Router();

router.get(
  '/product-wood-types',
  wrap(ProductWoodTypeController.list),
);
router.post(
  '/products/:id/wood-type/:woodTypeId',
  wrap(ProductWoodTypeController.store),
);
router.delete(
  '/products/:id/wood-type/:woodTypeId',
  wrap(ProductWoodTypeController.destroy),
);

module.exports = router;
