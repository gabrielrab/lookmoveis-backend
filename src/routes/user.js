import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { user as validation } from '../validations';
import { UserController } from '../controllers';

const router = Router();

router.get('/user', auth, wrap(UserController.list));
router.get('/user/:id', auth, wrap(UserController.getById));
router.post(
  '/user',
  auth,
  validator(validation.store),
  wrap(UserController.store),
);
router.put(
  '/user/:id',
  auth,
  validator(validation.update),
  wrap(UserController.update),
);
router.delete('/user/:id', auth, wrap(UserController.destroy));

module.exports = router;
