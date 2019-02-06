'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};