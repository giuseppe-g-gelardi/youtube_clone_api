import React, { useState } from 'react'
import axios from 'axios'

export default function NewComment() {

  // const [videoID, setVideoID] = useState('')
  const [text, setText] = useState('')
  // const [comment, setComment] = useState({})
  const postCommentApi = `http://localhost:8000/api/comments/`

  // const rng = Math.floor(Math.random() * 1000000) + 1
  // const videoidString = rng.toString()

  const handleSubmit = async e => {
    // e.preventDefault()
    let comment = {
      videoID: "videoid",
      text
    }
    try {
      await axios.post(postCommentApi, comment)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={() => {handleSubmit()}}>
        <input onChange={e => setText(e.target.value)} label='comment...' />
          enter comment here
        <button type='submit'>submit comment</button>
      </form>
    </div>
  )
}

