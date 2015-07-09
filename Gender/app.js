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



var query = require('./database/dbQuery');

query.addNewCategory("Shop3",null,function(data){
    
    query.addNewUser("Marco",null,function(data1){
       query.addNewDiscussion("asd asd asasas","asa asas",data._id,data1._id,function(data3){
           console.log(data3);
           query.getAllDiscussion(function(data4){
               
              console.log(data4) ;
           });
       })
        
    });
    
});


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

app.use('/forum', forum);
app.use('/category', category);

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
