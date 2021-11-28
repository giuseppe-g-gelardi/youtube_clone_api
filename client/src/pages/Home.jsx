import React, { useState } from 'react'
import { IconButton, Button, Container } from '@material-ui/core'

import GetTest from '../components/GetTest'

import NewComment from '../components/forms/NewCommentForm'
// import Popup from '../components/Popup'
import Controls from '../components/controls/Controls'

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

      
      <Controls.Popup
        text="New Comment..."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewComment />
      </Controls.Popup>
    </Container>
  )
}
