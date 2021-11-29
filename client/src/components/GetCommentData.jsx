import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayComments from './DisplayComments'

import key from '../key'
import VideoPlayer from './VideoPlayer'
import RelatedVideos from './RelatedVideos'

export default function GetCommentData() {


  // video search url
  // https://www.googleapis.com/youtube/v3/search?q=${userInput}&key=${key}&maxResults=10&order=viewCount&part=snippet

  // get related videos url
  // https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoid}&type=video&key=${key}&part=snippet

  const [comments, setComments] = useState([])
  const [replies, setReplies] = useState([])
  const [videoid, setVideoid] = useState('W0quDfpfRUQ') // Welcome to youtube - Bo burnham
  const [relatedVideos, setRelatedVideos] = useState([])

  const hardcodecommentid = '619ecffbecdde10dac147d41'

  const getComments = async () => {
    await axios.get(`http://localhost:8000/api/comments`).then((response) => {
      setComments(response.data)
      console.log('response data:', response.data)
      getReplies()
    })
  }



  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/comments/${id}`)
      console.log('delete comment:', id)
    } catch (error) {
      console.log(error)
      // create an error page for 500 and 400
    }
  }

  const getReplies = async (id) => {
    try {
      await axios.get(`http://localhost:8000/api/comments/${hardcodecommentid}/replies`).then((response) => {
        setReplies(response.data)
        console.log('replies:', replies)
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  const getVideos = async () => {
    try {
      await axios.get(``).then((response => {
        // get input from navbar search
        //set 
        //log
      }))
    } catch (error) {
      console.log(error)
      // make a 404/500 page or popup??
    }
  }

  const getRelatedVideos = async () => {
    try {
      await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoid}&type=video&key=${key}&part=snippet`)
      .then((response) => {
        console.log(response.data.items)
        setRelatedVideos(response.data.items)
      })
    } catch (error) {
      console.log(error)
      // make a 404/500 page or popup??
    }
  }


  useEffect(() => {
    getComments()
    // getReplies()
    getRelatedVideos()
  }, [])
  // empty array for testing, add comments to array later

  return (
    <>

      <VideoPlayer 
        videoid={videoid}
      />

      <RelatedVideos 
        relatedVideos={relatedVideos}
      />


      <DisplayComments
        comments={comments}
        handleDelete={handleDelete}
        replies={replies}
      />
    </>
  )
}

