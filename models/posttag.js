'use strict';
module.exports = (sequelize, DataTypes) => {
  const postTag = sequelize.define('postTag', {
    tagId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  postTag.associate = function(models) {
    postTag.belongsTo(models.post, {
      foreignKey : 'postId'
    });
    postTag.belongsTo(models.tags, {
      foreignKey : 'tagId'
    })
  };
  return postTag;
};
