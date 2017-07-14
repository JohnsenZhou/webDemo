var express = require('express');
var url = require('url');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var proxy = require('express-http-proxy');
var AV = require('leancloud-storage');

var Router = require('./routes/routes');

var app = express();

// learncloud  SDK调用
// var APP_ID = '85xqHnQbwmWbsxRu8mmxwYru-gzGzoHsz';
// var APP_KEY = 'GHFhK5gQwluBNLU2emsCazXW';

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', handlebars({
  layoutsDir: 'views',
  defaultLayout: 'layout',
  extname: '.hbs'
}))
app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, "client", "/dist")))

app.use(Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 代理转发
app.use('/api', proxy('http://47.94.102.32:8080/', {
  proxyReqPathResolver: function(req) {
    return require('url').parse(req.url).path;
  }
}));
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
