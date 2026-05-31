from app.core.logger import logger

def calculate_risk_score(
    ndvi,
    humidity,
    rainfall,
    temperature
):
    try:
        logger.info(
            "Calculating district risk score..."
        )

        score = (
            (1 - ndvi) * 40
            +
            humidity * 0.2
            +
            rainfall * 0.1
            +
            temperature * 0.3
        )

        level = "LOW"

        if score > 75:
            level = "HIGH"

        elif score > 45:
            level = "MEDIUM"

        return {
            "score":
                score,

            "risk_level":
                level
        }

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Risk scoring failed"
        )