import ee

from app.core.logger import logger

ee.Initialize()

class EarthEngineProvider:

    def get_sentinel_collection(
        self,
        start_date,
        end_date
    ):
        try:
            logger.info(
                "Loading Earth Engine collection..."
            )

            collection = (
                ee.ImageCollection(
                    "COPERNICUS/S2"
                )
                .filterDate(
                    start_date,
                    end_date
                )
            )

            return collection

        except Exception as e:
            logger.error(str(e))

            raise Exception(
                "Earth Engine fetch failed"
            )

    def calculate_ndvi(
        self,
        image
    ):
        ndvi = image.normalizedDifference(
            ["B8", "B4"]
        )

        return ndvi