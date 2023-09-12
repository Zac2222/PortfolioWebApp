import React from 'react'
import VideoBackground from '../assets/VideoBackground.mov'

const Background = () => {
  return (
    <div>
      <video src={VideoBackground} autoPlay loop muted/>
    </div>
  )
}

export default Background
