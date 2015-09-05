var Sequelize = require('sequelize');
var UserRole  = require('./UserRole');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isEmail: {
                msg: 'Email address is not valid'
              }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
      },
      {
        classMethods: {
        associate: function(models) {
          console.log('associating UserRoles w/ User');
          User.hasMany(models.userRole, {as: 'UserRoles'});
        }
      }
  });

  return User;
};
