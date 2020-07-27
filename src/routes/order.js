import { Router } from 'express';
import { User } from '../models/User';

const router = Router();

router.get('/order', async (req, res) => {
  const user = await User.create({
    name: 'Gabriel',
    email: 'rabelo72@gmail.com',
    phoneNumber: '37998637969',
    username: 'gabriel',
    password: '123',
    role: 'admin',
    company_id: 1,
  });

  return res.send(user);
});

module.exports = router;
