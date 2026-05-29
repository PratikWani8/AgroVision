import numpy as np

from app.core.logger import logger

def calculate_ndvi(
    nir_band,
    red_band
):
    try:
        logger.info(
            "Calculating NDVI..."
        )

        np.seterr(
            divide="ignore",
            invalid="ignore"
        )

        ndvi = (
            nir_band - red_band
        ) / (
            nir_band + red_band
        )

        return ndvi

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "NDVI calculation failed"
        )