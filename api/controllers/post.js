const Post = require('../services/post');

module.exports.createPost = (request,h) => {
  const tags = request.payload.tags
  const sucess = Post.addPost(request.payload,tags.split(','));
  if (sucess) {
    //nanti returnnya diganti meta , isinya json objects biar front end enak
    return "sucess"
  }
  return "failed!"
}
module.exports.deletePost = (request,h) => {
  const succes = Post.deletePost(request.params.id);
  if (sucess) {
    return "sucess"
  }
  return "failed"
}
