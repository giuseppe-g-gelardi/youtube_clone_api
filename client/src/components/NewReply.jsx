import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button, Container } from '@material-ui/core'

// import NewReply from './NewReply'

export default function NewReply() {

  const [text, setText] = useState('')
  // const [videoID, setVideoID] = useState('')
  // const [  commentID, setCommentID ] = useState('')
  const postCommentApi = `http://localhost:8000/api/comments/`



  // reply link
  // http://localhost:8000/api/comments/619ecffbecdde10dac147d41/replies
  // http://localhost:8000/api/comments/_.id/replies


  const postNewComment = async () => {
    let comment = {
      videoID: '1',
      text
    }
    try {
      await axios.post(postCommentApi, comment)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <form onSubmit={() => {postNewComment()}}>
          <TextField 
            onChange={e => setText(e.target.value)}
            variant='outlined'
            multiline
            rows={2}
          />
          <Button 
            type='submit'
            color='primary'
            variant='contained'
          >
            Submit Reply
          </Button>
      </form>
    </Container>
  )
}
