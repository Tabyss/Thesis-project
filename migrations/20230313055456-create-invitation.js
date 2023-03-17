'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invitations', {
      ID_Undangan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      ID_Tema: {
        type: Sequelize.STRING,
      },
      Nama_Pria: {
        type: Sequelize.STRING
      },
      Nama_Wanita: {
        type: Sequelize.STRING
      },
      Tgl_Nikah: {
        type: Sequelize.INTEGER
      },
      ID_Harga: {
        type: Sequelize.STRING
      },
      ID_Pasangan: {
        type: Sequelize.STRING
      },
      ID_Acara: {
        type: Sequelize.STRING
      },
      ID_Tamu: {
        type: Sequelize.STRING
      },
      ID_User: {
        type: Sequelize.STRING,
        
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
    await queryInterface.dropTable('Invitations');
  }
};