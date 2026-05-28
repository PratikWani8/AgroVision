const calculateRisk = ({
  ndvi,
  ndwi,
  rainfall,
  humidity,
  temperature,
  soilMoisture
}) => {
  let score = 0;

  if (ndvi < 0.3) score += 25;

  if (ndwi < 0.2) score += 20;

  if (rainfall > 200) score += 15;

  if (humidity > 80) score += 15;

  if (temperature > 35) score += 15;

  if (soilMoisture < 30) score += 10;

  let riskLevel = "LOW";

  if (score >= 70) {
    riskLevel = "HIGH";
  } else if (score >= 40) {
    riskLevel = "MEDIUM";
  }

  return {
    score,
    riskLevel
  };
};

export default calculateRisk;