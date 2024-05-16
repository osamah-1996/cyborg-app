import React from 'react'
import "./Gamming.css"
import Gamming1 from "../../assets/images/game-01.jpg"
import Gamming2 from "../../assets/images/game-02.jpg"
import Gamming3 from "../../assets/images/game-03.jpg"
const Gamming = () => {
  return (
    <>
      <div className='gamming-banner'> 
          <div className='gamming-header'>
              <h4>Your Gaming <span>Library</span></h4>
          </div>
          <div className='gamming-contents'>
                <div className="gamming-card">
                   <img src={Gamming1} alt="" />
                   <div className='gamming-items'>
                        <h3>Dota <br /><span> Sandbox</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Date Added <br /><span> 24/08/2036</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Hours Played <br /> <span>634 H 22 Mins</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Currently <br /> <span>Downloaded</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <button>Donwloaded</button>
                   </div>
                </div>
                <div className="gamming-card">
                   <img src={Gamming1} alt="" />
                   <div className='gamming-items'>
                        <h3>Dota <br /><span> Sandbox</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Date Added <br /><span> 24/08/2036</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Hours Played <br /> <span>634 H 22 Mins</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Currently <br /> <span>Downloaded</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <button>Donwloaded</button>
                   </div>
                </div>
                <div className="gamming-card">
                   <img src={Gamming1} alt="" />
                   <div className='gamming-items'>
                        <h3>Dota <br /><span> Sandbox</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Date Added <br /><span> 24/08/2036</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Hours Played <br /> <span>634 H 22 Mins</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <h3>Currently <br /> <span>Downloaded</span></h3>
                   </div>
                   <div className='gamming-items'>
                        <button>Donwloaded</button>
                   </div>
                </div>
          </div>
          <button className='gamming-buttons'>View Your Library</button>
       </div>
    </>
  )
}

export default Gamming