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
router.put('/products', wrap(ProductController.update));
router.put('/products', wrap(ProductController.delete));

module.exports = router;
