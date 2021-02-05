'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reels', [{
        name: 'Watched',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reels', null, {});
  }
};
