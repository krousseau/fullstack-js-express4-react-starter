'use strict';

var express        = require('express');
var passport       = require('passport');
var passportConfig = require('./config/passport');
var bodyParser     = require('body-parser');
var flash          = require('connect-flash');
var path           = require('path');
var session        = require('express-session');
var LocalStrategy  = require('passport-local').Strategy;

var app = express();

app.set('port', process.env.PORT || 5000);

app.use(flash()); // use connect-flash for flash messages stored in session

app.use(session({
    secret: 'somesecrethere',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
passportConfig(app, passport);

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
// app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

require('./routes/accountRoutes.js')(app, passport);

var apiRoutes = require('./routes/apiRoutes.js')(app, passport);
app.use('/api', apiRoutes);

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});
