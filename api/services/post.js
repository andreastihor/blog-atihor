const Post = require('../../models').post

module.exports.addPost = (post,tags,user) => {

  return Post.create({
    title : post.title,
    content : post.content,
    userId : user.id,
    tags : tags,
    created_at : new Date(),
    updated_at : new Date()
  })
  .then(() => {
    return 1
  })
  .catch(err => {
    console.log(err);
    return 0
  })
}

module.exports.deletePost = (id) => {
  return Post.findOne( {where : {id} })
  .then( (post) => {
    post.destroy();
  })
  .then(() => {
    return 1
  })
  .catch(err => {
    return 0
  })
}

module.exports.updatePost = (id,payload,tag) => {
   return Post.findOne({where : {id}})
    .then((post) => {
      post.update({
        title : payload.title,
        content : payload.content,
        tags : tag,
        updated_at : new Date()
      })
        .then(() => 1)
    })

}

module.exports.getAll = () => {
  return Post.findAll();
}

module.exports.search = (tag) => {
  return Post.findAll({
  }).then (user => {
    console.log(user);
    //blm kelar
  })
}
