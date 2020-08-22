import User from '../models/User';

module.exports = {
  async store(req, res) {
    const user = await User.create({
      name: 'Gabriel',
      email: 'rabelo.gabriel72@gmail.com',
      phoneNumber: '37998637969',
      password: '123',
      role: 'admin',
      clientId: 1,
    });
    return res.json(user);
  },
};
