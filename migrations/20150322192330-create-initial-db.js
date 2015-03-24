'use strict';
var Promise = require('bluebird');

function createUserRolesTable(migration, DataTypes){
    return migration.createTable(
        'userRoles',
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
            roleName: {
              type: DataTypes.STRING,
              allowNull: false
            },
            companyId: {
              type: DataTypes.INTEGER,
              allowNull: true,
              references: 'companies',
              referenceKey: 'id',
              onUpdate: 'cascade',
              onDelete: 'restrict'
            },
            createdAt: {
              type: DataTypes.DATE
            },
            updatedAt: {
              type: DataTypes.DATE
            }
        }
    ).then(function(){
      migration.addIndex(
        'userRoles',
        ['userId', 'roleName', 'companyId'],
        {
          indexName: 'UserRoleUniqueIndex',
          indicesType: 'UNIQUE'
        }
      );
    });
}

function createUsersTable(migration, DataTypes){
    return migration.createTable(
        'users',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            }
        }
    ).then(function(){
      migration.addIndex(
        'users',
        ['email'],
        {
          indexName: 'EmailUniqueIndex',
          indicesType: 'UNIQUE'
        }
      );
    });
}

function createCompaniesTable(migration, DataTypes){
    return migration.createTable(
        'companies',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    ).then(function(){
        migration.sequelize.query("INSERT INTO companies(name, \"createdAt\", \"updatedAt\") VALUES ('Skirack', current_timestamp, current_timestamp)");
        migration.sequelize.query("INSERT INTO companies(name, \"createdAt\", \"updatedAt\") VALUES ('Fitwerx', current_timestamp, current_timestamp)");
    });
}

module.exports = {
    up: function(migration, DataTypes, done) {
        Promise.all([
            createCompaniesTable(migration, DataTypes),
            createUsersTable(migration, DataTypes)
        ])
        .then(function(){
          return createUserRolesTable(migration, DataTypes);
        })
        .then(function() {
            done();
        });
    },

    down: function(migration, DataTypes, done) {
        // add reverting commands here, calling 'done' when finished
        migration.dropTable('users');
        migration.dropTable('companies');
        migration.dropTable('userRoles');
        done();
    }
};
