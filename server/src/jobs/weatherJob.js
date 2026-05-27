import cron from "node-cron";

import District from "../models/District.js";

import Weather from "../models/Weather.js";

import { fetchWeatherData } from "../services/weatherService.js";

import logger from "../config/logger.js";

const weatherJob = () => {
  cron.schedule("0 */6 * * *", async () => {
    try {
      logger.info(
        "Running Weather Sync Job..."
      );

      const districts =
        await District.find();

      for (const district of districts) {
        const weatherData =
          await fetchWeatherData(
            district.coordinates.lat,
            district.coordinates.lng
          );

        const current =
          weatherData.current;

        await Weather.create({
          district: district._id,

          temperature:
            current.temperature_2m,

          humidity:
            current.relative_humidity_2m,

          rainfall: current.rain,

          windSpeed:
            current.wind_speed_10m,

          forecastDate: new Date()
        });
      }

      logger.info(
        "Weather Sync Job Completed"
      );
    } catch (error) {
      logger.error(
        `Weather Job Error: ${error.message}`
      );
    }
  });
};

export default weatherJob;