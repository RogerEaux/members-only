import { validationResult } from 'express-validator';

export default function (req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    req.errors = errors.array();
  }

  next();
}
