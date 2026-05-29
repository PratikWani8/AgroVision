import numpy as np

from app.core.logger import logger

def calculate_moisture_index(
    ndwi,
    humidity
):
    try:
        logger.info(
            "Calculating moisture index..."
        )

        moisture = (
            ndwi * humidity
        )

        return moisture

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Moisture index calculation failed"
        )