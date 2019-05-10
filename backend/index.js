const express = require('express')
const path = require('path')
const mongoose =require('mongoose')
const port = process.env.PORT || 5000
const clientPath = path.join(__dirname, 'client')
const postRouter = require('./routes/answer')
const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  return next();
});

app.use(bodyParser.json())
app.use('/api/answer', postRouter)
app.use(express.static(clientPath));

app.listen(port, () => {
    console.log('We are live on ' + port);
  });