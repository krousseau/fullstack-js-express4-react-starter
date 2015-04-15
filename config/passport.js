'use strict';

var LocalStrategy = require('passport-local').Strategy;
var bcrypt        = require('bcrypt-nodejs');
var Roles         = require('./roles');
var models        = require('../models');
var msgConstants  = require('./messageConstants');
var debug         = require('debug')('passport');

function validatePassword(user, password){
    return bcrypt.compareSync(password, user.password);
}

function hashPassword(password){
    return bcrypt.hashSync(password);
}

// expose this function to our app using module.exports
module.exports = function(app, passport) {
    var User = models.user;
    var UserRole = models.userRole;
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and deserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    var curUser = null;
    passport.deserializeUser(function(id, done) {
        User.find({where: {id: id}, include: {model: UserRole, as: 'UserRoles'}})
            .then(function(user){
                done(null, user);
            });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
            // Do password and confirm password match?
            if(password !== req.body.confirmPassword){
                debug('passwords do not match');
                return done(null, false,
                  req.flash(msgConstants.REGISTER, 'Passwords do not match'));
            }

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.find({ where: { 'email': email } })
                .then(function(user){
                    // check to see if theres already a user with that email
                    if (user) {
                      return done(null, false,
                        req.flash(msgConstants.REGISTER, 'That email is already taken.'));
                    } else {
                        // if there is no user with that email create the user
                        User.create({
                          email: email,
                          password: hashPassword(password),
                          firstName: req.body.firstName,
                          lastName: req.body.lastName
                        })
                        .then(function(createdUser){
                          // Give the user the 'user' role by default
                          return UserRole.create({
                            userId: createdUser.id,
                            roleName: Roles.roles.user
                            // companyId: // TODO: this needs to be captured for this to really work
                          });
                        })
                        .then(function(createdUser){
                          return done(null, createdUser);
                        })
                        .catch(function(err){
                          console.log('Error creating user: ' + JSON.stringify(err));
                          return done(null, false,
                            req.flash(msgConstants.REGISTER, err.errors[0].value));
                        });
                    }
                });
        });

    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // ============================================== ===========================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
          var LoginHistory = models.loginHistory;
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.find({ where: { 'email': email } })
                .then(function(user){
                    // If we found the user and they have a valid password then return them
                    if (user && validatePassword(user, password)) {
                      LoginHistory.create({
                        userId: user.id
                      })
                      .then(function(createdUser){
                        return done(null, user);
                      });
                    } else {
                      // Give a generic message about user or password not found if they didn't validate
                      return done(null, false,
                        req.flash(msgConstants.LOGIN, 'Invalid email or password'));
                    }
                });
        });
    }));
};
