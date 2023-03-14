'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      Nama_User: 'admin',
      Email: 'admin@gmail.com',
      No_Telp: '08123456789',
      Password: 'admin',
      Foto_Profile: '',
      Role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
