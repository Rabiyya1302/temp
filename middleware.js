// Import the required modules
const connect = require('connect');
const http = require('http');

// Define a middleware function named echo
function echo(req, res, next) {
  req.pipe(res); // Pipe the request data to the response
}

// Create a Connect app
const app = connect();

// Use the echo middleware
app.use(echo);

// Create an HTTP server and register the Connect app
const server = http.createServer(app);

// Listen on port 3000
server.listen(3000);
