const Post = require('../services/post');

module.exports.createPost = (request,h) => {
  const tags = request.payload.tags
  const sucess = Post.addPost(request,tags.split(','));
  if (sucess) {
    return "sucess"
  }
  return "failed!"
}
