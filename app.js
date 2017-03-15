var express = require('express')
var app = express()
var path = require('path');




app.use(express.static('book'));





app.listen(8080, function () {
  console.log('escuchando http://localhost:8080')
})
