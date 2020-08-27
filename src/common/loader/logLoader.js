const { createLogger, format, transports, transport } = require("winston");

module.exports = createLogger({
  format: format.combine(format.timestamp(), format.json(), format.colorize()),
  transports: [new transports.Console()],
});
