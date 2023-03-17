"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Theme.belongsTo(models.Invitation, {
        as: "Invite",
        foreignKey: "ID_Tema",
      });
    }
  }
  Theme.init(
    {
      ID_Tema: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Theme_Undangan: DataTypes.STRING,
      Font_Primary: DataTypes.STRING,
      Font_Secondary: DataTypes.STRING,
      Backsound: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
