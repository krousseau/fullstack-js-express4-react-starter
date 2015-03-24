'use strict';

var Securables = require('./securables');

var roleSecurablesMap = {};
var roles = {
  admin: 'admin',
  companyAdmin: 'companyAdmin',
  user: 'user'
};

function addRole(roleName){
  roleSecurablesMap[roleName] = {
    securables: {}
  };
}

function attachSecurableToRole(roleName, securable){
  roleSecurablesMap[roleName].securables[securable] = true;
}

function attachSecurableToAdmin(securable){
  attachSecurableToRole(roles.admin, securable);
}

function attachSecurableToCompanyAdmin(securable){
  attachSecurableToRole(roles.companyAdmin, securable);
}

function attachSecurableToUser(securable){
  attachSecurableToRole(roles.user, securable);
}

addRole(roles.admin);
attachSecurableToAdmin(Securables.companies);
attachSecurableToAdmin(Securables.users);

addRole(roles.companyAdmin);
attachSecurableToCompanyAdmin(Securables.users);

addRole(roles.user);

module.exports = {
  roles: roles,
  securables: roleSecurablesMap
};
