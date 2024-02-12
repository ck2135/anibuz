import React from 'react'
import video from '../../../Assets/animeVideo.mp4'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <video src={video} autoPlay loop muted></video>


        <div className="content">
            <h1>AniBuzz</h1>
            <p>Embark on Infinite Journeys: A Realm Where Anime Enthusiasts Unite, Nurturing Dreams and Fostering Connections through the Magical Tapestry of Animation</p>

            <div className="buttons">
            <Link to='/trending'>Trending</Link>
            <Link to='/register'>Register</Link>
        </div>

        </div>
       
    </div>

  )
}

export default Hero