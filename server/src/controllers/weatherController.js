import {
  fetchWeatherData
} from "../services/weatherService.js";

export const getWeatherData =
  async (req, res) => {
    try {
      const { lat, lng } = req.query;

      const data =
        await fetchWeatherData(lat, lng);

      res.status(200).json({
        success: true,
        data
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };