const User = require('../services/user');
const Boom = require('boom');

module.exports.login = (request,h) => {

  const user =  User.login(request.payload)
    if (user) {
      return user
    }

  return Boom.badRequest('wrong credentials');
}
