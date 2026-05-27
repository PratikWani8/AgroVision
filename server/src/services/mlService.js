import axios from "axios";

const ML_SERVICE_URL =
  process.env.ML_SERVICE_URL ||
  "http://localhost:8000";

export const getPrediction = async (
  payload
) => {
  try {
    const response = await axios.post(
      `${ML_SERVICE_URL}/predict`,
      payload
    );

    return response.data;
  } catch (error) {
    console.error(
      "ML Prediction Error:",
      error.message
    );

    throw new Error(
      "Failed to communicate with ML service"
    );
  }
};

export const trainModel = async (
  trainingData
) => {
  try {
    const response = await axios.post(
      `${ML_SERVICE_URL}/train`,
      trainingData
    );

    return response.data;
  } catch (error) {
    console.error(
      "ML Training Error:",
      error.message
    );

    throw new Error(
      "Failed to train ML model"
    );
  }
};

export const getDistrictRisk =
  async (payload) => {
    try {
      const response = await axios.post(
        `${ML_SERVICE_URL}/district-risk`,
        payload
      );

      return response.data;
    } catch (error) {
      console.error(
        "District Risk Error:",
        error.message
      );

      throw new Error(
        "Failed to generate district risk"
      );
    }
  };