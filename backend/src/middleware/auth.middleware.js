import jwt from "jsonwebtoken";
import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";


const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new ApiError(401, "Access denied. No token provided."));
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return next(new ApiError(401, "Invalid or expired token."));
    }

    req.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role, // Required for role-based authorization
    };

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return next(new ApiError(401, "Invalid token."));
    }

    if (error.name === "TokenExpiredError") {
      return next(new ApiError(401, "Token has expired."));
    }

    return next(error);
  }
};

export default authMiddleware;

