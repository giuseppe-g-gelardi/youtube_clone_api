import React, { useState, useEffect } from 'react'

export default function RelatedVideos(props) {

  const [related, setRelated] = useState([])

  const { relatedVideos } = props

  const getRelatedId = () => {
    relatedVideos.map((videos) => {
        setRelated(videos.id.videoId)
    })
  }

  useEffect(() => {
    getRelatedId()
  })
  
  return (
    <div>
    {/* <button onClick={() => console.log(relatedVideos)}>vids</button>
    <button onClick={() => console.log(relatedVideos[0].id.videoId)}>id</button> */}

      {relatedVideos.map((videos) => {
        return (
          <>
          
          <ul>
            <iframe 
              title='relatedvids'
              width='160'
              height='90'
              src={`https://www.youtube.com/embed/${videos.id.videoId}?autoplay=0&origin=http://example.com`}
              frameBorder='0'
            />

            
          </ul>
          </>
        )
      })}
    </div>
  )
}
