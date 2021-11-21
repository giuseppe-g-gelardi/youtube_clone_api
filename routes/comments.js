const { Comment, Reply, validateComment, validateReply } = require('../models/comments')
const express = require('express')
const router = express.Router()

// get all comments
router.get('/', async (req, res) => {
  try { 
    const comments = await Comment.find()
    return res.send(comments)
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`)
  }
})

// get single comment
router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)

    if (!comment) return res.status(400).send(`
      The comment with id: "${req.params.id}" does not exist.
    `)

    return res.send(comment)
  } catch (err) {
    return res.status(500).send(`
      Internal Server Error: ${err}
    `)
  }
})

// add comment
router.post('/', async (req, res) => {
  try {
    const { error } = validateComment(req.body)

    if (error) return res.status(400).send(error)
  
    const comment = new Comment({
      videoID: req.body.videoID,
      text: req.body.text,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
      replies: req.body.replies
    })

    await comment.save()

    return res.send(comment)
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`)
  }
})

// delete comment
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id)

    if (!comment) return res.status(400).send(`
      The comment with id: "${req.params.id}" does not exist.
    `)

    return res.send(comment)
  } catch (err) {
    return res.status(500).send(`Internal Server Error ${err}`)
  }
})

//update comment 
router.put('/:id', async (req, res) => {
  try {
    // const { error } = validate(req.body)
    // if (error) return res.status(400).send(error)
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        videoID: req.body.videoID,
        text: req.body.text,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        replies: req.body.replies
      },
      { new: true }
    )
    // if (!comment) return res.status(400).send(`
    //   The comment with id: "${req.params.id}" does not exist.
    // `)
    // await comment.save()
    return res.send(comment)
  } catch (err) {
    return res.send(500).send(`Internal Server Error: ${err}`)
  }
})
// ! the commented out code causes 'ERR_HTTP_HEADERS_SENT' error



// TODO replies start here

// * c /commentId/replies
// ! R /commentId/replies
// ? u /commentId/replies/replyId
// * d /commentId/replies/replyId

// add reply

// gets all replies to a single comment
router.get("/:commentId/replies/", async (req, res) => {
  try {
      const comment = await Comment.findById(req.params.commentId);
      if (!comment) return res.status(400).send(`
      The comment with id "${req.params.commentId}" does not exist.
      `)
    const reply = await Reply.find()

    // return res.send(comment.replies)
    return res.send(reply)
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`)
  }
})

// gets single reply to a comment
router.get("/:commentId/replies/:id", async (req, res) => {
try {
  const comment = await Comment.findById(req.params.commentId)
      if (!comment) return res.status(400).send(`
      The comment with id "${req.params.commentId}" does not exist.
      `);

  const reply = await comment.replies.id(req.params.id);
  if (!reply) return res.status(400).send(`
  The reply with id "${req.params.id}" does not exist.
  `)
  return res.send(reply)
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`)
  }
});


//post a reply
router.post("/:commentId/replies/", async (req, res) => {
try {
  const comment = await Comment.findById(req.params.commentId)
  if (!comment)
    return res
      .status(400)
      .send(`The comment with id "${req.params.commentId}" does not exist.`)

  const reply = new Reply({
      text: req.body.text,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
    });

  comment.replies.push(reply)

  await comment.save()
  return res.send(comment.replies)
} catch (ex) {
  return res.status(500).send(`Internal Server Error: ${ex}`)
}
})

//edit a reply
router.put("/:commentId/replies/:replyId", async (req, res) => {
try {
  const { error } = validateReply(req.body)
  if (error) return res.status(400).send(error)

  const comment = await Comment.findById(req.params.commentId)
  if (!comment)
    return res
      .status(400)
      .send(`The comment with id "${req.params.commentId}" does not exist.`)

  const reply = comment.replies.id(req.params.replyId)
  if (!reply)
    return res
      .status(400)
      .send(
        `The reply with id "${req.params.replyId}" does not in the users replies.`
      )

  reply.text = req.body.text
  reply.likes = req.body.likes
  reply.dislikes = req.body.dislikes

  await comment.save()
  return res.send(reply)
} catch (ex) {
  return res.status(500).send(`Internal Server Error: ${ex}`)
}
})

//delete a reply
router.delete("/:commentId/replies/:replyId", async (req, res) => {
  try {
      
    const comment = await Comment.findById(req.params.commentId)
    if (!comment)
      return res
        .status(400)
        .send(`The comment with id "${req.params.commentId}" does not exist.`)

    let reply = comment.replies.id(req.params.replyId)
    if (!reply)
      return res
        .status(400)
        .send(
          `The reply with id "${req.params.replyId}" does not in the users shopping cart.`
        )

    reply = await reply.remove()

    await comment.save();
    return res.send(comment)

  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`)
  }
})

module.exports = router
