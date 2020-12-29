import { Router } from 'express';
import multer from 'multer';
import {
  wrap,
  validator,
  multer as multerConfigs,
} from '../middlewares';
import { image as validation } from '../validations';
import { ImageController } from '../controllers';

const router = Router();

router.get('/images', wrap(ImageController.list));
router.get('/images/:id', wrap(ImageController.getById));
router.post(
  '/images',
  multer(multerConfigs).array('images', 10),
  validator(validation.store),
  wrap(ImageController.store),
);
router.delete('/images/:id', wrap(ImageController.destroy));

module.exports = router;
