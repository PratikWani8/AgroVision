from app.core.logger import logger

def extract_band(
    dataset,
    band_number
):
    try:
        logger.info(
            f"Extracting band {band_number}"
        )

        band = dataset.read(
            band_number
        )

        return band

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Band extraction failed"
        )