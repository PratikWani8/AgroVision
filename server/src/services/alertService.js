import Alert from "../models/Alert.js";
import { getIO } from "../config/socket.js";

export const createSystemAlert =
  async ({
    district,
    type,
    severity,
    title,
    message
  }) => {
    try {
      const alert = await Alert.create({
        district,
        type,
        severity,
        title,
        message
      });

      const io = getIO();

      io.emit("alert", alert);

      return alert;
    } catch (error) {
      console.error(
        "Alert Service Error:",
        error.message
      );

      throw new Error(
        "Failed to create alert"
      );
    }
  };