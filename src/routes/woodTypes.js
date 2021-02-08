import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { woodTypes as validation } from '../validations';
import { WoodTypeController } from '../controllers';

const router = Router();

router.get('/wood-type', wrap(WoodTypeController.list));
router.get('/wood-type/:id', wrap(WoodTypeController.getById));
router.post(
  '/wood-type',
  auth,
  validator(validation.store),
  wrap(WoodTypeController.store),
);
router.put(
  '/wood-type/:id',
  auth,
  validator(validation.update),
  wrap(WoodTypeController.update),
);
router.delete(
  '/wood-type/:id',
  auth,
  wrap(WoodTypeController.destroy),
);

module.exports = router;
