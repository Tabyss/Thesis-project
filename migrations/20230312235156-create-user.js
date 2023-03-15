'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      ID_User: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama_User: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      No_Telp: {
        type: Sequelize.BIGINT
      },
      Password: {
        type: Sequelize.STRING
      },
      Foto_Profile: {
        type: Sequelize.STRING
      },
      Role: {
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
    await queryInterface.dropTable('Users');
  }
};