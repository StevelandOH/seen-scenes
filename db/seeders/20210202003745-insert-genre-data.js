'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Genres',
			[
				{ id: 1, name: 'Action', createdAt: new Date(), updatedAt: new Date() },
				{ id: 2, name: 'Comedy', createdAt: new Date(), updatedAt: new Date() },
				{ id: 3, name: 'Horror', createdAt: new Date(), updatedAt: new Date() },
				{ id: 4, name: 'Drama', createdAt: new Date(), updatedAt: new Date() },
				{ id: 5, name: 'Animation', createdAt: new Date(), updatedAt: new Date() },
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Genres', null, {});
	},
};
