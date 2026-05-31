import numpy as np

from app.core.logger import logger

def detect_anomalies(
    values
):
    try:
        logger.info(
            "Detecting anomalies..."
        )

        mean = np.mean(values)

        std = np.std(values)

        anomalies = []

        for value in values:
            z_score = (
                value - mean
            ) / std

            if abs(z_score) > 2:
                anomalies.append(
                    float(value)
                )

        return {
            "anomalies":
                anomalies,

            "count":
                len(anomalies)
        }

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Anomaly detection failed"
        )