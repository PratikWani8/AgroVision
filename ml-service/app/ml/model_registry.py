from app.core.logger import logger

MODEL_REGISTRY = {
    "xgboost":
        "models/xgboost_model.pkl",

    "random_forest":
        "models/random_forest.pkl"
}

def get_model_path(
    model_name
):
    try:
        logger.info(
            f"Fetching model path for {model_name}"
        )

        return MODEL_REGISTRY.get(
            model_name
        )

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Model registry lookup failed"
        )