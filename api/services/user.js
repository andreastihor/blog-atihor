const User = require('../../models').user

module.exports.login = (user) => {
  return  User.findOne({where : {username : user.username}})
  .then(userx => {

    if (userx.password == user.password) {
      return userx

    }
    return "password salah"
  })
  .catch(err => {
    console.log(err);
    return  "credentials salah"
  })
}
