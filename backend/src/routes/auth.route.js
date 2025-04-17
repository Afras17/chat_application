import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js'; // Import the controller functions

const router = express.Router();

router.post('/signup', signup); // Use the signup function from the controller
router.post('/login', login); // Use the login function from the controller
router.post('/logout', logout); // Use the logout function from the controller


export default router;