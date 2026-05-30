import rasterio

from app.core.logger import logger

def load_raster(path):
    try:
        logger.info(
            f"Loading raster: {path}"
        )

        dataset = rasterio.open(path)

        return dataset

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Failed to load raster"
        )