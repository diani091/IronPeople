'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bags = sequelize.define('Bags', {
    item_id: DataTypes.STRING,
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    regular_price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    customer: DataTypes.STRING
  }, {});
  Bags.associate = function(models) {
    // associations can be defined here
  };
  return Bags;
};