'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('FilmReels', [
        {userId: 1, filmId: 1, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 2, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 3, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 4, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 5, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 6, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 7, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 8, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 9, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, filmId: 10, reelId: 1, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('FilmReels', null, {});
  }
};
