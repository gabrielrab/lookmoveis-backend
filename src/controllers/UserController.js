import repository from '../factories/Repository';
import { Users as User } from '../models';

const ListingQuery = {
  associations: [
    {
      association: 'userRole',
    },
  ],
};

module.exports = {
  async list(req, res) {
    const data = await repository(User, ListingQuery).list(req.query);
    return res.send(data);
  },

  async getById(req, res) {
    const data = await repository(User, ListingQuery).getById(
      req.params.id,
    );
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(User).store(req.body);
    return res.send(data);
  },

  async update(req, res) {
    const data = await repository(User).update(
      req.params.id,
      req.body,
    );
    return res.send(data);
  },

  async destroy(req, res) {
    await repository(User).destroy(req.params.id);
    return res.sendStatus(204);
  },
};
