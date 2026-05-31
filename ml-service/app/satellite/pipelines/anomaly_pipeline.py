from app.core.logger import logger

from app.satellite.analytics.anomaly_detection import ( detect_anomalies )

def anomaly_pipeline(
    values
):
    try:
        logger.info(
            "Running anomaly pipeline..."
        )

        result = detect_anomalies(
                values
            )

        return result

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Anomaly pipeline failed"
        )