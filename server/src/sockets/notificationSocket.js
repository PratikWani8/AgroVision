import logger from "../config/logger.js";

const notificationSocket = (io) => {
  io.on("connection", (socket) => {
    logger.info(
      `Notification Socket Connected: ${socket.id}`
    );

    socket.on(
      "join-notification-room",
      (room) => {
        socket.join(room);

        logger.info(
          `Socket ${socket.id} joined room ${room}`
        );
      }
    );

    socket.on(
      "leave-notification-room",
      (room) => {
        socket.leave(room);

        logger.info(
          `Socket ${socket.id} left room ${room}`
        );
      }
    );

    socket.on("disconnect", () => {
      logger.info(
        `Notification Socket Disconnected: ${socket.id}`
      );
    });
  });
};

export default notificationSocket;