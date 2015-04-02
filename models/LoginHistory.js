'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('loginHistory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    },{
      tableName: 'loginHistory'
    });
};
