const Post = require('../../models').post

module.exports.addPost = (post,tags) => {
  return Post.create({
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

module.exports.deletePost = (id) => {
  return Post.findOne( {where : {id} })
  .then( (post) => {
    post.destroy();
  })
  .then(() => {
    return 1
  })
  .catch(err => {
    return 0
  })
}
