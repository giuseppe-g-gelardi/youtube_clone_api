const { Comment, validateComment } = require('../models/comments')
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
// the commented out code cause 'ERR_HTTP_HEADERS_SENT' error

module.exports = router
