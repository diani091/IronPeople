// Model  to export users from database.
'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    useremail: DataTypes.STRING,
    userpassword: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.Sizes, {
      onDelete: "cascade"
    });
  };
  return users;
};