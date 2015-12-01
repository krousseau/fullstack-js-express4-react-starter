"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'rides',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: 'users',
          referenceKey: 'id',
          onUpdate: 'cascade',
          onDelete: 'restrict'
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
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }).then(function(){
        done();
      });
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('rides');
    done();
  }
};
