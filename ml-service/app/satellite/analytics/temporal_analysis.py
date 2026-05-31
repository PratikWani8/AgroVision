import numpy as np

from app.core.logger import logger

def temporal_analysis(
    time_series
):
    try:
        logger.info(
            "Running temporal analysis..."
        )

        slope = np.polyfit(
            range(len(time_series)),
            time_series,
            1
        )[0]

        return {
            "trend_slope":
                float(slope),

            "forecast":
                float(
                    time_series[-1]
                    + slope
                )
        }

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Temporal analysis failed"
        )