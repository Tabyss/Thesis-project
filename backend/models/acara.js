'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Acara.init({
    Nama_Acara: DataTypes.STRING,
    Tgl_Acara: DataTypes.INTEGER,
    Jam_Mulai: DataTypes.STRING,
    Jam_Selesai: DataTypes.INTEGER,
    Alamat: DataTypes.STRING,
    Link_Maps: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Acara',
  });
  return Acara;
};