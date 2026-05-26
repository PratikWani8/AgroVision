import { body } from "express-validator";

export const predictionValidator = [
  body("districtId")
    .notEmpty()
    .withMessage(
      "District ID is required"
    ),

  body("ndvi")
    .isFloat({ min: -1, max: 1 })
    .withMessage(
      "NDVI must be between -1 and 1"
    ),

  body("ndwi")
    .isFloat({ min: -1, max: 1 })
    .withMessage(
      "NDWI must be between -1 and 1"
    ),

  body("rainfall")
    .isNumeric()
    .withMessage(
      "Rainfall must be numeric"
    ),

  body("humidity")
    .isNumeric()
    .withMessage(
      "Humidity must be numeric"
    ),

  body("temperature")
    .isNumeric()
    .withMessage(
      "Temperature must be numeric"
    ),

  body("soilMoisture")
    .isNumeric()
    .withMessage(
      "Soil moisture must be numeric"
    )
];