import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button, Container } from '@material-ui/core'

export default function NewComment() {

  const [text, setText] = useState('')
  const [videoID, setVideoID] = useState('')
  const postCommentApi = `http://localhost:8000/api/comments/`


  const postNewReply = async () => {
    setVideoID('1')
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
      <form onSubmit={() => {postNewReply()}}>
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
            Submit Comment
          </Button>
      </form>

    </Container>
  )
}