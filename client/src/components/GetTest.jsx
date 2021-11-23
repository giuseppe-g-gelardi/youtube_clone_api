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


  // need to map over commentID.replies to display replies to specific comment
  return (
    <div>
      <button onClick={() => logDataButton()}>bottunnn</button>
      <ul>
        {comments.map((comment, i) => 
        <li key={i}>
          {comment.text}
          .....videoID: {comment.videoID}
          .....commentID: {comment._id}
          .....likes: {comment.likes}
          .....dislikes: {comment.dislikes}
          <ul>
          .....replies: {comment.replies.map((replies) => 
          <li>{replies.text}
          .....likes: {replies.likes}
          .....dislikes: {replies.dislikes}
          </li>)}
          </ul>

        </li>)}
        
      </ul>
    </div>
  )
}
