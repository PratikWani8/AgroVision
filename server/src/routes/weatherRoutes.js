import express from "express";

import protect from "../middleware/authMiddleware.js";

import { getWeatherData } from "../controllers/weatherController.js";

const router = express.Router();

router.get(
  "/current",
  protect,
  getWeatherData
);

export default router;