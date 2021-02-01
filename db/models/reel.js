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
		Reel.belongsTo(models.User, { foreignKey: 'userId' });
	};
	return Reel;
};
