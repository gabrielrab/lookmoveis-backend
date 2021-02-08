import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { category as validation } from '../validations';
import { CategoryController } from '../controllers';

const router = Router();

router.get('/categories', wrap(CategoryController.list));
router.get('/categories/:id', wrap(CategoryController.getById));
router.post(
  '/categories',
  auth,
  validator(validation.store),
  wrap(CategoryController.store),
);
router.put(
  '/categories/:id',
  auth,
  validator(validation.update),
  wrap(CategoryController.update),
);
router.delete(
  '/categories/:id',
  auth,
  wrap(CategoryController.destroy),
);

module.exports = router;
