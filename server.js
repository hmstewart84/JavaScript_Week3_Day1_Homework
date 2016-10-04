var express = require('express');
var app = express();
var path = require('path');
var films = require('./client/src/models/films')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var FilmApi = require('./api/filmApi');  //newing it up


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));  //running the app

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  new FilmApi(app);
  console.log('app listening at http://%s:%s', host, port);
});
