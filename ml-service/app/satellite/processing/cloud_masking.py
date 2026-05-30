import numpy as np

from app.core.logger import logger

def apply_cloud_mask(
    image,
    threshold=0.2
):
    try:
        logger.info(
            "Applying cloud mask..."
        )

        mask = image > threshold

        cleaned = np.where(
            mask,
            image,
            np.nan
        )

        return cleaned

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Cloud masking failed"
        )