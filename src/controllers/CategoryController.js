import repository from '../factories/Repository';
import { Categories } from '../models';

const ListingQuery = {
  associations: [
    {
      association: 'thumb',
      where: { type: 'category' },
      required: false,
    },
  ],
};

module.exports = {
  async list(req, res) {
    const data = await repository(Categories, ListingQuery).list(
      req.query,
    );
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(Categories, ListingQuery).getById(
      req.params.id,
    );
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(Categories).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(Categories).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(Categories).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
