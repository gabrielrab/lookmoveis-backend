import repository from '../factories/Repository';
import { Clients } from '../models';

const ListingQuery = {
  associations: [{ association: 'addresses' }],
};

module.exports = {
  async list(req, res) {
    const data = await repository(Clients, ListingQuery).list(
      req.query,
    );
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(Clients, ListingQuery).getById(
      req.params.id,
    );
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(Clients).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(Clients).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(Clients).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
