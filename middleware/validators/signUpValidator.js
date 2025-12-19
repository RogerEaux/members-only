import { body } from 'express-validator';
import { findUserByEmail, findUserByUsername } from '../../models/userModel.js';

export default [
  body('username')
    .isAlphanumeric()
    .withMessage('Username must contain only letters and numbers')
    .isLength({ min: 4 })
    .withMessage('Username must be at least 4 characters')
    .custom(async (value) => {
      const user = await findUserByUsername(value);

      if (user.rows[0]) {
        throw new Error('Username already in use');
      }
    })
    .trim()
    .escape(),
  body('email')
    .isEmail()
    .withMessage('Email must be a valid email address')
    .custom(async (value) => {
      const user = await findUserByEmail(value);

      if (user.rows[0]) {
        throw new Error('Email already in use');
      }
    })
    .trim()
    .escape(),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches('[0-9]')
    .withMessage('Password must contain a number')
    .matches('[A-Z]')
    .withMessage('Password must contain an uppercase letter')
    .trim()
    .escape(),
  body('confirm-password')
    .custom((val, { req }) => req.body.password === val)
    .withMessage('Passwords must match'),
];
