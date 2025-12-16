import express from 'express';
import { getSignUpHandler, postSignUpHandler } from '../controllers/auth.js';
import signUpValidator from '../middleware/validators/signUpValidator.js';
import validate from '../middleware/validate.js';

const router = express.Router();

router.get('/signup', getSignUpHandler);
router.post('/signup', signUpValidator, validate, postSignUpHandler);

export default router;
