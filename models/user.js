'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: DataTypes.INTEGER,
    email : DataTypes.STRING,
    password : DataTypes.STRING,
    fullname : DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
