import dotenv from "dotenv";

dotenv.config();

import fs from "fs";

import csv from "csv-parser";

import connectDB from "../config/db.js";

import District from "../models/District.js";

import logger from "../config/logger.js";

await connectDB();

const results = [];

fs.createReadStream(
  "./datasets/districts.csv"
)
  .pipe(csv())

  .on("data", (data) => {
    results.push({
      name: data.name,

      state: data.state,

      coordinates: {
        lat: parseFloat(data.lat),

        lng: parseFloat(data.lng)
      },

      riskLevel: "LOW"
    });
  })

  .on("end", async () => {
    try {
      await District.insertMany(
        results
      );

      logger.info(
        `${results.length} districts imported`
      );

      process.exit();
    } catch (error) {
      logger.error(error.message);

      process.exit(1);
    }
  });