import { Users as User } from '../models';

module.exports = {
  async auth(req, res) {
    const user = await User.authenticate(
      req.body.email,
      req.body.password,
    );
    return res.send(user);
  },
};
