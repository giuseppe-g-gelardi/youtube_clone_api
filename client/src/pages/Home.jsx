import React, { useState } from 'react'
import { IconButton, Button, Container } from '@material-ui/core'

// import Controls from '../components/controls/Controls'
import GetCommentData from '../components/GetCommentData'
// import NewComment from '../components/forms/NewCommentForm'
import AddNewComment from '../components/AddNewComment'

export default function Home() {

  // const [openPopup, setOpenPopup] = useState(false)

  return (
    <Container>

      <AddNewComment />

      <GetCommentData />

      {/* <Controls.Popup
        text="New Comment..."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewComment />
      </Controls.Popup> */}
    </Container>
  )
}



// import React, { useState } from 'react'
// import { IconButton, Button, Container } from '@material-ui/core'

// import Controls from '../components/controls/Controls'
// import GetCommentData from '../components/GetCommentData'
// import NewComment from '../components/forms/NewCommentForm'

// export default function Home() {

//   const [openPopup, setOpenPopup] = useState(false)

//   return (
//     <Container>

//       <IconButton onClick={() => setOpenPopup(true)}>
//         <Button style={{color: '#89ddff'}}>
//           New Comment
//         </Button>
//       </IconButton>

//       <GetCommentData />

//       <Controls.Popup
//         text="New Comment..."
//         openPopup={openPopup}
//         setOpenPopup={setOpenPopup}
//       >
//         <NewComment />
//       </Controls.Popup>
//     </Container>
//   )
// }
