import React, { useState } from 'react'
import { IconButton, Button, Container } from '@material-ui/core'

import GetTest from '../components/GetTest'

import NewComment from '../components/forms/NewCommentForm'
import Popup from '../components/Popup'

export default function Home() {

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <Container>

      <IconButton onClick={() => setOpenPopup(true)}>
        <Button style={{color: '#89ddff'}}>
          New Comment
        </Button>
      </IconButton>


      <GetTest />

      
      <Popup
        text="New Comment..."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewComment />
      </Popup>
    </Container>
  )
}
