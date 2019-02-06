const post = require('../controllers/post');
const Joi = require('joi')

const validatePayload = {
  title : Joi.string().required().min(5),
  content : Joi.string().required().min(5),
  tags : Joi.string().required(),
}

module.exports = {
  getPost : {
    handlers : post.getPost
  },
  searchPost : {
    handlers : post.searchPost
  },
  createPost : {
    handler : post.createPost,
    validate : {
      payload :validatePayload
    }
  },
  deletePost : {
    handler : post.deletePost,
  },
  updatePost : {
    handler : post.updatePost,
    validate : {
      payload : validatePayload
    }
  }
}
