'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Pria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_Pria.init({
    Nama_Lengkap: DataTypes.STRING,
    Nama_Panggilan: DataTypes.STRING,
    Nama_Ayah: DataTypes.STRING,
    Nama_Ibu: DataTypes.STRING,
    Instagram: DataTypes.STRING,
    Facebook: DataTypes.STRING,
    Twitter: DataTypes.STRING,
    Foto_Pria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Data_Pria',
  });
  return Data_Pria;
};