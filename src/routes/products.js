import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { product as validation } from '../validations';
import { ProductController } from '../controllers';

const router = Router();

router.get('/products', wrap(ProductController.list));
router.get('/products/:id', wrap(ProductController.getById));
router.post(
  '/products',
  auth,
  validator(validation.store),
  wrap(ProductController.store),
);
router.put(
  '/products/:id',
  auth,
  validator(validation.update),
  wrap(ProductController.update),
);
router.delete('/products/:id', auth, wrap(ProductController.destroy));

module.exports = router;
