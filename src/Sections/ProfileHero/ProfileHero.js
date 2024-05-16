import React from 'react'
import "./ProfileHero.css"
import Profile from "../../assets/images/profile.jpg"

const ProfileHero = () => {
  return (
    <>
      <div className='ProfileHero-warpper'>
        <div className='container'>
            <div className='section-contents'>
                <div className='section-item'>
                    <img className='profile-img' src={Profile}/>
                </div>
                <div className='section-item'>
                  <button className='offline-btn'>offline</button>
                  <h4 className='profile-title'>Alan Smithee</h4>
                  <p className='profile-description'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                  <button className='profile-streem'>Start Live Stream</button>
                </div>
                <div className='section-item'>
                  <div className='profile-table'>
                      <div className='profile-table-items'>
                          <h4>Games Downloaded</h4>
                          <span>3</span>
                      </div>
                      <div className='profile-table-items'>
                          <h4>Friends Online</h4>
                          <span>16</span>
                      </div>
                      <div className='profile-table-items'>
                          <h4>Live Streams</h4>
                          <span>None</span>
                      </div>
                      <div className='profile-table-items'>
                          <h4>Clips</h4>
                          <span>29</span>
                      </div>
                  </div>
 
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProfileHero