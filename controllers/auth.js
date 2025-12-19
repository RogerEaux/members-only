import passport from 'passport';
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

export function getLogInHandler(req, res, next) {
  res.render('login');
}

export function postLogInHandler(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.render('login', { error: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.redirect('/');
    });
  })(req, res, next);
}
