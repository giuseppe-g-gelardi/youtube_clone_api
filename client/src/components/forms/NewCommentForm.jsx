import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TextField, Button, Container } from '@material-ui/core'

export default function NewCommentForm() {

  const [text, setText] = useState('')
  const [videoID, setVideoID] = useState('')
  const postCommentApi = `http://localhost:8000/api/comments/`

  useEffect(() => {
    let tempVideoID = '1'
    setVideoID(tempVideoID)
  }, [])

  const postNewReply = async () => {
    let comment = {
      videoID: videoID,
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
