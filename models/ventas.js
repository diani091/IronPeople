'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ventas = sequelize.define('Ventas', {
    item_id: DataTypes.STRING,
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    regular_price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    final_price: DataTypes.DECIMAL,
    customer: DataTypes.STRING,
    payment: DataTypes.STRING
  }, {});
  Ventas.associate = function(models) {
    // associations can be defined here
  };
  return Ventas;
};