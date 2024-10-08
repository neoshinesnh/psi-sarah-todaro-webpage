const compression = require('compression');
const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 8081;


app.use('/public', express.static('public'));
app.use('/assets', express.static('assets'));

// Compress all HTTP responses
app.use(compression());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/robots.txt', function(req, res) {
  res.sendFile(path.join(__dirname, '/robots.txt'));
});

app.get('*', function(req, res) {
  res.redirect('/');
});


app.listen(port);

console.log(`http://localhost:${port}`)