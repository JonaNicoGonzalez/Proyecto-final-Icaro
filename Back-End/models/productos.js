'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {

    static associate(models) {
     
    }
  }
  productos.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    categoria: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productos',
    timestamps: false,
  });
  return productos;
};