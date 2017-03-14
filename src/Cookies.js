var express = require('express');
var app = express();

var express = require('express');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Syntax
app.get('/cookie',function(req, res){
     res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});

//Cookie Expiration Time
res.cookie(cookie_name , 'cookie_value', {expire : new Date() + 9999});

//Delete Existing Cookie
app.get('/clearcookie', function(req,res){
     clearCookie('cookie_name');
     res.send('Cookie deleted');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
