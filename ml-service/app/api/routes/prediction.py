from fastapi import APIRouter

from app.schemas.prediction_schema import ( PredictionInput )

from app.ml.predict import ( predict_disease )

from app.core.logger import logger

router = APIRouter()

@router.post("/predict")
def predict(
    payload: PredictionInput
):
    try:
        logger.info(
            "Prediction API called"
        )

        result = predict_disease(
                payload
            )

        return {
            "success": True,

            "data": result
        }

    except Exception as e:
        logger.error(str(e))

        return {
            "success": False,

            "message": str(e)
        }