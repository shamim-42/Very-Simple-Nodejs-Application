var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Bismillah');
});

app.get('/bis', function (req, res){
    res.send('Alhamdulillah');
});

app.get('/shukran', (req, res) => {
    res.send("Masha Allah");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});