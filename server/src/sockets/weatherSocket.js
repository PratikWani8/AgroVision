import logger from "../config/logger.js";

const weatherSocket = (io) => {
  io.on("connection", (socket) => {
    logger.info(
      `Weather Socket Connected: ${socket.id}`
    );

    socket.on(
      "subscribe-weather",
      () => {
        socket.join("weather");

        logger.info(
          `Socket ${socket.id} subscribed to weather updates`
        );
      }
    );

    socket.on(
      "unsubscribe-weather",
      () => {
        socket.leave("weather");

        logger.info(
          `Socket ${socket.id} unsubscribed from weather updates`
        );
      }
    );

    socket.on("disconnect", () => {
      logger.info(
        `Weather Socket Disconnected: ${socket.id}`
      );
    });
  });
};

export const emitWeatherUpdate = (
  io,
  weatherData
) => {
  io.to("weather").emit(
    "weather-update",
    weatherData
  );

  logger.info(
    "Weather update emitted"
  );
};

export default weatherSocket;