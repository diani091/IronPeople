'use strict';
module.exports = (sequelize, DataTypes) => {
  var Carts = sequelize.define('Carts', {
    session: DataTypes.STRING,
  }, {});
  Carts.associate = function(models) {
   
  };
  return Carts;
};