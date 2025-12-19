import { body } from 'express-validator';

export default [
  body('email').trim().escape(),
  body('password').trim().escape(),
];
