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
attachSecurableToAdmin(Securables.viewCompanies);
attachSecurableToAdmin(Securables.viewUsers);

addRole(roles.companyAdmin);
attachSecurableToCompanyAdmin(Securables.viewUsers);

addRole(roles.user);

module.exports = {
  roles: roles,
  isRoleAllowed: function(userRoles, securable){
    var isAllowed = false;
    userRoles.forEach(role => {
      var roleSecurables = roleSecurablesMap[role.roleName];
      if(roleSecurables.securables[securable]){
        isAllowed = true;
        return;
      }
    });
    return isAllowed;
  }
};
