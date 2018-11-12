const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const users = require('./repositories/usersRepository.js');

const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  console.log('/api/login', req.body);

  const credsOk = users.find(x => x.email === req.body.email && x.password === req.body.password);
  if (credsOk) {
    res.send(true);
  } else {
    res.status(401);
    res.send(false);
  }
});

app.listen(port, () => console.log(`DelayedKilo app listening on port ${port}!`));
