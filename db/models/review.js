'use strict';

const reel = require('./reel');

module.exports = (sequelize, DataTypes) => {
	const Review = sequelize.define(
		'Review',
		{
			review: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			userId: DataTypes.INTEGER,
			filmId: DataTypes.INTEGER,
			thumbsUp: DataTypes.BOOLEAN,
		},
		{}
	);
	Review.associate = function (models) {
    // joins table (no associations needed)
	};
	return Review;
};
