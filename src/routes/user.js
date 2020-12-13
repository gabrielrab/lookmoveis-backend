import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { user as validation } from '../validations';
import { UserController } from '../controllers';

const router = Router();

router.get('/user', wrap(UserController.list));
router.get('/user/:id', wrap(UserController.getById));
router.post(
  '/user',
  validator(validation.store),
  wrap(UserController.store),
);
router.put(
  '/user/:id',
  validator(validation.update),
  wrap(UserController.update),
);
router.delete('/user/:id', wrap(UserController.destroy));

module.exports = router;
