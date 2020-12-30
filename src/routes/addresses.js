import { Router } from 'express';
import { wrap, validator } from '../middlewares';
import { address as validation } from '../validations';
import { AddressController } from '../controllers';

const router = Router();

router.get('/address', wrap(AddressController.list));
router.get('/address/:id', wrap(AddressController.getById));
router.post(
  '/address',
  validator(validation.store),
  wrap(AddressController.store),
);
router.put(
  '/address/:id',
  validator(validation.update),
  wrap(AddressController.update),
);
router.delete('/address/:id', wrap(AddressController.destroy));

module.exports = router;
