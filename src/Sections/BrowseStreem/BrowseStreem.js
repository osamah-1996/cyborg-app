import React from 'react'
import "./BrowseStreem.css"
import Service1 from "../../assets/images/service-01.jpg"
import Service2 from "../../assets/images/service-02.jpg"
import Service3 from "../../assets/images/service-03.jpg"
const BrowseStreem = () => {
  return (
    <>
      <div className='BrowseStreem-banner container'>
        <div className='BrowseStreem-header'>
            <h4><u>How To Start Your</u> <span>Live Stream</span></h4>
        </div>
        <div className='BrowseStreem-contents'>
            <div className='BrowseStreem-card'>
                <img draggable ="false" src={Service1} alt='opps something went wrong'/>
                <h3>Go To Your Profile</h3>
                <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 .</p>
            </div>
            <div className='BrowseStreem-card'>
                <img draggable ="false" src={Service2} alt='opps something went wrong'/>
                <h3>Live Stream Button</h3>
                <p>If you wish to support us, you can make <span>a small contribution via PayPal</span> to info [at] templatemo.com</p>
            </div>
            <div className='BrowseStreem-card'>
                <img draggable ="false" src={Service3} alt='opps something went wrong'/>
                <h3>You Are Live</h3>
                <p>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
            </div>
        </div>
        <button className=' Stream-btn'>Go To Profile</button>
      </div>
    </>
  )
}

export default BrowseStreem