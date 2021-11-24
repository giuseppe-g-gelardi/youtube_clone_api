import React from 'react'
import { IconButton } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'

export default function ByVideoid(props) {

  const { comments, handleDelete } = props

  return (
    <div>

      {/* <button onClick={() => console.log(comments)}>log comments</button> */}
      <h1>ByVideoid</h1>
         
      {/* this block gets comments based off videoID */}
      {/* need to create state so ID isnt hard coded */}
      <ul>
        {comments.map((comment, i) => {
          if (comment.videoID === '1') {
            return (
          <li key={i}>
            {comment.text}
            <IconButton onClick={() => handleDelete(comment._id)}>
             <DeleteOutline style={{color: '#f07178'}}/>
            </IconButton>
          </li>
          )
        }
        })}
      </ul>

    </div>
  )
}

