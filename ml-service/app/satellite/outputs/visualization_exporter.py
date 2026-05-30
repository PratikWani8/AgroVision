import matplotlib.pyplot as plt

from app.core.logger import logger

def export_visualization(
    values,
    output_path
):
    try:
        logger.info(
            "Exporting visualization..."
        )

        plt.figure(figsize=(10, 5))

        plt.plot(values)

        plt.title(
            "Vegetation Trend"
        )

        plt.savefig(output_path)

        plt.close()

        return output_path

    except Exception as e:
        logger.error(str(e))

        raise Exception(
            "Visualization export failed"
        )