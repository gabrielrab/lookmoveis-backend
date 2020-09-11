import repository from '../factories/Repository';
import { Users } from '../models';

module.exports = {
  async list(req, res) {
    const data = await repository(Users).list(req.query);
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(Users).getById(req.params.id);
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(Users).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(Users).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(Users).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
