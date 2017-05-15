var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const request = require('request');
const _ = require('lodash')

var listener = 83;

var server = http.createServer(app);
server.listen(listener);

var path = require('path');

app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/demandes-bourses', function(req, res) {
  res.status(200);
  return request({
      method: 'GET',
      uri: 'http://swarmjpg.westeurope.cloudapp.azure.com:8082'
    },
        function(error, response, body) {
          if (error) {
              return console.error('GET Failed :', error);
            }
          console.log(response.statusCode);
          var content = body;

          createFile(content)
            // Transformations sur content
          res.send(content);
        });
});

function createFile(entities) {
  console.log('entities', entities)
  var entries = _.map(entities, e => createEntries(e))
  console.log('entries', entries)


  return createHeader() +
        _.join(entries) +
        createFooter();
}

function createHeader() {
  return 'header'
}

function createEntries(entity) {
  return '<entry></entry>'
}

function createFooter() {
  return 'footer'
}

