import numpy as np

from app.core.logger import logger

def forecasting_pipeline(
    time_series
):
    try:
        logger.info(
            "Running forecasting pipeline..."
        )

        slope = np.polyfit(
            range(len(time_series)),
            time_series,
            1
        )[0]

        forecast = time_series[-1] + slope

        return {
            "forecast":
                float(forecast),

            "trend":
                float(slope)
        }

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Forecasting pipeline failed"
        )