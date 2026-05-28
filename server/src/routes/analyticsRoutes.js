import express from "express";

import protect from "../middleware/authMiddleware.js";

import { getDashboardAnalytics, getRiskDistribution } from "../controllers/analyticsController.js";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  getDashboardAnalytics
);

router.get(
  "/risk-distribution",
  protect,
  getRiskDistribution
);

export default router;