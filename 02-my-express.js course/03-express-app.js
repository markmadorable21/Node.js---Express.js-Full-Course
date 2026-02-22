const express = require('express');
const app = express();
const path = require('path');

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

//setup static and middleware
app.use(express.static('./02-my-express.js course/public'));

app.get('/', (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      './smilga-node-express/02-express-tutorial/navbar-app/index.html',
    ),
  );
});

// handles all http verbs/methods
app.all(/(.*)/, (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
