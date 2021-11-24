import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetTest() {

  const [comments, setComments] = useState([])

  const getComments = async () => {
    await axios.get(`http://localhost:8000/api/comments`).then((response) => {
      setComments(response.data)
    })
  }

  useEffect(() => {
    getComments()
  }, [])

  const logDataButton = () => {
    console.log(comments)
  }

  // TODO map over commentID.replies to display replies to specific comment
  return (
    <div>
      <button onClick={() => logDataButton()}>bottunnn</button>
      <ul>
        {comments.map((comment, i) => 
        <li key={i}>
          .....comment: {comment.text}
          .....videoID: {comment.videoID}
          .....commentID: {comment._id}
          .....likes: {comment.likes}
          .....dislikes: {comment.dislikes}
          {comment.replies
          .filter(reply => {
            if (reply) {
              return reply
            } })
            .map((replies, i) => { 
            return (
            <li key={i} component='div'>
              .....replies: {replies.text}
            </li>
            )
          })}
        </li>
        )}
      </ul>
    </div>
  )
}
