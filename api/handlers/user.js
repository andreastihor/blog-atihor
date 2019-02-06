const user = require('../controllers/user')

module.exports = {
  login : {
    handler : user.login
  },
  createPost : {
    handler : user.createPost
  },
  deletePost : {
    handler : user.deletePost
  },
  updatePost : {
    handler : user.updatePost
  }
}
