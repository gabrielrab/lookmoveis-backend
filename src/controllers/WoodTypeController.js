import repository from '../factories/Repository';
import { WoodTypes } from '../models';

module.exports = {
  async list(req, res) {
    const data = await repository(WoodTypes).list(req.query);
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(WoodTypes).getById(req.params.id);
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(WoodTypes).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(WoodTypes).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(WoodTypes).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
