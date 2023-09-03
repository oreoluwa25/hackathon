const winston = require("winston")
const logger = winston.createLogger({
    level: "silly",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
      )
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "logs/app.log" }),
    ],
  });
  
function logs () {
    logger.error("error")
    logger.warn("This is a warning message");
    logger.log("info", "This is an info message");
    logger.log("verbose", "This is a verbose message");
    logger.log("debug", "This is a debug message");
    logger.log("silly", "This is a silly message");

}

module.exports = {logs, logger}