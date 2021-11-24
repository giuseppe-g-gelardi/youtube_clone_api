import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ByVideoid from './ByVideoid'

export default function GetTest() {

  const [comments, setComments] = useState([])

  const getComments = async () => {
    await axios.get(`http://localhost:8000/api/comments`).then((response) => {
      setComments(response.data)
    })
  }

  useEffect(() => {
    getComments()
  }, [comments])

  // const logDataButton = () => {
  //   console.log(comments)
  // }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/comments/${id}`)
    } catch (error) {
      console.log(error)
      // create an error page for 500 and 400
    }
  }

  return (
    <>
       <ByVideoid
        comments={comments}
        handleDelete={handleDelete}
      />
    </>
  )
}


    // <button onClick={() => logDataButton()}>bottunnn</button>
    //   <ul>
    //     {comments.map((comment, i) => 
    //     <li key={i} >
    //       .....comment: {comment.text}
    //       .....videoID: {comment.videoID}
    //       .....commentID: {comment._id}
    //       .....likes: {comment.likes}
    //       .....dislikes: {comment.dislikes}
    //       {comment.replies
    //       // eslint-disable-next-line array-callback-return
    //       .filter(reply => {
    //         if (reply) return reply 
    //       }).map((replies, i) => { 
    //         return (
    //         <li key={i} component='div'>
    //           .....replies: {replies.text}
    //         </li>
    //         )
    //       })}
    //     </li>
    //     )}
    //   </ul>
