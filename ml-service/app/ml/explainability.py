from app.core.logger import logger

def explain_prediction(
    prediction,
    features
):
    try:
        logger.info(
            "Generating AI explainability..."
        )

        explanation = {
            "prediction":
                prediction,

            "top_factors": [
                "Low NDVI",
                "High Humidity",
                "High Temperature"
            ],

            "features":
                features
        }

        return explanation

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Explainability failed"
        )