import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetTest() {

  const [comments, setComments] = useState([])

  const getComments = async () => {
    await axios.get(`http://localhost:8000/api/comments`).then((response) => {
      // console.log(comments.text)
      setComments(response.data)
    })
  }

  useEffect(() => {
    getComments()
  }, [])

  const logDataButton = () => {
    console.log(comments)
  }

  return (
    <div>
      <button onClick={() => logDataButton()}>bottunnn</button>
      <ol>
    {comments.map((comment) => <li key={comment}>{comment.text}</li>)}
      </ol>
    </div>
  )
}
