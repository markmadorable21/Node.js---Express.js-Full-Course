// API vs Server Side Rendering

// Express.js is used to set up API or templates with SSR
const express = require('express');
const app = express();
// importing an object from another file
const {
  products,
} = require('./smilga-node-express/02-express-tutorial/data.js');

app.get('/', (req, res) => {
  // responding a json directly
  //res.status(200).json([{ name: 'John' }, { name: 'Susan' }]);
  res.status(200).json(products);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000.....');
});
