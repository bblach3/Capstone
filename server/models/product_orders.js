'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.product_orders.hasOne(models.products, {foreignKey: 'productId'});
      models.product_orders.hasOne(models.orders, {foreignKey: 'orderId'});
    }
  };
  product_orders.init({
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_orders',
  });
  return product_orders;
};