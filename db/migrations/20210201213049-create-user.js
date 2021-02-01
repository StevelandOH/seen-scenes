'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				allowNull: false,
				type: Sequelize.STRING(20),
				unique: true,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING(100),
				unique: true,
			},
			hashedPassword: {
				allowNull: false,
				type: Sequelize.STRING.BINARY,
			},
			biography: {
				type: Sequelize.TEXT,
			},
			genreId: {
				type: Sequelize.INTEGER,
				references: { model: 'Genres' },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	},
};
