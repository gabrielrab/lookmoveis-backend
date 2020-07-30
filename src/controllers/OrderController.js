import User from '../models/User';

module.exports = {
  async store(req, res) {
    const user = await User.create({
      name: 'Gabriel',
      email: 'rabelogabriel72@gmail.com',
      phoneNumber: '37998637969',
      username: 'gabriel2',
      password: '123',
      role: 'admin',
      companyId: 1,
    });
    return res.json(user);
  },
};
