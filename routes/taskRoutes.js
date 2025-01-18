import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controller/taskControllers.js';

const router = express.Router();

// Define API routes
router.get('/tasks', getTasks);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;

