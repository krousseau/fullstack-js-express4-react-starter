var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('userRole', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        roleName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        companyId: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
    });
};
