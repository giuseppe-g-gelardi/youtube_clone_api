import React from 'react'
import { IconButton } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';

export default function ByVideoid(props) {

  const { comments, handleDelete } = props

  return (
    <div>
      <h1>ByVideoid</h1>
      <ul>
        {comments.map((comment, i) => {
          if (comment.videoID === '1') {
            return (
          <li key={i}>
            {comment.text}
            {comment._id}
            <IconButton onClick={() => handleDelete(comment._id)}>
              <DeleteOutline style={{color: '#f07178'}}/>
            </IconButton>
            <IconButton>
              <QuickreplyOutlinedIcon />
            </IconButton>
            {comment.replies
           // eslint-disable-next-line array-callback-return
           .filter(reply => {
             if (reply) return reply 
           }).map((replies, i) => { 
             return (
             <li key={i} component='div'>
               .....reply: {replies.text}
               
             </li>
             )
           })}
          </li>
          )
        }
        })}
      </ul>

    </div>
  )
}
