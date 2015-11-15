'use strict';

let Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
