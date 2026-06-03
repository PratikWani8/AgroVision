import joblib

from app.core.logger import logger

def load_model(
    model_path
):
    try:
        logger.info(
            f"Loading model: {model_path}"
        )

        model = joblib.load(
                model_path
            )

        return model

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Model loading failed"
        )