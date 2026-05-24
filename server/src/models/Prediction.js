import mongoose from "mongoose";

const predictionSchema =
  new mongoose.Schema(
    {
      district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District",
        required: true
      },

      model: {
        type: String,
        required: true
      },

      prediction: {
        type: Number,
        required: true
      },

      confidence: {
        type: Number,
        required: true
      },

      riskLevel: {
        type: String,
        enum: [
          "LOW",
          "MEDIUM",
          "HIGH"
        ]
      },

      features: {
        ndvi: Number,

        ndwi: Number,

        rainfall: Number,

        humidity: Number,

        temperature: Number,

        soilMoisture: Number
      }
    },
    {
      timestamps: true
    }
  );

export default mongoose.model(
  "Prediction",
  predictionSchema
);