from app.core.logger import logger

def compare_districts(
    district_a,
    district_b
):
    try:
        logger.info(
            "Comparing districts..."
        )

        comparison = {
            "ndvi_difference":
                district_a["ndvi"]
                -
                district_b["ndvi"],

            "risk_difference":
                district_a["risk"]
                -
                district_b["risk"]
        }

        return comparison

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "District comparison failed"
        )