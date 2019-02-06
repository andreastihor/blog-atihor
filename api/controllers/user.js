const User = require('../services/user');
const Boom = require('boom');

module.exports.login = (request,h) => {

  return User.login(request.payload)
  .then((user) => {
    if (user == "false") {
      return "false"
    }
    request.cookieAuth.set({user})
    return Promise.resolve(true)
  })
  .catch(err => {
    console.log(err);
  })

  return Boom.badRequest('wrong credentials');
}
