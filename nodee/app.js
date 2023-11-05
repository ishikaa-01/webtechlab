// Import the 'http' module to create an HTTP server.
const http = require('http');

// Define the hostname and port where your server will listen.
const hostname = '127.0.0.1'; // This will make the server accessible only on localhost.
const port = 3000; // You can choose any available port.

// Create an HTTP server instance.
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code and content type.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Write the "Hello, World!" message to the response.
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified hostname and port.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
