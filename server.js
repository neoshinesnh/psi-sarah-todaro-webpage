const compression = require('compression');
const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 8081;

// Security middleware
const securityMiddleware = (req, res, next) => {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Enable XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Content Security Policy
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self' https: data:; " +
    "script-src 'self' https://*.hotjar.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://www.google.com https://pagead2.googlesyndication.com 'unsafe-inline' 'unsafe-eval'; " +
    "connect-src 'self' https://*.hotjar.com https://www.google-analytics.com https://www.googletagmanager.com https://*.doubleclick.net https://*.google.com wss://*.hotjar.com; " +
    "img-src 'self' data: https://*.hotjar.com https://www.google-analytics.com https://www.googletagmanager.com https://*.doubleclick.net https://*.google.com https://pagead2.googlesyndication.com; " +
    "style-src 'self' https: 'unsafe-inline'; " +
    "frame-src https://*.hotjar.com https://*.doubleclick.net https://*.google.com https://*.googlesyndication.com;"
  );
  
  next();
};

// Apply security middleware
app.use(securityMiddleware);

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