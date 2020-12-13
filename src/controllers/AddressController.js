import repository from '../factories/Repository';
import { Addresses as Address } from '../models';

const ListingQuery = {
  associations: [{ association: 'client' }],
};

module.exports = {
  async list(req, res) {
    const data = await repository(Address, ListingQuery).list(
      req.query,
    );
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(Address).getById(req.params.id);
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(Address).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(Address).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(Address).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
