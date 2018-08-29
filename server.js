const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const app = express();
const PORT = process.env.PORT || 8080;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets from the public folder
app.use(express.static('public'));

// Configure our app to use routes
app.use(routes);

// Start the Node server
app.listen(PORT, function() {
  console.log(`Node server now listening on PORT ${PORT}!`);
});