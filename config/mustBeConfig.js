'use strict';

var Securables = require('./securables');
var Roles      = require('./roles');

module.exports = function(config){
  config.userIdentity(function(id){

    // determine if this user is authenticated or not
    id.isAuthenticated(function(user, cb){
      // note that the "user" in this case, is the user
      // that was supplied by the routeHelpers.getUser function
      var isAuthenticated = false;
      if (user) {
        isAuthenticated = user.isLoggedIn();
      }
      cb(null, isAuthenticated);
    });

  });

  config.routeHelpers(function(rh){
    // get user object that is stored on the request
    rh.getUser(function(req, cb){
      cb(null, req.user);
    });

    // default action to take when authorization fails
    rh.notAuthorized(function(req, res, next){
      res.redirect('/unauthorized');
    });

    // default action to take when user is not authenticated
    rh.notAuthenticated(function(req, res, next){
      res.redirect('/login');
    });
  });

  config.activities(function(activities){
    function allow(identity, activity){
      let user = identity.user;
      let isAllowed = false;

      console.log('ROLE USER CHECK: ' + JSON.stringify(user));
      isAllowed = Roles.isRoleAllowed(user.UserRoles, activity);
      console.log('Allow (' + activity + ')? ' + isAllowed);
      return isAllowed;
    }

    // provide a global "allow" override for special users.
    // alternatively, use the "activity" param to run logic
    // against who can / cannot access that activity
    activities.allow(function(identity, activity, cb){
      cb(null, allow(identity, activity));
    });

    // provide a global "deny" override for people that should
    // never be able to do anything.
    // alternatively, use the "activity" param to run logic
    // against who can / cannot access that activity
    activities.deny(function(identity, activity, cb){
      cb(null, !allow(identity, activity));
    });
  });
};
