'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Couples', [{
    Foto_Cover: 'abc',
    Kutipan: 'abcdefghijk',
    ID_Pria: '1',
    ID_Wanita: '1',
    ID_Gallery: '1',
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Couples', null, {});
  }
};
