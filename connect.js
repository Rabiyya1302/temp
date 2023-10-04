const { createServer } = require("http");
const { createLogger, format, transports } = require("winston"); //logging library for node.js
const connect = require("connect"); //middleware framework for node.js for creating web applicatons with middleware
const serve_Static=require('serve-static')

// Create a Winston logger
const logger = createLogger({
  //configured to log messsages with an info level
  level: "info",
  format: format.combine(
    //for format of log message :format.combine()
    format.timestamp(),
    format.printf(
      ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`
    )
  ),
  transports: [
    new transports.Console(), //logger is configured to use the console transport,which means log messages will be displayed
    //in the console
  ],
});

// A simple logging middleware
function logit(req, res, next) {
  logger.info(`Request received: ${req.method}, ${req.url}`);
  next();
}
  
// Create a Connect app and use the logging middleware
const app = connect().use(logit)
.use(serve_Static(__dirname + '/public'));;

// Create an HTTP server and register the Connect app
const server = createServer(app);

// Listen on port 3000
server.listen(3000, () => {
  logger.info("Server running on port 3000");
});
