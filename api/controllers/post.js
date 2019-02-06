const Post = require('../services/post');

module.exports.createPost = (request,h) => {
  const userLogin =  request.state.session
  if (!userLogin) {
    return "false"
  }
  const tags = request.payload.tags
  const sucess = Post.addPost(request.payload,tags.split(','),userLogin.user);
  if (sucess) {
    //nanti returnnya diganti meta , isinya json objects biar front end enak
    return "sucess"
  }
  return "failed!"
}
module.exports.deletePost = (request,h) => {
  const userLogin =  request.state.session
  if (!userLogin) {
    return "false"
  }
  const succes = Post.deletePost(request.params.id);
  if (sucess) {
    return "sucess"
  }
  return "failed"
}

module.exports.updatePost = (request,h) => {
  const userLogin =  request.state.session
  if (!userLogin) {
    return "false"
  }
  const tags = request.payload.tags;
  const id = request.params.id;
  const sucess = Post.updatePost(id,request.payload,tags.split(','));
  if (sucess) {
    return "sucess"
  }
  return "failed"
}

module.exports.getPost = (request,h) => {
  return Post.getAll();
}

module.exports.searchPost = (request,h) => {
  const tags = request.params.tags
  return Post.search(tags.split(','));
}
