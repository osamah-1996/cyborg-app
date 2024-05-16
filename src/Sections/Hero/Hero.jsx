import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
        <h4 className='hero-title'><span className='hero-span'>BROWSE</span> OUR POPULAR <br /> GAMES HERE</h4>
        <div className='main-btn'>
          <a href="browse.html" className='heroBtn'>Browse Now</a>
        </div>
      </div>
    </div>
  )
}

export default Hero