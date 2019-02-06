const post = require('../controllers/post');

module.exports = {
  getPost : {
    handlers : post.getPost
  },
  searchPost : {
    handlers : post.searchPost
  },
  createPost : {
    handler : post.createPost
  },
  deletePost : {
    handler : post.deletePost
  },
  updatePost : {
    handler : post.updatePost
  }
}
