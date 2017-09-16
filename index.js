const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/home', function (req, res) {
  res.sendFile(__dirname+"/home.html");
});

app.get('/navbar', function (req, res) {
    res.sendFile(__dirname+"/navbar.html");
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.send('404, four oh four', 404);
});

app.listen(8082, function () {
  console.log('Example app listening on port 8082!')
});
