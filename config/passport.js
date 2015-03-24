'use strict';

var LocalStrategy = require('passport-local').Strategy;
var bcrypt        = require('bcrypt-nodejs');
var Roles         = require('./roles');
var models        = require('../models');

function validatePassword(user, password){
    return bcrypt.compareSync(password, user.password);
}

function hashPassword(password){
    return bcrypt.hashSync(password);
}

// expose this function to our app using module.exports
module.exports = function(app, passport) {
    var User = models.user;
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
    passport.deserializeUser(function(id, done) {
        User.find(id)
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
                console.log('passwords do not match');
                return done(null, false, req.flash('signupMessage', 'Passwords do not match'));
            }

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.find({ where: { 'email': email } })
                .then(function(user){
                    // check to see if theres already a user with that email
                    if (user) {
                      return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        // if there is no user with that email create the user
                        User.create({
                          email: email,
                          password: hashPassword(password),
                          firstName: req.body.firstName,
                          lastName: req.body.lastName
                        })
                        .then(function(createdUser){
                          var UserRole = models.userRole;
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
                          console.log('Error creating user: ' + err);
                          return done(null, false, req.flash('signupMessage', 'Email address is not valid'));
                              // Is the email address format valid?
                              // if(!validateEmailAddress(email)){
                              //     console.log('invalid email address: ' + email);
                              //     return done(null, false, req.flash('signupMessage', 'Email address is not valid'));
                              // }
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
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.find({ where: { 'email': email } })
                .then(function(user){
                    // If we found the user and they have a valid password then return them
                    if (user && validatePassword(user, password)) {
                        return done(null, user);
                    }

                    // Give a generic message about user or password not found if they didn't validate
                    return done(null, false, req.flash('Invalid email or password'));
                });
        });
    }));
};
