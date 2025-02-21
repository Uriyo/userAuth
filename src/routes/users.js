import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import { validateUserUpdate } from '../middleware/validate.js';

const router = express.Router();

// Protect all routes
router.use(authenticateToken);

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', validateUserUpdate, updateUser);
router.delete('/:id', isAdmin, deleteUser);

export default router;