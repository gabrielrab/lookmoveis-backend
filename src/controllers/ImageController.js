import path from 'path';
import fs from 'fs';
import filetype from 'file-type';
import transformToBuffer from '../utils/transformBase64ToBuffer';
import repository from '../factories/Repository';
import { Images as Image } from '../models';

module.exports = {
  async list(req, res) {
    const data = await repository(Image).list(req.query);
    return res.send(data);
  },

  async store(req, res) {
    const files = req.files.map((file) => file.filename);
    const uploadedImages = await Promise.all(
      files.map(async (file) =>
        repository(Image).store({
          url: `${process.env.API_HOST}/static/${file}`,
          type: req.body.type,
          objectId: req.body.objectId,
        }),
      ),
    );
    return res.send(uploadedImages);
  },

  async uploadBase64(req, res, next) {
    try {
      const { type: imageType, objectId, image } = req.body || {};

      const encoded = await transformToBuffer(image);
      const fileType = await filetype.fromBuffer(encoded);
      const fileName = `${Date.now()}.${
        (filetype && fileType.ext) || 'png'
      }`;

      fs.writeFile(
        path.resolve(__dirname, `../uploads/${fileName}`),
        encoded,
        (err, data) => {
          if (err) throw err;
          return data;
        },
      );

      const imageData = await repository(Image).store({
        url: `${process.env.API_HOST}/static/${fileName}`,
        type: imageType,
        objectId,
      });

      return res.status(200).send(imageData);
    } catch (error) {
      return next(error);
    }
  },

  async destroy(req, res) {
    await repository(Image).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
