'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Events', [{
    Nama_Acara: 'Pernikahan',
    Tgl_Acara: '1-1-2023',
    Jam_Mulai: '08.00',
    Jam_Selesai: '12.00',
    Alamat: 'Jl.jalan',
    Link_Maps: 'abc',
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
