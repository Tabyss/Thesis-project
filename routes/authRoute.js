import express from 'express';
import { login, logout } from '../controllers/authController.js';
import { refreshToken } from '../controllers/refreshToken.js';

const router = express.Router();

router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logout);

export default router;
