'use strict';
module.exports = (sequelize, DataTypes) => {
	const Reel = sequelize.define(
		'Reel',
		{
			name: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER,
			},
		},
		{}
	);
	Reel.associate = function (models) {
		Reel.belongsToMany(models.User, {
			foreignKey: 'reelId',
			otherKey: 'userId',
			through: 'FilmReels',
		});
		Reel.belongsToMany(models.Film, {
			foreignKey: 'reelId',
			otherKey: 'filmId',
			through: 'FilmReels',
		});
	};
	return Reel;
};
