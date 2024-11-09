"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {

    static associate(models) {
      
    }
  }
  orders.init(
    {
      user_id: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL,
      shipping_type: DataTypes.STRING,
      shipping_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "orders",
      timestamps: false,
    }
  );
  return orders;
};
