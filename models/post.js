'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId : DataTypes.INTEGER
  }, {});

  post.associate = (models) => {
    post.belongsToMany(models.tags,{
      through : 'postTag'
    });
    post.belongsTo(models.user,{
      foreignKey : 'userId'
    });
  }
  return post;
};
