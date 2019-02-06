const post = require('../controllers/post');

module.exports = {
  getPost : {
    handlers : post.getPost
  },
  searchPost : {
    handlers : post.searchPost
  }
}
