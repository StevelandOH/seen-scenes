'use strict';
module.exports = (sequelize, DataTypes) => {
	const Genre = sequelize.define(
		'Genre',
		{
			name: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
		},
		{}
	);
	Genre.associate = function (models) {
		Genre.hasMany(models.User, { foreignKey: 'genreId' });
	};
	return Genre;
};
