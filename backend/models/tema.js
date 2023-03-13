'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tema.init({
    Tema_Undangan: DataTypes.STRING,
    Font_Primary: DataTypes.STRING,
    Font_Secondary: DataTypes.STRING,
    Backsound: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tema',
  });
  return Tema;
};