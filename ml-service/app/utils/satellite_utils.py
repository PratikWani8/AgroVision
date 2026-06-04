from app.core.logger import logger

def classify_vegetation(
    ndvi
):
    try:
        logger.info(
            "Classifying vegetation..."
        )

        if ndvi > 0.6:
            return "HEALTHY"

        elif ndvi > 0.3:
            return "MODERATE"

        return "POOR"

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Vegetation classification failed"
        )