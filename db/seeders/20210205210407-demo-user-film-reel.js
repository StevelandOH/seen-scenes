'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('FilmReels', [
        {userId:1, filmId:1, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:2, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:3, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:4, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:5, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:6, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:7, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:8, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:9, reelId:1, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:10, reelId:1, createdAt: new Date(), updatedAt: new Date()},

        {userId:1, filmId:21, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:22, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:23, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:24, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:25, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:26, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:27, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:28, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:29, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:30, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:31, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:32, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:33, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:34, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:35, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:1, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:2, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:4, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:5, reelId:2, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:7, reelId:2, createdAt: new Date(), updatedAt: new Date()},

        {userId:1, filmId:11, reelId:3, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:12, reelId:3, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:13, reelId:3, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:14, reelId:3, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:15, reelId:3, createdAt: new Date(), updatedAt: new Date()},

        {userId:1, filmId:10, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:33, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:1, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:4, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:3, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:21, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:12, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:22, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:13, reelId:4, createdAt: new Date(), updatedAt: new Date()},
        {userId:1, filmId:34, reelId:4, createdAt: new Date(), updatedAt: new Date()},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('FilmReels', null, {});
  }
};
