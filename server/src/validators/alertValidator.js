import { body } from "express-validator";

export const alertValidator = [
  body("district")
    .notEmpty()
    .withMessage(
      "District is required"
    ),

  body("type")
    .isIn([
      "OUTBREAK",
      "WEATHER",
      "ANOMALY"
    ])
    .withMessage("Invalid alert type"),

  body("severity")
    .isIn([
      "LOW",
      "MEDIUM",
      "HIGH"
    ])
    .withMessage("Invalid severity"),

  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("message")
    .notEmpty()
    .withMessage("Message is required")
];