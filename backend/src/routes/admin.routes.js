import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  getDashboardStats,
  getAllUsers,
  getAllTasks,
  updateUserRole,
  deleteUser,
  deleteTask,
} from "../controllers/admin.controller.js";

const router = express.Router();

// Protect all routes
router.use(authMiddleware);
router.use(authorize("admin"));

// Dashboard Stats Route
router.get("/dashboard", getDashboardStats);

// Users Routes
router.get("/users", getAllUsers);
router.patch("/users/:id/role", updateUserRole);
router.delete("/users/:id", deleteUser);

// Tasks Routes
router.get("/tasks", getAllTasks);
router.delete("/tasks/:id", deleteTask);

export default router;
