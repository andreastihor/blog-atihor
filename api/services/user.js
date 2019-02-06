const User = require('../../models').user

module.exports.login = (user) => {
  return User.findOne({where : {username : user.username}})

}
