import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { auth as validation } from '../validations';
import { AuthController } from '../controllers';

const router = Router();

router.post(
  '/auth',
  validator(validation.auth),
  wrap(AuthController.auth),
);

module.exports = router;
