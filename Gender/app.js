var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//need for connect and add all the schem

require('./database/databaseInit');

var forum = require('./routes/forum');
var category = require('./routes/category');
var discussion = require('./routes/discussion');
var attachment = require('./routes/attachment');
var address = require('./routes/address');
var user = require('./routes/user');


var attachment = require('./routes/attachment');


var query = require('./database/dbQuery');




var app = express();

// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views/'));

app.set('view engine', 'jade');


//INIT ROUTER

app.use('/forum', forum);
app.use('/category', category);
app.use('/discussion', discussion);
app.use('/user', user);
app.use('/attachment',attachment);
app.use('/address', address);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
