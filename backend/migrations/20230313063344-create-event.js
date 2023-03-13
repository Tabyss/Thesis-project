'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama_Acara: {
        type: Sequelize.STRING
      },
      Tgl_Acara: {
        type: Sequelize.INTEGER
      },
      Jam_Mulai: {
        type: Sequelize.STRING
      },
      Jam_Selesai: {
        type: Sequelize.INTEGER
      },
      Alamat: {
        type: Sequelize.STRING
      },
      Link_Maps: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};