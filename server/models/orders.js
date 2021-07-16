'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.orders.hasOne(models.users, {foreignKey: 'userId'});
      models.orders.belongsToMany(models.products, {through: 'product_orders', foreignKey: 'orderId'});
    }
  };
  orders.init({
    userId: DataTypes.INTEGER,
    transactionId: DataTypes.STRING,
    payment_method: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};