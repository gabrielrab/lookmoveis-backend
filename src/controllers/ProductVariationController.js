import repository from '../factories/Repository';
import { ProductVariations } from '../models';

module.exports = {
  async list(req, res) {
    const data = await repository(ProductVariations).list(req.query);
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(ProductVariations).getById(
      req.params.id,
    );
    return res.send(data);
  },

  async store(req, res) {
    console.log('[chamou o controller]', req.body);
    const data = await repository(ProductVariations).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(ProductVariations).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(ProductVariations).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
