import React, { useState } from 'react'
import { IconButton, Card, Container } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'



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

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }



  return (
    <Container style={{ marginTop: '20px' }} elevation={20}>
      <h1>ByVideoid</h1>
      <ul>
        {comments.map((comment, i) => {
          if (comment.videoID === '1') {
            return (
            <Card>

            <Typography>
              {comment.text}
              {comment._id}

              <IconButton onClick={() => handleDelete(comment._id)}>
              <DeleteOutline style={{color: '#f07178'}}/>
            </IconButton>
            <IconButton>
              <QuickreplyOutlinedIcon />
            </IconButton>


            </Typography>
           


            

            


            {comment.replies
           // eslint-disable-next-line array-callback-return
           .filter(reply => {
             if (reply) return reply 
           }).map((replies, i) => { 
             return (
              <>
              <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              >
              <ExpandMoreIcon />
              </ExpandMore>
              <Collapse in={expanded} timeout='auto' unmountOnExit>

              <Card key={i}>
                .....reply: {replies.text}
              </Card>


              
            </Collapse>

              </>
             )
           })}
          </Card>

          )
        }
        })}
      </ul>
      </Container>
  )
}
