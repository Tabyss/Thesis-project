'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Undangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Undangan.init({
    ID_Tema: DataTypes.STRING,
    Nama_Pria: DataTypes.STRING,
    Nama_Wanita: DataTypes.STRING,
    Tgl_Nikah: DataTypes.INTEGER,
    ID_Harga: DataTypes.STRING,
    ID_Pasangan: DataTypes.STRING,
    ID_Acara: DataTypes.STRING,
    ID_Tamu: DataTypes.STRING,
    ID_User: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Undangan',
  });
  return Undangan;
};