import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { productVariation as validation } from '../validations';
import { ProductVariationController } from '../controllers';

const router = Router();

router.get(
  '/product-variation',
  wrap(ProductVariationController.list),
);
router.get(
  '/product-variation/:id',
  wrap(ProductVariationController.getById),
);
router.post(
  '/product-variation',
  auth,
  validator(validation.store),
  wrap(ProductVariationController.store),
);
router.put(
  '/product-variation/:id',
  auth,
  wrap(ProductVariationController.update),
);
router.delete(
  '/product-variation/:id',
  auth,
  wrap(ProductVariationController.destroy),
);

module.exports = router;
