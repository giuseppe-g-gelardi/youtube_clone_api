import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button, Container } from '@material-ui/core'

// import NewReply from './NewReply'

export default function NewReply(props) {

  const { currentCommentID } = props

  const [text, setText] = useState('')
  // const [videoID, setVideoID] = useState('')
  // const [  commentID, setCommentID ] = useState('')
  // const postCommentApi = `http://localhost:8000/api/comments/`


  const replyAPI = `http://localhost:8000/api/comments/${currentCommentID}/replies`

  // reply link
  // http://localhost:8000/api/comments/619ecffbecdde10dac147d41/replies
  // http://localhost:8000/api/comments/_.id/replies


  // const postNewComment = async () => {
  //   let comment = {
  //     videoID: '1',
  //     text
  //   }
  //   try {
  //     await axios.post(postCommentApi, comment)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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

      {/* <button onClick={() => console.log(props)}>get id</button> */}
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
