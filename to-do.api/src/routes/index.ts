import { Router } from 'express';
import ToDoRouter from './ToDo';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/todo', ToDoRouter);

// Export the base-router
export default router;
