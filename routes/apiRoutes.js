'use strict';

let express    = require('express');
let models     = require('../models');
let Securables = require('../config/securables');
let mustbe     = require('mustbe').routeHelpers();

/*eslint-disable*/
let router  = express.Router();
/*eslint-enable*/

// These routes all route to /api/

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
  // models
  let User    = models.user;
  let Company = models.company;

  router.use(ensureAuthenticated);

  router.route('/companies')
    .get(mustbe.authorized(Securables.viewCompanies, function(req, res) {
      Company.findAll()
          .then(function(companies) {
            res.send(companies);
          })
          .catch(function(err) {
            res.send('error: ' + err);
          });
    }));

  router.route('/users')
    .get(mustbe.authorized(Securables.viewUsers, function(req, res) {
      User.findAll()
          .then(function(users) {
            res.send(users);
          })
          .catch(function(err) {
            res.send('error: ' + err);
          });
    }));

  return router;
};
