import repository from '../factories/Repository';
import { Products } from '../models';

const ListingQuery = {
  associations: [{ association: 'attributes' }],
};

module.exports = {
  async list(req, res) {
    const data = await repository(Products, ListingQuery).list(
      req.query,
    );
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(Products, ListingQuery).getById(
      req.params.id,
    );
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(Products).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(Products).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(Products).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
