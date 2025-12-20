import express from 'express';
import {
  getLogInHandler,
  getSignUpHandler,
  postLogInHandler,
  postSignUpHandler,
} from '../controllers/auth.js';
import signUpValidator from '../middleware/validators/signUpValidator.js';
import logInValidator from '../middleware/validators/logInValidator.js';

const router = express.Router();

router.get('/signup', getSignUpHandler);
router.post('/signup', signUpValidator, postSignUpHandler);

router.get('/login', getLogInHandler);
router.post('/login', logInValidator, postLogInHandler);

export default router;
