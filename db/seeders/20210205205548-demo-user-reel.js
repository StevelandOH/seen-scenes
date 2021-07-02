'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reels', [
        {
          name: 'Watched',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Favorite Movie\'s',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Horror Movie\'s',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Top 10',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Want To Watch',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
  ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reels', null, {});
  }
};
