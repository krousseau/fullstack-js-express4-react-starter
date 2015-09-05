module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'loginHistory',
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
    migration.dropTable('loginHistory');
    done();
  }
};
