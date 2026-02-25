const express = require('express');
const app = express();
let { people } = require('./smilga-node-express/02-express-tutorial/data.js');

// static assets
app.use(
  express.static('./smilga-node-express/02-express-tutorial/methods-public'),
);

//parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// app.post('/api/people', (req, res) => {
//   res.status(200).send('Success');
//   // check payload and preview
// });

app.post('/api/people', (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, person: name });
});

app.post('/login', (req, res) => {
  const name = req.body.name;
  // const {name}=req.body; equate to this after, like a finishing, but should stick to const name = req.body.name to understand the code better bcoz it's confusing
  // the const {name} = req.body; can be written after everything works out, like a finisher

  console.log(req.body);
  if (name) {
    return res.status(200).send(`Name entered: ${name}`);
  }

  res.status(401).send('Please Provide Credentials');
  // console.log(req);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
