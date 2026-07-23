import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import adminRoutes from "./routes/admin.routes.js";

import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

// Security Middleware
app.use(helmet());

// CORS
app.use(cors());

// Logging
app.use(morgan("dev"));

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Manager API is running 🚀",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/admin", adminRoutes);

// not found Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});
// Error Handler
app.use(errorMiddleware);

export default app;
