const Post = require('../../models').post

module.exports.addPost = (post,tags) => {
  return tags
  Post.create({
    title : post.title,
    content : post.content,
    tags : tags,
    created_at : new Date(),
    updated_at : new Date()
  })
  .then(() => {
    return 1
  })
  .catch(err => {
    console.log(err);
  })
}
