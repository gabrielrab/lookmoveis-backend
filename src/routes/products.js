import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { product as validation } from '../validations';
import { ProductController } from '../controllers';

const router = Router();

router.get('/products', wrap(ProductController.list));
router.get('/products/:id', wrap(ProductController.getById));
router.post(
  '/products',
  validator(validation.store),
  wrap(ProductController.store),
);
router.put(
  '/products/:id',
  validator(validation.update),
  wrap(ProductController.update),
);
router.delete('/products/:id', wrap(ProductController.destroy));

module.exports = router;
