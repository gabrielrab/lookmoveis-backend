import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { category as validation } from '../validations';
import { CategoryController } from '../controllers';

const router = Router();

router.get('/categories', wrap(CategoryController.list));
router.get('/categories/:id', wrap(CategoryController.getById));
router.post(
  '/categories',
  validator(validation.store),
  wrap(CategoryController.store),
);
router.put(
  '/categories/:id',
  validator(validation.update),
  wrap(CategoryController.update),
);
router.delete('/categories/:id', wrap(CategoryController.destroy));

module.exports = router;
