
const User = require('../services/user');
const Boom = require('boom')

const login = (request,h) => {

  const user =  User.login(request.payload)
  if (user) {
    return user
  }

  return Boom.badRequest('wrong credentials');
}

const createPost = (request,h) => {
  const title  = request.payload.title;
  const content = request.payload.content;
  const tags = request.payload.tags;
  const tag = tags.split(',')

  const blog = {
    title : title,
    content : content,
    tags : tags
  }
  return blog;
}

const deletePost = (request,h) => {
  const id = request.params.post;
  // delete disini
  return null;
}

const updatePost = (request,h) => {
  const id = request.params.post
  //search for post here
  const title  = request.payload.title;
  const content = request.payload.content;
  const tags = request.payload.tags;
  const tag = tags.split(',')
  //masukin data disni
  return "sucess"
}

module.exports = {
  login , createPost , deletePost , updatePost
}
