let Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ride', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  },
  {
    classMethods: {
    associate: function(models) {
      Ride.hasMany(models.user, {as: 'Users'});
    }
  });
};
