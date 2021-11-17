const mongoose = require('mongoose')
const Joi = require('joi')

const replySchema = new mongoose.Schema({
  text: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
})

const Reply = mongoose.model('Reply', replySchema)

const validateReply = (reply) => {
  const schema = Joi.object({
    text: Joi.string().min(2).max(255).required(),
  })
  return schema.validate(reply)
}

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
module.exports.Reply = Reply
module.exports.commentSchema = commentSchema
module.exports.replySchema = replySchema
