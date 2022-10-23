var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 
var session = require('express-session');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var projectsRouter = require('./routes/myprojects');
var servicesRouter = require('./routes/services');
var contactRouter = require('./routes/contact');
//new Routers for assignment 2
var businessRouter = require('./routes/businesspage');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var userstatusRouter = require('./routes/userstatus');
var logoutRouter = require('./routes/logout');

const mongoose = require('mongoose');

const passport = require('passport');


const { fileLoader } = require('ejs');
const { writeHeapSnapshot } = require('v8');

var app = express();

// Passport Config plus we pass passport from here to config
require('./config/passport')(passport);


//MongoDB Atlas

//databasekey
const db = require('./config/databasekey').MongoURI;

//connection to atlas using mongoose for simplicity using documentation 
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo Atlas Connected"))
  .catch(err => console.log(err));


//Bodyparser
app.use(express.urlencoded({ extended: false }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/* For some reason my images from public folder wasnot 
getting shown so I found this solution from stackoverflow:
https://stackoverflow.com/questions/5924072/express-js-cant-get-my-static-files-why
 */
app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));


// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/myprojects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);

app.use('/businesspage', businessRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/userstatus', userstatusRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
