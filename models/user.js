"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      User.hasMany(models.Invitation, {
        as: "invite",
        foreignKey: "ID_Undangan",
      });
    }
  }
  User.init(
    {
      ID_User: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Nama_User: { type: DataTypes.STRING },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      No_Telp: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Foto_Profile: DataTypes.STRING,
      Role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
