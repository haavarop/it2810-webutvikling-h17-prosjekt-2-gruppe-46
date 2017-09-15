const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/home', function (req, res) {
  res.sendFile(__dirname+"/home.html");
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.send('404, four oh four', 404);
});

app.listen(8082, function () {
  console.log('Example app listening on port 8082!')
});
