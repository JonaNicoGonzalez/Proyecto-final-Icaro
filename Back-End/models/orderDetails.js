"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderDetails extends Model {
  
    static associate(models) {
     
    }
  }
  orderDetails.init(
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "orderDetails",
      timestamps: false,
    }
  );
  return orderDetails;
};
