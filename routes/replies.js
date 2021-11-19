// const { Reply, validateReply } = require('../models/replies')
// const { Comment, validateComment } = require('../models/comments')

// const express = require('express')
// const router = express.Router()

// router.post('./:commentId/replies/:replyId', async (req, res) => {
//   try {
//     const reply = await Reply.findById(req.params.replyId)
//     if (!reply) return res.status(400).send(`
//       The reply with id: "${req.params.replyId}" does not exist.
//     `)

//     const comment = await Comment.findById(req.params.commentId) 
//     if (!comment) return res.status(400).send(`
//       The comment with id: "${req.params.commentId}" does not exist.
//     `)

//     comment.reply.push(reply)
//   }
// })
