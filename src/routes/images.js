import { Router } from 'express';
import multer from 'multer';
import {
  wrap,
  validator,
  multer as multerConfigs,
  auth,
} from '../middlewares';
import { image as validation } from '../validations';
import { ImageController } from '../controllers';

const router = Router();

router.get('/images', wrap(ImageController.list));
router.get('/images/:id', wrap(ImageController.getById));
router.post(
  '/images',
  auth,
  multer(multerConfigs).array('images', 10),
  validator(validation.store),
  wrap(ImageController.store),
);

router.post('/imagesBase64', wrap(ImageController.uploadBase64));
router.delete('/images/:id', wrap(ImageController.destroy));

module.exports = router;
