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

module.exports.Reply = Reply
module.exports.replySchema = replySchema
module.exports.validateReply = validateReply
