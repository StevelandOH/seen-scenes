'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Genres',
			[
				{ name: 'Action', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Comedy', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Horror', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Drama', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Animation', createdAt: new Date(), updatedAt: new Date() },
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Genres', null, {});
	},
};
