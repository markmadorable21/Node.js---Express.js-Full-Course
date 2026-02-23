// MIDDLEWARE = functions in XPathExpression.js that execute during the request to the server
// = each middleware has access to req and res subjects

const express = require('express');
const app = express();

// req => middle => res


app.get('/', logger, (req, res) => {
  res.send('Home');
});
app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
