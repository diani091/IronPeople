'use strict';
module.exports = (sequelize, DataTypes) => {
  var Carts = sequelize.define('Carts', {
    item_id: DataTypes.STRING,
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    regular_price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    customer_name: DataTypes.STRING
  }, {});
  Carts.associate = function(models) {
    // associations can be defined here
  };
  return Carts;
};