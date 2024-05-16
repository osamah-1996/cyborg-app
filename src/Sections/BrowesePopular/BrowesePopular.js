import React from 'react'
import "./BrowesePopular.css"
import Detaile1 from "../../assets/images/details-01.jpg"
import Detaile2 from "../../assets/images/details-02.jpg"
import Detaile3 from "../../assets/images/details-03.jpg"
import Avatar1 from "../../assets/images/avatar-01.jpg"
import Avatar2 from "../../assets/images/avatar-02.jpg"
import Avatar3 from "../../assets/images/avatar-03.jpg"
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BrowesePopular = () => {
  return (
    <>
      <div className='BrowesePopular-banner container'>
          <div className='BrowesePopular-header'>
              <h4><u>Most Popular</u> <span>Live Stream</span></h4>
          </div>
          <div className='BrowesePopular-contents'> 
              <div className='BrowesePopular-card'>
                <img src={Detaile1} alt='opps something went wrong'/>
                
              </div>
              <div className='BrowesePopular-card'>
                <img src={Detaile2} alt='opps something went wrong'/>
                
              </div>
              <div className='BrowesePopular-card'>
                <img src={Detaile3} alt='opps something went wrong'/>
              </div>
          </div>
          <div className='BrowesePopular-contents'> 
              <div className='BrowesePopular-card'>
                <img src={Detaile3} alt='opps something went wrong'/>
                
              </div>
              <div className='BrowesePopular-card'>
                <img src={Detaile1} alt='opps something went wrong'/>
                
              </div>
              <div className='BrowesePopular-card'>
                <img src={Detaile2} alt='opps something went wrong'/>
              </div>
          </div>
          <button className='BrowesePopular-btn'>Discover All Streams</button>
       </div>
    </>
  )
}

export default BrowesePopular