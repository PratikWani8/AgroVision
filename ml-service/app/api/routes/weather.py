from fastapi import APIRouter

from app.utils.weather_utils import ( calculate_weather_score )

from app.core.logger import logger

router = APIRouter()

@router.post("/weather/analyze")
def weather_analysis(
    payload: dict
):
    try:
        logger.info(
            "Weather analytics API called"
        )

        score = calculate_weather_score(
                payload["rainfall"],
                payload["humidity"],
                payload["temperature"]
            )

        return {
            "success": True,

            "weather_score":
                score
        }

    except Exception as e:
        logger.error(str(e))

        return {
            "success": False,

            "message": str(e)
        }