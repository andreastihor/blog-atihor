const user = require('./handlers/user');
const post = require('./handlers/post');

module.exports = {
  register : (server) => {
    server.route([
      {method : 'GET' , path : '/' , options: post.getPost},
      {method : 'GET' , path : '/search/{tags}' , options: post.searchPost },
      {method : 'POST' , path : '/signin' , options: user.login  },
      {method : 'POST' , path : '/createPost' , options: post.createPost },
      {method : 'PUT' , path : '/{id}/updatePost' , options: post.updatePost  },
      {method : 'DELETE' , path : '/{id}/deletePost' , options: post.deletePost  },


    ])
},
name : 'api-plugin'
}
