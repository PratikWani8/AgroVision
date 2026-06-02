from pydantic import (
    BaseModel,
    Field
)

class WeatherRequest(
    BaseModel
):
    rainfall: float = Field(
        ...,
        example=150
    )

    humidity: float = Field(
        ...,
        example=80
    )

    temperature: float = Field(
        ...,
        example=34
    )

    windSpeed: float = Field(
        ...,
        example=12
    )