const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');

const users = require('./repositories/usersRepository.js');

const port = 5000;

app.use(cors());
app.use(bodyParser.json());


app.post('/api/login', (req, res) => {
  console.log('/api/login', req.body); // eslint-disable-line

  const credsOk = users.find(x => x.email === req.body.email && x.password === req.body.password);
  if (credsOk) {
    res.send(true);
  } else {
    res.status(401);
    res.send(false);
  }
});


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/api/xkcd', (req, res) => {
  console.log('/api/images', req.body); // eslint-disable-line

  request(`https://xkcd.com/${getRandomInt(0, 2050)}/info.0.json`, function(error, response, body) {
    res.setHeader('Content-Type', 'application/json');
    res.send(body);
  });
});



app.listen(port, () => {
  console.log(`DelayedKilo app listening on port ${port}!`); // eslint-disable-line
});
