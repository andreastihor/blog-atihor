const User = require('../services/user');
const Boom = require('boom');
const jwt = require('jsonwebtoken')

module.exports.login = (request,h) => {

  return User.login(request.payload)
  .then((user) => {
    if (user == "false") {
      return "false"
    }
    const token = jwt.sign({user}, 'secret');
    request.cookieAuth.set({user:token})
    return token
  })
  .catch(err => {
    console.log(err);
  })

  return Boom.badRequest('wrong credentials');
}
