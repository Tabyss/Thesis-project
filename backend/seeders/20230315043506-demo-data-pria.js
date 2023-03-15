'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Data_Pria', [{
    Nama_Lengkap: 'Abcdef',
    Nama_Panggilan: 'Abc',
    Nama_Ayah: 'Abcd',
    Nama_Ibu: 'Abcde',
    Instagram: 'instagram',
    Facebook: 'facebook',
    Twitter: 'twitter',
    Foto_Pria: 'abc',
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Data_Pria', null, {});
  }
};
