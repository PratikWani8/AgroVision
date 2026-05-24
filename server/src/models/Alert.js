import mongoose from "mongoose";

const alertSchema = new mongoose.Schema(
  {
    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District"
    },

    type: {
      type: String,
      enum: [
        "OUTBREAK",
        "WEATHER",
        "ANOMALY"
      ],
      required: true
    },

    severity: {
      type: String,
      enum: [
        "LOW",
        "MEDIUM",
        "HIGH"
      ],
      required: true
    },

    title: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    },

    isRead: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Alert",
  alertSchema
);