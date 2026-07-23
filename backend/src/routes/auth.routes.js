import { Router } from "express";
import { register, login, getProfile } from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";
import validate from "../middleware/validator.middleware.js";

const router = Router();

// Open Routes
router.post("/register", registerValidator, validate, register);

router.post("/login", loginValidator, validate, login);

// private Routes
router.get("/profile", authMiddleware, getProfile);

export default router;
