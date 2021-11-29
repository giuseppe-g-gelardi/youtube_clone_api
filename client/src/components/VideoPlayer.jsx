import React from 'react'

export default function VideoPlayer(props) {

  const { videoid } = props

  return (
    <div>
      <iframe 
        title='videoplayer'
        allowFullScreen='allowfullscreen'
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${videoid}?autoplay=0&mute=0`}
        frameBorder='0'
      />
    </div>
  )
}
