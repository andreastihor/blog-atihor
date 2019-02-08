const Tag = require('../../models').tags
const PostTag = require('../../models').postTag

module.exports.addTag = (postId,tag) => {
  console.log(tag);
  return Promise.all(tag.map(tagx => {
    return Tag.findOrCreate({
      where: { name: tagx }
    })
    .then(tagy => {
      return PostTag.create({
        postId : postId,
        tagId : tagy[0].id
      });
    })
    .then(() => true)
    .catch((err) => {
      console.error(err);
      return false;
    })
  }))
}
module.exports.updateTags = (tags,id) => {
  this.deleteTag(tags,id)
  this.addTag(id,tags)

return true
}

module.exports.deleteTag = (tags,id) => {
  return tags.map(tag => {
    return Tag.findOrCreate({
      where : {name : tag}
    })
    .then(valueTag => {
      const tagid = valueTag[0].id
      return PostTag.findAll({
        where : {postId : id}
      })
      .then(posttag => {
        posttag.map(pt => {
          pt.destroy();
        })
      })
    })
  })
}

// module,exports = {
//   deleteTag,addTag
// }
// module.exports.updateTags = (tags , id) => {
//   return Promise.all(tags.map(tagx => {
//     return Tag.findOrCreate({
//       where: { name: tagx }
//     })
//     .then(tag => {
//       const tgId = tag[0].id;
//       return   PostTag.findAll({
//         where : {
//           postId : id
//         }
//       })
//       .then(posttags => {
//         return posttags.map(posttag=> {
//           return posttag.destroy();
//         })
//
//       })
//       .then(value => {
//          tgId.map(tgid => {
//           return PostTag.create({
//             postId : id,
//             tagId : tgId
//           })
//         })
//       })
//     })
//   }))
// }
