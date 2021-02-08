import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { address as validation } from '../validations';
import { AddressController } from '../controllers';

const router = Router();

router.get('/address', auth, wrap(AddressController.list));
router.get('/address/:id', auth, wrap(AddressController.getById));
router.post(
  '/address',
  auth,
  validator(validation.store),
  wrap(AddressController.store),
);
router.put(
  '/address/:id',
  auth,
  validator(validation.update),
  wrap(AddressController.update),
);
router.delete('/address/:id', auth, wrap(AddressController.destroy));

module.exports = router;
