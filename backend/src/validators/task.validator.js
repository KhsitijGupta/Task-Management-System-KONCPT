import { body } from "express-validator";

const priorities = ["Low", "Medium", "High"];
const statuses = ["Pending", "In Progress", "Completed"];

export const createTaskValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ max: 100 })
    .withMessage("Title cannot exceed 100 characters."),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters."),

  body("priority")
    .notEmpty()
    .withMessage("Priority is required.")
    .isIn(priorities)
    .withMessage("Invalid priority."),

  body("status").optional().isIn(statuses).withMessage("Invalid status."),

  body("dueDate")
    .notEmpty()
    .withMessage("Due date is required.")
    .isISO8601()
    .withMessage("Invalid date format.")
    .custom((value) => {
      const dueDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (dueDate < today) {
        throw new Error("Due date cannot be in the past.");
      }

      return true;
    }),
];

export const updateTaskValidator = [
  body("title")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Title cannot exceed 100 characters."),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters."),

  body("priority").optional().isIn(priorities).withMessage("Invalid priority."),

  body("status").optional().isIn(statuses).withMessage("Invalid status."),

  body("dueDate").optional().isISO8601().withMessage("Invalid date format."),
];

export const updateTaskStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required.")
    .isIn(statuses)
    .withMessage("Invalid status."),
];
