'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    filmId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Like.belongsTo(models.Film, {
      foreignKey: 'filmId'
    });
  };
  return Like;
};
