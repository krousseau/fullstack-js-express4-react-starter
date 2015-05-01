'use strict';

var msgConstants = require('../config/messageConstants');

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = function(app, passport) {
    // --------------------------------- GETS --------------------------------------

    app.get('/', ensureAuthenticated, function(req, res) {
      res.render('reactApp');
    });

    app.get('/', ensureAuthenticated, function(req, res) {
      res.render('adminApp');
    });

    app.get('/login', function(req, res){
        res.render('login', {
          messages: req.flash(msgConstants.LOGIN)
        });
    });

    app.get('/register', function(req, res){
      res.render('register', {
        messages: req.flash(msgConstants.REGISTER)
      });
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/login');
    });

    app.get('/unauthorized', ensureAuthenticated, function(req, res) {
        res.render('unauthorized');
    });

    // --------------------------------- POSTS -------------------------------------

    app.post('/registerUser', passport.authenticate('local-signup', {
        successRedirect: '/',         // redirect to the home page
        failureRedirect: '/register', // redirect back to the register page if there is an error
        failureFlash: true
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',         // redirect to the home page
        failureRedirect: '/login',    // redirect back to the login page if there is an error
        failureFlash: true
    }));
};
