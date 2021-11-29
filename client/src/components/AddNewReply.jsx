import React, { useState } from 'react'
import { IconButton, Button, Container } from '@material-ui/core'
import Controls from '../components/controls/Controls'

import NewReplyForm from './forms/NewReplyForm'

export default function AddNewReply() {

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <Container>
      <IconButton onClick={() => setOpenPopup(true)}>
        <Button style={{color: '#89ddff'}}>
          New Reply
        </Button>
      </IconButton>


      <Controls.Popup
        text="Add new reply..."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewReplyForm />
      </Controls.Popup>

    </Container>
  )
}
