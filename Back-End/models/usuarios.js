"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    
    static associate(models) {
    
    }
  }
  usuarios.init(
    {
      isAdmin: DataTypes.BOOLEAN,
      firstName: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      password: DataTypes.STRING,
      telephone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usuarios",
      timestamps: false,
    }
  );
  return usuarios;
};
