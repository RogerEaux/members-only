import { createUser } from '../models/userModel.js';
import bcrypt from 'bcrypt';

export function getSignUpHandler(req, res, next) {
  res.render('signup', { errors: {}, values: {} });
}

export async function postSignUpHandler(req, res, next) {
  if (req.errors) {
    const errors = req.errors.reduce((acc, curr) => {
      acc[curr.path] = curr.msg;

      return acc;
    }, {});

    res.render('signup', { errors, values: req.body });
  } else {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = { username, email, hash };

    const createdUser = (await createUser(user)).rows[0];

    res.send(createdUser);
  }
}
