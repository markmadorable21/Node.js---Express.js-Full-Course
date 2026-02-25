// POSTMAN
// testing API

// 1. Choose GET then access localhost:5000 and should have display the website at index

// 2. For POST, enter the route for the data at line 16 for 10-http-methods.js, then click body -> raw -> JSON

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

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
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

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id),
  );
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
