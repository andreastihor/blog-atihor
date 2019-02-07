'use strict';
module.exports = (sequelize, DataTypes) => {
  const tags = sequelize.define('tags', {
    name: DataTypes.STRING
  }, {});

  tags.associate = (models) => {
    tags.belongsToMany(models.post,{
      through : 'postTag'
    })
  }
  return tags;
};
