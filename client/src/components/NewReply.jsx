import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button, Container } from '@material-ui/core'

export default function NewReply(props) {

  const { currentCommentID } = props

  const [text, setText] = useState('')

  const replyAPI = `http://localhost:8000/api/comments/${currentCommentID}/replies`

  const postNewReply = async () => {
    let reply = {
      text
    }
    try {
      await axios.post(replyAPI, reply)
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
            Submit Reply
          </Button>
      </form>
    </Container>
  )
}
