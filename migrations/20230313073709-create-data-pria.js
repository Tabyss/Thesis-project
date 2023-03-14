'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Data_Pria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama_Lengkap: {
        type: Sequelize.STRING
      },
      Nama_Panggilan: {
        type: Sequelize.STRING
      },
      Nama_Ayah: {
        type: Sequelize.STRING
      },
      Nama_Ibu: {
        type: Sequelize.STRING
      },
      Instagram: {
        type: Sequelize.STRING
      },
      Facebook: {
        type: Sequelize.STRING
      },
      Twitter: {
        type: Sequelize.STRING
      },
      Foto_Pria: {
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
    await queryInterface.dropTable('Data_Pria');
  }
};