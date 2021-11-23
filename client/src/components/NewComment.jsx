import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button, Container } from '@material-ui/core'

export default function NewComment() {

  // const [videoID, setVideoID] = useState('')
  const [text, setText] = useState('')
  // const [comment, setComment] = useState({})
  const postCommentApi = `http://localhost:8000/api/comments/`

  const rng = Math.floor(Math.random() * 1000000) + 1
  const videoidString = rng.toString()

  const handleSubmit = async e => {
    // e.preventDefault()
    let comment = {
      videoID: videoidString,
      text
    }
    try {
      await axios.post(postCommentApi, comment)
      console.log(videoidString)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Container>

      <form onSubmit={() => {handleSubmit()}}>
          <TextField 
            onChange={e => setText(e.target.value)}
            variant='outlined'
            multiline
            rows={4}
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
   
    </div>
  )
}

