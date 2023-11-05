const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL ('/') that responds with "Hello, World!".
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a custom route ('/about') that responds with an about message.
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Define a custom route ('/contact') that responds with a contact message.
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Start the server and listen on the specified port.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
