'use strict';
module.exports = (sequelize, DataTypes) => {
	const FilmReel = sequelize.define(
		'FilmReel',
		{
			userId: DataTypes.INTEGER,
			filmId: DataTypes.INTEGER,
			reelId: DataTypes.INTEGER,
		},
		{}
	);
	FilmReel.associate = function (models) {
		// joins table (no associations needed)
	};
	return FilmReel;
};
