'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Couples', {
      ID_Pasangan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Foto_Cover: {
        type: Sequelize.STRING
      },
      Kutipan: {
        type: Sequelize.STRING
      },
      ID_Pria: {
        type: Sequelize.STRING
      },
      ID_Wanita: {
        type: Sequelize.STRING
      },
      ID_Gallery: {
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
    await queryInterface.dropTable('Couples');
  }
};