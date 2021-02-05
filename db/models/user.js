'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			username: {
				type: DataTypes.STRING(20),
				allowNull: false,
				unique: true,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: false,
				unique: true,
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
			},
			biography: {
				type: DataTypes.TEXT,
			},
			genreId: {
				type: DataTypes.INTEGER,
			},
		},
		{}
	);
	User.associate = function (models) {
		User.belongsTo(models.Genre, { foreignKey: 'genreId' });
		User.belongsToMany(models.Film, {
			foreignKey: 'userId',
			otherKey: 'thumbsUp',
			through: 'Reviews',
		});
		User.belongsToMany(models.Reel, {
			foreignKey: 'userId',
			otherKey: 'reelId',
			through: 'FilmReels',
		});
		User.belongsToMany(models.Film, {
			foreignKey: 'userId',
			otherKey: 'filmId',
			through: 'FilmReels',
		});
		User.belongsToMany(models.Film, {
			foreignKey: 'userId',
			otherKey: 'filmId',
			through: 'Reviews',
    });
    // const columnMapping = {
    //   foreignKey: 'userId',
    //   through: 'Likes',
    //   otherKey: 'filmId'
    // }
    // User.belongsToMany(models.Film, { columnMapping })
    User.hasMany(models.Like, { foreignKey: 'userId' });
	};
	return User;
};
