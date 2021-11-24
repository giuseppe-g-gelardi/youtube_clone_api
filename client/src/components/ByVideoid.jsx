import React, { useState } from 'react'

export default function ByVideoid(props) {

  const { comments } = props

  // const [commentsByVideoid, setCommentsByVideoid ] = useState([]) 
  // const [videoid, setVideoid] = useState('')

  const logger = () => {
    console.log(comments)
  }



  return (
    <div>
      <h1>hey</h1>
      <button onClick={() => logger()}>comments log</button>
         
      {/* this block gets comments based off videoID */}
      {/* need to create state so ID isnt hard coded */}
      <ul>
        {comments.map((comment, i) => {
          if (comment.videoID === '1') {
            return (
          <li key={i}>
            {comment.text}
          </li>
          )
        }
        })}
      </ul>

    </div>
  )
}

