
const User = require('../services/user');
const Boom = require('boom')

module.exports.login = (request,h) => {

  const user =  User.login(request.payload)
    if (user) {
      return user
    }

  return Boom.badRequest('wrong credentials');
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
