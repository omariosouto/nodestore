const express          = require('express'),
      path             = require('path'),
      methodOverride   = require('method-override'),
      bodyParser       = require('body-parser'),
      app              = express();

// Server config
app.use(methodOverride('X­HTTP­Method'));
app.use(methodOverride('X­HTTP­Method­Override'));
app.use(methodOverride('X­Method­Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Favicon Middleware
app.use((request, response, next) => {
  if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'});
    response.end('');
  } else {
    next();
  }
});

// Router
app.use('/', require('./routes'));

// Error handling
app.use((request, response, next) => {
  const err = new Error('Not Found');
        err.status = 404;
        next(err);
});

app.use((err, request, response, next) => {
  response.status(err.status || 500).json({ err: err.message });
});

// Server listener
module.exports = app;