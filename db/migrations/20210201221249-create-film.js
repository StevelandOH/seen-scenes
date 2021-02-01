'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
         allowNull: false,
        type: Sequelize.STRING(50),
        unique: true,
      },
      director: {
         allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      releaseDate: {
         allowNull: false,
        type: Sequelize.DATEONLY
      },
      genreId: {
         allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Genres'}
      },
      posterPath: {
         allowNull: false,
        type: Sequelize.STRING(1000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Films');
  }
};
