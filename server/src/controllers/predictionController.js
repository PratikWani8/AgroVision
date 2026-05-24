import Prediction from "../models/Prediction.js";
import District from "../models/District.js";
import { getPrediction } from "../services/mlService.js";
import { getIO } from "../config/socket.js";

export const generatePrediction = async (req, res) => {
  try {
    const {
      districtId,
      ndvi,
      ndwi,
      rainfall,
      humidity,
      temperature,
      soilMoisture
    } = req.body;

    const district = await District.findById(districtId);

    if (!district) {
      return res.status(404).json({
        success: false,
        message: "District not found"
      });
    }

    const predictionResult = await getPrediction({
      ndvi,
      ndwi,
      rainfall,
      humidity,
      temperature,
      soilMoisture
    });

    const prediction = await Prediction.create({
      district: districtId,
      model: predictionResult.model,
      prediction: predictionResult.prediction,
      confidence: predictionResult.confidence,
      features: {
        ndvi,
        ndwi,
        rainfall,
        humidity,
        temperature,
        soilMoisture
      }
    });

    district.diseaseProbability =
      predictionResult.prediction;

    await district.save();

    const io = getIO();

    io.emit("prediction", prediction);

    res.status(201).json({
      success: true,
      data: prediction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getPredictions = async (req, res) => {
  try {
    const predictions = await Prediction.find()
      .populate("district")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: predictions.length,
      data: predictions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};