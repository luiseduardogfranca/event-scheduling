const { createLogger, format, transports, transport } = require("winston");

module.exports = createLogger({
  format: format.combine(format.timestamp(), format.json(), format.colorize()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "info.log", level: "info" }),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "history.log" }),
  ],
});
