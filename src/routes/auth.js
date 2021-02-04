import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { AuthController } from '../controllers';

const router = Router();

router.post('/auth', validator(), wrap(AuthController.auth));

module.exports = router;
