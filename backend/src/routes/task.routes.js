import { Router } from "express";

import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
} from "../controllers/task.controller.js";

import  authMiddleware from "../middleware/auth.middleware.js";
import validate from "../middleware/validator.middleware.js";

import {
  createTaskValidator,
  updateTaskValidator,
  updateTaskStatusValidator,
} from "../validators/task.validator.js";

const router = Router();

// All task routes are protected
router.use(authMiddleware);

// Get all tasks
router.get("/", getTasks);

// Get single task
router.get("/:id", getTaskById);

// Create task
router.post("/createTask", createTaskValidator, validate, createTask);

// Update task
router.put("/:id", updateTaskValidator, validate, updateTask);

// Update task status
router.patch(
  "/:id/status",
  updateTaskStatusValidator,
  validate,
  updateTaskStatus,
);

// Delete task
router.delete("/:id", deleteTask);

export default router;
