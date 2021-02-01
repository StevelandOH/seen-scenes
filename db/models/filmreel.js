'use strict';
module.exports = (sequelize, DataTypes) => {
  const FilmReel = sequelize.define('FilmReel', {
    filmId: DataTypes.INTEGER,
    reelId: DataTypes.INTEGER
  }, {});
  FilmReel.associate = function(models) {
    // associations can be defined here
  };
  return FilmReel;
};
