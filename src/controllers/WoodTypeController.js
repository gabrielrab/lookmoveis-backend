import repository from '../factories/Repository';
import { WoodTypes } from '../models';

const ListingQuery = {
  associations: [
    {
      association: 'thumb',
      where: { type: 'wood-type' },
      required: false,
    },
  ],
};

module.exports = {
  async list(req, res) {
    const data = await repository(WoodTypes, ListingQuery).list(
      req.query,
    );
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(WoodTypes, ListingQuery).getById(
      req.params.id,
    );
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
