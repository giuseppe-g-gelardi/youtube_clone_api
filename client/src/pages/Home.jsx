import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import { ButtonGroup, IconButton, Typography, Button } from '@material-ui/core'

import GetTest from '../components/GetTest'

import NewComment from '../components/forms/NewCommentForm'
import Popup from '../components/Popup'

export default function Home() {

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <div>
      <GetTest />

      <IconButton onClick={() => setOpenPopup(true)}>
        <Button style={{color: '#89ddff'}}>
          New Comment
        </Button>
      </IconButton>


      <Popup
        text="New Comment..."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewComment />
      </Popup>
    </div>
  )
}
