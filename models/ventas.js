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
    payment: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    total_sales: DataTypes.DECIMAL,
    customer_name: DataTypes.STRING,
    sales_person: DataTypes.STRING
  }, {});
  Ventas.associate = function(models) {
    // associations can be defined here
  };
  return Ventas;
};