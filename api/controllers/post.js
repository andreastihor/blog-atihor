const Post = require('../services/post');
const Tag = require('../services/tag')

const ModelTag = require('../../models').tags
const ModelPost = require('../../models').post
const ModelUser = require('../../models').user

module.exports.createPost = (request,h) => {
  const userLogin =  request.state.session
  if (!userLogin) {
    return "false"
  }
  const tags = request.payload.tags
  const sucess = Post.addPost(request.payload,tags.split(','),userLogin.user);
  return sucess
  if (sucess) {
    return "sucess"
  }
  return "failed"

}
module.exports.deletePost = (request,h) => {
  const userLogin =  request.state.session
  if (!userLogin) {
    return "false"
  }
  const sucess = Post.deletePost(request.params.id);
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

module.exports.searchPost = async (request,h) => {
  var tags = request.params.tags
 tags = tags.split(',')
 var articles =[]
 for (let i=0 ;i<tags.length;i++) {
   const searchService = await Post.search(tags[i])
   articles.push(searchService)
 }

 return articles

}
