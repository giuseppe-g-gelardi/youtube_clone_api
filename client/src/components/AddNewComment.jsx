import React, { useState } from 'react'
import { IconButton, Button, Container } from '@material-ui/core'

import Controls from '../components/controls/Controls'
import NewCommentForm from '../components/forms/NewCommentForm'

export default function AddNewComment() {

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <Container>

      <IconButton onClick={() => setOpenPopup(true)}>
        <Button style={{color: '#89ddff'}}>
          New Comment
        </Button>
      </IconButton>

      <Controls.Popup
        text="New Comment..."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewCommentForm />
      </Controls.Popup>
    </Container>
  )
}
