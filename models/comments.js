const mongoose = require('mongoose')
const Joi = require('joi')

const commentSchema = new mongoose.Schema({
  videoID: { type: String, required: true },
  text: { type: String, require: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  replies: [{ type: replySchema }],
})

const Comment = mongoose.model('Comment', commentSchema)

const validateComment = (comment) => {
  const schema = Joi.object({
    text: Joi.string().min(4).max(255).required(),
  })
  return schema.validate(comment)
}

module.exports.Comment = Comment
module.exports.commentSchema = commentSchema
module.exports.validateComment = validateComment
