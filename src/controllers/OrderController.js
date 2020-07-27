import User from '../models/User';

module.exports = {
  async store(req, res) {
    const user = await User.create({
      name: 'Gabriel',
      email: 'rabelo72@gmail.com',
      phoneNumber: '37998637969',
      username: 'gabriel',
      password: '123',
      role: 'admin',
      companyId: 1,
    });
    return res.json(user);
  },
};
