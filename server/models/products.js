'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.products.belongsToMany(models.orders, {through: 'product_orders', foreignKey: 'productId'});
    }
  };
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    size: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};