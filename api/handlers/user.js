const user = require('../controllers/user')
const Joi = require('joi');

module.exports = {
  login : {
    handler : user.login,
    validate : {
      payload : {
        username : Joi.string().required().min(5),
        password : Joi.string().required()
      }
    }
  },

}
