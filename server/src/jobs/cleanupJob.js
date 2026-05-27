import cron from "node-cron";

import Alert from "../models/Alert.js";

import logger from "../config/logger.js";

const cleanupJob = () => {
  cron.schedule("0 2 * * 0", async () => {
    try {
      logger.info(
        "Running Cleanup Job..."
      );

      const threshold =
        new Date();

      threshold.setDate(
        threshold.getDate() - 30
      );

      const result =
        await Alert.deleteMany({
          createdAt: {
            $lt: threshold
          }
        });

      logger.info(
        `${result.deletedCount} old alerts deleted`
      );
    } catch (error) {
      logger.error(
        `Cleanup Job Error: ${error.message}`
      );
    }
  });
};

export default cleanupJob;