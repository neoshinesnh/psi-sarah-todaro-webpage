const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use('/public', express.static('public'));
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('*', function(req, res) {
  res.redirect('/');
});

app.listen(port);
console.log(`Sarah Todaro Page started on port ${port}`);