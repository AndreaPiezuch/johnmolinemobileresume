//init modules
var express = require('express');
var cfenv = require('cfenv');
var app = express();

//set all paths for content
app.use(express.static(__dirname + '/public/www'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/www/index.html');
});

console.log("File path: " + __dirname);

//init cfenv variable
var appEnv = cfenv.getAppEnv();

//init server listening event
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("Example app listenting on " + appEnv.url);
});
