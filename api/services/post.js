const PostModel = require('../../models').post
const Tag = require('./tag');
const TagModel = require('../../models').tags;
const PostTagModel = require('../../models').postTag

module.exports.addPost = (post,tags,user) => {

  return PostModel.create({
    title : post.title,
    content : post.content,
    userId : user.id,
    created_at : new Date(),
    updated_at : new Date()
  })
  .then((post) => {
    return Tag.addTag(post.id,tags)
  })
  .catch(err => {
    console.log(err);
    return {
      message: 'failed to insert!'
    }
  })
}

module.exports.deletePost = (id) => {
  return PostModel.findOne( {where : {id} })
  .then( (post) => {
    // post.destroy();
  })
  .then((post) => {
    return PostTagModel.findAll({
      where : {postId : id }
    })
    .then(posts => {
      posts.map((post) => {
        post.destroy();
      })
      .then(() => {
        return 1
      })
    })
  })
  .catch(err => {
    return 0
  })
}

module.exports.updatePost = (id,payload,tags) => {
   return PostModel.findOne({where : {id}})
    .then((post) => {
    return   post.update({
        title : payload.title,
        content : payload.content,
        updated_at : new Date()
      })
        .then(() => {
          return Tag.updateTags(tags,id)
        })
    })

}

module.exports.getAll = () => {
  return PostModel.findAll();
}

module.exports.search = (tag) => {
    return TagModel.findOne({
      where : {
        name : tag
      }
    })
    .then(tagx => {
      return PostTagModel.findAll({
        include : [{
          model : PostModel
        },{
          model: TagModel
        }],
          where : {
            tagId : tagx.id
          }
      })
    })
    .then(articles=> {
      return Promise.resolve(articles[0])
    })
    .catch(err => {
      return {message: 'id undefined!'}
    })

}
