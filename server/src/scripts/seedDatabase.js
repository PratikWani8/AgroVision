import dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";

import connectDB from "../config/db.js";

import User from "../models/User.js";

import District from "../models/District.js";

import logger from "../config/logger.js";

await connectDB();

const seedDatabase = async () => {
  try {
    await User.deleteMany();

    await District.deleteMany();

    const admin = await User.create({
      name: "Admin User",

      email: "admin@agrovision.ai",

      password: "password123",

      role: "admin"
    });

    const districts =
      await District.insertMany([
        {
          name: "Pune",

          state: "Maharashtra",

          coordinates: {
            lat: 18.5204,

            lng: 73.8567
          },

          vegetationIndices: {
            ndvi: 0.71,

            ndwi: 0.43,

            evi: 0.52
          },

          riskLevel: "LOW",

          diseaseProbability: 18
        },

        {
          name: "Nashik",

          state: "Maharashtra",

          coordinates: {
            lat: 19.9975,

            lng: 73.7898
          },

          vegetationIndices: {
            ndvi: 0.29,

            ndwi: 0.18,

            evi: 0.22
          },

          riskLevel: "HIGH",

          diseaseProbability: 82
        }
      ]);

    logger.info(
      `Seeded ${districts.length} districts`
    );

    logger.info(
      `Admin User Created`
    );

    logger.info(
      `Email: admin@agrovision.ai`
    );

    logger.info(
      `Password: password123`
    );

    process.exit();
  } catch (error) {
    logger.error(error.message);

    process.exit(1);
  }
};

seedDatabase();