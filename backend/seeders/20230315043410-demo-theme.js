'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Themes', [{
    Tema_Undangan: 'flower',
    Font_Primary: 'abc',
    Font_Secondary: 'abc',
    Backsound: 'abc',
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Themes', null, {});
  }
};
