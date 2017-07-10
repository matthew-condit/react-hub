const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


// START Routes
const index = require('./routes/index');
const users = require('./routes/users');
const messages = require('./routes/messages');
const groceries = require('./routes/groceries');
const mbta = require('./routes/mbta');
const news = require('./routes/news');
const sports = require('./routes/sports');
const todo = require('./routes/todo');
const weather = require('./routes/weather');
const traffic = require('./routes/traffic');
// END Routes

// DECLARATION app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// START route injection
app.use('/', index);
app.use('/users', users);
app.use('/messages', messages);
app.use('/groceries', groceries);
app.use('/mbta', mbta);
app.use('/news', news);
app.use('/sports', sports);
app.use('/todo', todo);
app.use('/todo', todo);
app.use('/weather', weather);
app.use('/traffic', traffic);
// END route injection


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
