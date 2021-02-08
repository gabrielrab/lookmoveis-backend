import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { productAttrs as validation } from '../validations';
import { ProductAttrController } from '../controllers';

const router = Router();

router.get('/products-attrs', wrap(ProductAttrController.list));
router.get(
  '/products-attrs/:id',
  wrap(ProductAttrController.getById),
);
router.post(
  '/products-attrs',
  auth,
  validator(validation.store),
  wrap(ProductAttrController.store),
);
router.put(
  '/products-attrs/:id',
  auth,
  wrap(ProductAttrController.update),
);
router.delete(
  '/products-attrs/:id',
  auth,
  wrap(ProductAttrController.destroy),
);

module.exports = router;
