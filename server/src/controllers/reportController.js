import Prediction from "../models/Prediction.js";

import {
  generatePDF
} from "../services/pdfService.js";

export const exportPDFReport =
  async (req, res) => {
    try {
      const predictions =
        await Prediction.find()
          .populate("district");

      generatePDF(predictions, res);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };