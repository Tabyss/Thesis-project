"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Invitation.belongsTo(models.User, {
      //   as: "User",
      //   foreignKey: "ID_Undangan",
      // });
      Invitation.hasOne(models.Theme,{
        as: "Tema",
        foreignKey:"ID_Tema"
      })
    }
  }
  Invitation.init(
    {
      ID_Undangan: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ID_Tema: {
        type: DataTypes.STRING,
      },
      Nama_Pria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Nama_Wanita: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Tgl_Nikah: DataTypes.INTEGER,
      ID_Harga: DataTypes.STRING,
      ID_Pasangan: DataTypes.STRING,
      ID_Acara: DataTypes.STRING,
      ID_Tamu: DataTypes.STRING,
      ID_User: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Invitation",
    }
  );
  return Invitation;
};
