'use strict'

const express = require('express')
const bodyParser = require('body-parser')
var backstop = require('./runner')
// Create a new instance of express
const app = express()

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

// Route that receives a POST request to /sms
app.get('/', function (req, res) {
  let testName = req.query.testName;
  let referenceName = req.query.referenceName;
  let command = req.query.command;
  let url = req.query.url;
  let response = backstop.runner({
    'url': req.query.url,
    'command': req.query.command,
    'scenario': req.query.scenario
  });
  res.set('Content-Type', 'text/plain')
  res.send('Patience... robots are doing work. ')
});

// Tell our app to listen on port 3000
app.listen(80, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 3000')
})