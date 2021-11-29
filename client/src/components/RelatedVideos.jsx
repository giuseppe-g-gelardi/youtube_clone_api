import React from 'react'

export default function RelatedVideos(props) {

  const { relatedVideos } = props
  
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
