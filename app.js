//init modules
var express = require('express');
var app = express();

//init root path
app.get('/', function(req, res) {

});

//init server listening event
app.listen(3000, function() {
  console.log("Example app listenting on port 3000!");
});
