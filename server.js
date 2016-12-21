var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var appRouter = require('./routes/app');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/app', appRouter);

app.get('/', function (req, res) {
  var filename = path.join(__dirname, 'public/views/index.html');
  res.sendFile(filename);
});

app.use(express.static('public'));

app.listen(port, function(){
  console.log('Listening on port: ', port);
});
