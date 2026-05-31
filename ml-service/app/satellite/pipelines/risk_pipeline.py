from app.core.logger import logger
from app.satellite.analytics.risk_scoring import ( calculate_risk_score )

def risk_pipeline(
    ndvi,
    humidity,
    rainfall,
    temperature
):
    try:
        logger.info(
            "Running risk pipeline..."
        )

        result = calculate_risk_score(
                ndvi,
                humidity,
                rainfall,
                temperature
            )

        return result

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Risk pipeline failed"
        )