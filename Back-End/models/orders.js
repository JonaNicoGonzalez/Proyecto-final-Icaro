"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
