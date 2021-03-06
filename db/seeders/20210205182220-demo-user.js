'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        username: "demouser",
        email: "demouser@gmail.com",
        hashedPassword: "$2a$10$dbbEnRWmq3yrFJJoKCrsceQZc/lYujjVuZwjYLR8RmtIgo5wI2Pa6",
        biography: "I am an avid action movie watcher and connoisseur, I have watched all of the original trilogy of Star Wars enough to give an accurate recount of every scene. My favorite genres are action and science fiction. I am planning on binging the entire Lord Of The Rings extended edition in just one weekend.",
        genreId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});

  }
};
