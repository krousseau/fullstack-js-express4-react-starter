'use strict';

var express        = require('express');
var passport       = require('passport');
var passportConfig = require('./config/passport');
var bodyParser     = require('body-parser');
var flash          = require('connect-flash');
var path           = require('path');
var session        = require('express-session');
var LocalStrategy  = require('passport-local').Strategy;
var mustBe         = require('mustbe');

var app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'somesecrethere',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
passportConfig(app, passport);

// set up mustbe
var mustBeConfig = require('./config/mustBeConfig');
mustBe.configure(mustBeConfig);

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.disable('x-powered-by');

// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

require('./routes/accountRoutes')(app, passport);

var apiRoutes = require('./routes/apiRoutes')(app, passport);
app.use('/api', apiRoutes);

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});
