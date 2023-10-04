const http = require("http");
const fs = require("fs");
const path = require('path');

const mimeLookup = {
  ".js": "application/javascript",
  ".html": "text/html",
  ".css": "text/css",
  ".jpg":"image/jpeg"
  // Add more MIME types as needed
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    let fileurl = req.url === '/' ? '/index.html' : req.url;
    let filepath = path.join(__dirname, fileurl);

    let fileExt = path.extname(filepath);
    let mimeType = mimeLookup[fileExt];

    if (!mimeType) {
      send404(res);
      return;
    }
    console.log("MimeType",mimeType)

    fs.readFile(filepath, (err, data) => {
      if (err) {
        console.log('File not found:', err);
        send404(res);
      } else {
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(data);
      }
    });
  } else {
    send404(res);
  }
}).listen(5000);

function send404(response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.write("Error 404: Resource not found.");
  response.end();
}

server.on('listening', () => {
  console.log('Server is running on port 5000');
});

server.on('error', (error) => {
  console.error('Server error:', error);
});
