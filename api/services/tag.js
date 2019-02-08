const Tag = require('../../models').tags
const PostTag = require('../../models').postTag
const bluebird = require('bluebird')

module.exports.addTag = async (tags,postId) => {
  // return tags.map(tag => {
  //   return Tag.findOrCreate({
  //     where : {name : tag}
  //   })
  //   .then(tags => {
  //     tags.map(tag => {
  //       console.log('mask addtag============')
  //       console.log(tag)
  //       console.log(tag.dataValues.id);
  //       return PostTag.create({
  //         postId : postId,
  //         tagId : tag.dataValues.id
  //       })
  //     })
  //     })
  // })
  return tags.map(async tag => {
    // console.log(tag)
    const tagsFind = await Tag.findOrCreate({where : {name : tag}})
    tagsFind.map(tag => {
      // console.log('tag====>>',tag.dataValues.id)
      var id = tag.dataValues.id
      // console.log('id===>',id)
      return  PostTag.create({
       postId : postId,
       tagId : id
      })
    })
  })

}
module.exports.updateTags = (tags,id) => {
  // Promise.mapSeries([this.addTag(id,tags),this.deleteTag(tags,id)], update=> update())
  // .then(() => {
  //   return Promise.resolve(true)
  // })
  // this.deleteTag(tags,id).then(() => {
    this.addTag(tags,id)
  // })
}

module.exports.deleteTag = (tags,id) => {
  // return tags.map(tag => {
  //   return Tag.findOrCreate({
  //     where : {name : tag}
  //   })
  //   .then(values => {
  //     console.log('===values====',values);
  //     return PostTag.findOne({
  //       where : {tagId : values[0].dataValues.id}
  //     })
  //     .then(posttag => {
  //       console.log()
  //       return posttag.destroy();
  //     })
  //   })
  // })

  return PostTag.findAll({
    where : {
      postId : id
    }
  })
  .then(posttag => {
    posttag.map(posttg => {
      // console.log(posttg.des);
      posttg.destroy()
    })
  })
}
