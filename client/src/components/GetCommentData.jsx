import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ByVideoid from './ByVideoid'

export default function GetCommentData() {

  const [comments, setComments] = useState([])
  const [replies, setReplies] = useState([])

  const hardcodecommentid = '619ecffbecdde10dac147d41'

  const getComments = async () => {
    await axios.get(`http://localhost:8000/api/comments`).then((response) => {
      setComments(response.data)
      console.log('response data:', response.data)
      getReplies()
    })
  }



  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/comments/${id}`)
      console.log('delete comment:', id)
    } catch (error) {
      console.log(error)
      // create an error page for 500 and 400
    }
  }

  const getReplies = async (id) => {
    try {
      await axios.get(`http://localhost:8000/api/comments/${hardcodecommentid}/replies`).then((response) => {
        setReplies(response.data)
        console.log('replies:', replies)
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComments()
    // getReplies()
  }, [])
  // empty array for testing, add comments to array later

  return (
    <>
       <ByVideoid
        comments={comments}
        handleDelete={handleDelete}
        replies={replies}
        // replies={replies}
      />
    </>
  )
}

