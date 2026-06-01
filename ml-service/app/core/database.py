from app.core.logger import logger

def initialize_database():
    try:
        logger.info(
            "Initializing ML database connection..."
        )

        return True

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Database initialization failed"
        )