import React, { useState } from 'react'
import { IconButton, Card, Container } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'


import Popup from '../components/Popup'
import NewReplyForm from './forms/NewReplyForm'


const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function ByVideoid(props) {

  const { comments, handleDelete } = props

  const [expanded, setExpanded] = useState(false)

  const [openPopup, setOpenPopup] = useState(false)

  const [ currentCommentID, setCurrentCommentID ] = useState('')


  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Container style={{ marginTop: '20px' }} elevation={20}>
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
                  <IconButton onClick={() => {
                      setOpenPopup(true);
                      setCurrentCommentID(comment._id);
                  }}>
                    <QuickreplyOutlinedIcon color='primary' />
                  </IconButton>
                </Typography>


                {comment.replies
                  // eslint-disable-next-line array-callback-return
                  .filter(reply => {
                    if (reply) return reply
                  }).map((replies, i) => {
                    return (
                      <>
                        <Typography>
                          See Replies
                        </Typography>
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                          <CardContent>
                            <Card key={i}>
                              {replies.text}
                            </Card>
                          </CardContent>
                        </Collapse>
                      </>
                    )})}
              </Card>
            )}
          return null;
        })}
      </ul>




      <Popup
        text="Reply to comment"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewReplyForm 
          currentCommentID={currentCommentID}
        />
      </Popup>



    </Container>
  )
}
