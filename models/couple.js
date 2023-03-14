'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Couple extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Couple.init({
    Foto_Cover: DataTypes.STRING,
    Kutipan: DataTypes.STRING,
    ID_Pria: DataTypes.STRING,
    ID_Wanita: DataTypes.STRING,
    ID_Gallery: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Couple',
  });
  return Couple;
};