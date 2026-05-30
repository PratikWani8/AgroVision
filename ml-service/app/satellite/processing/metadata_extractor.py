from app.core.logger import logger

def extract_metadata(
    dataset
):
    try:
        logger.info(
            "Extracting raster metadata..."
        )

        metadata = {
            "width":
                dataset.width,

            "height":
                dataset.height,

            "count":
                dataset.count,

            "crs":
                str(dataset.crs),

            "bounds":
                str(dataset.bounds),

            "driver":
                dataset.driver
        }

        return metadata

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Metadata extraction failed"
        )