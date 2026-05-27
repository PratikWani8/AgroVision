import SatelliteData from "../models/SatelliteData.js";

export const saveSatelliteMetrics =
  async ({
    district,
    ndvi,
    ndwi,
    evi,
    imageUrl,
    cloudCoverage
  }) => {
    try {
      const satellite =
        await SatelliteData.create({
          district,
          ndvi,
          ndwi,
          evi,
          imageUrl,
          cloudCoverage,
          imageDate: new Date()
        });

      return satellite;
    } catch (error) {
      console.error(
        "Satellite Service Error:",
        error.message
      );

      throw new Error(
        "Failed to save satellite metrics"
      );
    }
  };

export const getSatelliteHistory =
  async (districtId) => {
    try {
      return await SatelliteData.find({
        district: districtId
      }).sort({
        createdAt: -1
      });
    } catch (error) {
      console.error(
        "Satellite History Error:",
        error.message
      );

      throw new Error(
        "Failed to fetch satellite history"
      );
    }
  };