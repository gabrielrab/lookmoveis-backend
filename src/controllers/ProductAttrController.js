import repository from '../factories/Repository';
import { ProductsAttrs } from '../models';

module.exports = {
  async list(req, res) {
    const data = await repository(ProductsAttrs).list(req.query);
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(ProductsAttrs).getById(
      req.params.id,
    );
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(ProductsAttrs).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(ProductsAttrs).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(ProductsAttrs).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
