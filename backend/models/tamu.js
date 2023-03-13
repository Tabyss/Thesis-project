'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tamu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tamu.init({
    Nama_Tamu: DataTypes.STRING,
    No_Telp: DataTypes.INTEGER,
    Alamat: DataTypes.STRING,
    Qr_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tamu',
  });
  return Tamu;
};