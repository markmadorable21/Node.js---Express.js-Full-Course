const express = require('express');
const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
app.get('/', (req, res) => {
  console.log('User hit the resource');
  res.status(200).send('Home Page');
  // refresh the browser
});
app.get('/about', (req, res) => {
  res.status(202).send('About Page1');
  // refresh the browser
});

// handles all http verbs/methods
app.all(/(.*)/, (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
