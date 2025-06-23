import React from 'react'
import "./index.css"
import ResponsiveVideo from '../../Responsive'

const Videosection = () => {
  return (
    <div className='text'>
        <div className='heading' >
            <h1>9.6/10 Based on 3,427 Verified reviews</h1>
        </div>
        <h1>
            Transform Your Future With AI-Powered Income
        </h1>
        <p>Join Thousands who are already using AI to create  reliable income streams</p>
        {/* <video controls autoPlay muted loop>
            <source src="/The Future of Artificial Intelligence (Animated).mp4">
            </source>
        </video> */}
        <ResponsiveVideo/>
      </div>
  )
}

export default Videosection
