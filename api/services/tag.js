const Tag = require('../../models').tags
const PostTag = require('../../models').postTag
module.exports.addTag = (postId,tag) => {
  return Promise.all(tag.map(tagx => {
    return Tag.findOrCreate({
      where: { name: tagx }
    })
    .then(tagy => {
      return PostTag.create({
        postId : postId,
        tagId : tagy[0].id
      });
    })
    .then(() => true)
    .catch((err) => {
      console.error(err);
      return false;
    })
  }))
}
