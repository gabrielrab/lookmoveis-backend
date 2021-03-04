import { Router } from 'express';
import { wrap, validator, auth } from '../middlewares';
import { client as validation } from '../validations';
import { ClientController } from '../controllers';

const router = Router();

router.get('/clients', wrap(ClientController.list));
router.get('/clients/:id', wrap(ClientController.getById));
router.post(
  '/clients',

  validator(validation.store),
  wrap(ClientController.store),
);
router.put(
  '/clients/:id',

  validator(validation.update),
  wrap(ClientController.update),
);
router.delete('/clients/:id', wrap(ClientController.destroy));

module.exports = router;
