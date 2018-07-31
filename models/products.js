'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    item_id: DataTypes.STRING,
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cost: DataTypes.DECIMAL,
    regular_price: DataTypes.DECIMAL,
    discount: DataTypes.INTEGER,
    pre_order: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    models.Carts.belongsToMany(models.Products,
    {
      through: "productCart",
      as:"products",
      foreignkey: "id",
    });
  };
  return Products;
};