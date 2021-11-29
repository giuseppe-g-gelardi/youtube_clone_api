import React, { useState } from 'react'
import { IconButton, Card, Container } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import Controls from '../components/controls/Controls'
import NewReplyForm from './forms/NewReplyForm'


export default function DisplayComments (props) {
  const { comments, replies, handleDelete, videoid } = props

  const [openPopup, setOpenPopup] = useState(false)
  const [currentCommentID, setCurrentCommentID] = useState('')

  return (
    <Container style={{ marginTop: '20px' }} elevation={20}>
      <button onClick={() => console.log(replies)}>log replies</button>
      <ul>
        {comments.reverse().map((comment, i) => {
          if (comment.videoID === '1') {
            return (
              <Card key={i}>
                <Typography>
                  {comment.text}
                  <IconButton onClick={() => handleDelete(comment._id)}>
                    <DeleteOutline style={{ color: '#f07178' }} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setOpenPopup(true)
                      setCurrentCommentID(comment._id)
                    }}
                  >
                    <QuickreplyOutlinedIcon color='primary' />
                  </IconButton>
                </Typography>

                {comment.replies
                  // eslint-disable-next-line array-callback-return
                  .filter(reply => {
                    if (reply) return reply
                  })
                  .map((replies, i) => {
                    return (
                      <>
                        <Card key={i}>
                          <CardContent>{replies.text}</CardContent>
                        </Card>
                      </>
                    )
                  })}
              </Card>
            )
          }
          return null
        })}
      </ul>

      <Controls.Popup
        text='Reply to comment'
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewReplyForm currentCommentID={currentCommentID} />
      </Controls.Popup>
    </Container>
  )
}
