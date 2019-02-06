const user = require('./handlers/user');
const post = require('./handlers/post');

module.exports = {
  register : (server) => {
  server.route([

    // {method : 'GET' , path : '/{username}/post/get' , options: post.getPost },
    // {method : 'GET' , path : '/{username}/{tags}/{post}/get' , options: post.searchPost },
    {method : 'POST' , path : '/signin' , options: user.login  },
    {method : 'POST' , path : '/createPost' , options: user.createPost },
    {method : 'PUT' , path : '/{post}/update' , options: user.updatePost  },
    {method : 'DELETE' , path : '/{post}/delete' , options: user.deletePost  },


  ])
},
name : 'api-plugin'
}
