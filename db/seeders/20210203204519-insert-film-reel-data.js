'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'FilmReels',
			[
				{
					userId: 1,
					filmId: 1,
					reelId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					filmId: 2,
					reelId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					filmId: 3,
					reelId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					filmId: 4,
					reelId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('FilmReels', null, {});
	},
};
