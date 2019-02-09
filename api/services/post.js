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
    return Tag.addTag(tags,post.id)
  })
  .catch(err => {
    console.log(err);
    return {
      message: 'failed to insert!'
    }
  })
}

module.exports.getbyId = (id) => {
  return PostModel.findOne({
    include : [{
      model : TagModel
    }],
    where : {
      id : id
    }
  })
}

module.exports.deletePost = async (id) => {
  //   return PostTagModel.findAll({
  //     where : {postId : id }
  //   })
  //   .then(posttag => {
  //     posttag.map((postTag) => {
  //       return postTag.destroy();
  //     })
  //   })
  //   .then(() => {
  //       console.log('this is promise',asd);
  //       return PostModel.findOne({where : {id}})
  //       .then(postx => {
  //         return postx.destroy()
  //       })
  //   })
  // .catch(err => {
  //   return "error gan"
  // })
  const posttags = await PostTagModel.findAll({
    where : {postId : id}
  })
  posttags.map( posttag => {
    posttag.destroy()
  })
  const posttag = await PostModel.findOne({
    where : {id}
  })
  posttag.destroy();
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
  return PostModel.findAll({
    include : [{
      model: TagModel
    }]
  });
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
