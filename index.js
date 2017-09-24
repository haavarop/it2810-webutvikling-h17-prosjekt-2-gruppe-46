const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/home.html");
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.send('404, Page Not Found', 404);
});

app.listen(8082, function () {
  console.log('Server listening on port 8082!')
});
