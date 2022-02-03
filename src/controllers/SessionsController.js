import jwt from 'jsonwebtoken';

import User from '../models/User';
import { checkPassword } from '../services/auth';

import authConfig from '../config/auth';
class SessionController {
  async create(req, res) {
    const { email, password } = req.boby;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ error: 'User / Password invalid.' });
    }
  }
}

export default new SessionController();
