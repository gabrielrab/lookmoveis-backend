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
          url: file,
          type: req.body.type,
          objectId: req.body.objectId,
        }),
      ),
    );
    return res.send(uploadedImages);
  },

  async destroy(req, res) {
    await repository(Image).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
