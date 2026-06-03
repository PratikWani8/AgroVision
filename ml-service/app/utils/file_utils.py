import os

from app.core.logger import logger

def ensure_directory(
    path
):
    try:
        logger.info(
            f"Ensuring directory exists: {path}"
        )

        os.makedirs(
            path,
            exist_ok=True
        )

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Directory creation failed"
        )