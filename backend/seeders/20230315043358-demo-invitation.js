'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Invitations', [{
    ID_Tema: '1',
    Nama_Pria: 'Aditama',
    Nama_Wanita: 'Anggun',
    Tgl_Nikah: '1-01-2023',
    ID_Harga: '1',
    ID_Pasangan: '1',
    ID_Acara: '1',
    ID_Tamu: '1',
    ID_User:'1',
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Invitations', null, {});
  }
};
