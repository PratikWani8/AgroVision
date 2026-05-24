import Alert from "../models/Alert.js";
import { getIO } from "../config/socket.js";

export const createAlert = async (req, res) => {
  try {
    const alert = await Alert.create(req.body);

    const io = getIO();

    io.emit("alert", alert);

    res.status(201).json({
      success: true,
      data: alert
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find()
      .populate("district")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: alerts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};