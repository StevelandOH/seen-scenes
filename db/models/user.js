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
		User.hasMany(models.Reel, { foreignKey: 'userId' });
	};
	return User;
};