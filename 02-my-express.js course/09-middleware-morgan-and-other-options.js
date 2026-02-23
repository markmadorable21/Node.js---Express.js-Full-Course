// MIDDLEWARE = functions in XPathExpression.js that execute during the request to the server
// = each middleware has access to req and res subjects

const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./02-my-express.js course/logger.js');
const authorize = require('./02-my-express.js course/authorize.js');
// req => middle => res

// app.use([logger, authorize]);
app.use(morgan()); // morgan = logger middleware

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/api/products', (req, res) => {
  res.send('Products');
});
app.get('/api/items', (req, res) => {
  console.log(req.user);

  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
