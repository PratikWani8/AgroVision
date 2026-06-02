from pydantic import (
    BaseModel,
    Field
)

class AlertRequest(
    BaseModel
):
    district: str = Field(
        ...,
        example="Pune"
    )

    riskLevel: str = Field(
        ...,
        example="HIGH"
    )

    outbreakScore: float = Field(
        ...,
        example=84.2
    )

    message: str = Field(
        ...,
        example="Potential crop disease outbreak detected"
    )