import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Header/Header.css"
import Logo from "../../assets/images/logo.png"
import ProfileHeader from "../../assets/images/profile-header.jpg"
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return ( 
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
      <div class="container">
          <a class="navbar-brand" href="#"><img src={Logo} alt="opps something went wrog" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon class="navbar-toggler-icon  text-light" icon={faBars} />   
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item "><a className="nav-link nav-link-focus" href="/">Home</a></li>
                <li className="nav-item "><a className="nav-link" href="/Browse" >Browse</a></li>
                <li className="nav-item "><a className="nav-link" href="/Details">Details</a></li>
                <li className="nav-item "><a className="nav-link" href="/Streams">Streams</a></li>
                <li className="nav-item "><a className="nav-link headerButton" href="/Profile">Profile <img src={ProfileHeader} alt="" /></a></li>
               </ul>  
          </div>
      </div>
    </nav> 
  )
}

export default Header