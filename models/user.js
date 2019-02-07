'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username : DataTypes.STRING,
    password : DataTypes.STRING,
    fullname : DataTypes.STRING
  }, {});

  user.associate = function(models) {
    user.hasMany(models.post,{
      foreignKey : 'userId'
    })
  };
  return user;
};
