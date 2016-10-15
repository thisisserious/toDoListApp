var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var appRouter = require('./routes/app');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/app', appRouter);

app.get('/', function (req, res) {
  var date = new Date();
  var hour = date.getHours();
  var mins = date.getMinutes();
  console.log('Received request at:', hour + ':' + mins);
  var filename = path.join(__dirname, 'public/views/index.html');

  // console.log('filename:', filename);
  res.sendFile(filename);
});

app.use(express.static('public'));

app.listen(3000);
