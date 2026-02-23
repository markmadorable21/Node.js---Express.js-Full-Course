// API vs Server Side Rendering

// Express.js is used to set up API or templates with SSR
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json([{ name: 'John' }, { name: 'Susan' }]);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000.....');
});
