'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Guests', [{
    Nama_Tamu: 'abc',
    No_Telp: '123456',
    Alamat: 'Jl.jalan',
    Qr_code: 'abc',
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Guests', null, {});
  }
};
