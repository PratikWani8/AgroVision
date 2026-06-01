from dotenv import load_dotenv

import os

load_dotenv()

class Settings:

    HOST = os.getenv(
        "HOST",
        "0.0.0.0"
    )

    PORT = int(
        os.getenv(
            "PORT",
            8000
        )
    )

    MODEL_PATH = os.getenv(
        "MODEL_PATH",
        "models/xgboost_model.pkl"
    )

    SENTINEL_CLIENT_ID = (
        os.getenv(
            "SENTINEL_CLIENT_ID"
        )
    )

    SENTINEL_CLIENT_SECRET = (
        os.getenv(
            "SENTINEL_CLIENT_SECRET"
        )
    )

settings = Settings()