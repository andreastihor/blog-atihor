const user = {
  username : 'andreas',
  password : 'test',
  fullname : 'andreas tihor'
}
// const User = require('../../models').user;

const login = (request,h) => {
  const username = request.payload.username;
  const password = request.payload.password;
  //check credentials here


  if (username == user.username) {
      if (password == user.password) {
          return user;
      }
  }

  return null;
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
