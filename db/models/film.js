'use strict';
module.exports = (sequelize, DataTypes) => {
	const Film = sequelize.define(
		'Film',
		{
			title: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
			},
			director: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			releaseDate: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			genreId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			posterPath: {
				type: DataTypes.STRING(1000),
				allowNull: false,
			},
		},
		{}
	);
	Film.associate = function (models) {
		Film.belongsTo(models.Genre, { foreignKey: 'genreId' });
		Film.belongsToMany(models.User, {
			foreignKey: 'filmId',
			otherKey: 'userId',
			through: 'Join',
		});
		Film.belongsToMany(models.User, {
			foreignKey: 'filmId',
			otherKey: 'thumbsUp',
			through: 'Join',
		});
		Film.belongsToMany(models.Reel, {
			foreignKey: 'filmId',
			otherKey: 'reelId',
			through: 'FilmReels',
		});
		Film.belongsToMany(models.User, {
			foreignKey: 'filmId',
			otherKey: 'userId',
			through: 'FilmReels',
		});
	};
	return Film;
};
