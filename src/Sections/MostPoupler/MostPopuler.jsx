import React from 'react'
import "./MostPopuler.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import popular1 from "../../assets/images/popular-01.jpg"
import popular2 from "../../assets/images/popular-02.jpg"
import popular3 from "../../assets/images/popular-03.jpg"
import popular4 from "../../assets/images/popular-04.jpg"
import popular5 from "../../assets/images/popular-05.jpg"
import popular6 from "../../assets/images/popular-06.jpg"
import popular7 from "../../assets/images/popular-07.jpg"
import popular8 from "../../assets/images/popular-08.jpg"
const MostPopuler = () => {
  return (
    <>
      <div className='container most-populer-wrapper'>
          <div className='most-populer-header'>
              <h4>Most Popular <span>Right Now</span></h4>
          </div>
          <div className='most-populer-items'>
              <div className=" most-populer-card">
                  <img draggable ="false" src={popular1} alt=""  className='most-populer-item-img'/>
                  <div className='most-populer-item-contents'>
                      <h4 className='most-populer-item-title'> Fortnite <br /> <span>Sandbox</span> </h4>
                      <ul>
                        <li><FontAwesomeIcon icon={faStar}  className='start-icon'/> <span>4.8</span></li>
                        <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/><span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
              <div className=" most-populer-card">
                  <img draggable ="false" src={popular2} alt=""  className='most-populer-item-img'/>
                  <div className='most-populer-item-contents'>
                      <h4 className='most-populer-item-title'> PubG <br /> <span>Battle S</span> </h4>
                      <ul>
                        <li><FontAwesomeIcon icon={faStar} className='start-icon' /> <span>4.8</span></li>
                        <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/> <span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
              <div className=" most-populer-card">
                  <img draggable ="false" src={popular3} alt=""  className='most-populer-item-img'/>
                  <div className='most-populer-item-contents'>
                      <h4 className='most-populer-item-title'> Dota2 <br /> <span>Steam-X</span> </h4>
                      <ul>
                        <li><FontAwesomeIcon icon={faStar} className='start-icon'/> <span>4.8</span></li>
                        <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/> <span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
              <div className=" most-populer-card">
                  <img draggable ="false" src={popular4} alt=""  className='most-populer-item-img'/>
                  <div className='most-populer-item-contents'>
                      <h4 className='most-populer-item-title'> Dota2 <br /> <span>Steam-X</span> </h4>
                      <ul>
                        <li><FontAwesomeIcon icon={faStar} className='start-icon'/> <span>4.8</span></li>
                        <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/> <span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='most-populer-items'>
              <div className=" most-populer-card">
                  <img draggable ="false" src={popular5} alt=""  className='most-populer-item-img'/>
                  <div className='most-populer-item-contents'>
                      <h4 className='most-populer-item-title'> Fortnite <br /> <span>Sandbox</span> </h4>
                      <ul>
                        <li><FontAwesomeIcon icon={faStar}  className='start-icon'/> <span>4.8</span></li>
                        <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/><span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
              <div className=" most-populer-card">
                  <img draggable ="false" src={popular6} alt=""  className='most-populer-item-img'/>
                  <div className='most-populer-item-contents'>
                      <h4 className='most-populer-item-title'> PubG <br /> <span>Battle S</span> </h4>
                      <ul>
                        <li><FontAwesomeIcon icon={faStar} className='start-icon' /> <span>4.8</span></li>
                        <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/> <span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
              <div className=" most-populer-card">
                  <img draggable ="false" src={popular7} alt=""  className='most-populer-item-img'/>
                  <div className='most-populer-item-contents'>
                      <h4 className='most-populer-item-title'> Dota2 <br /> <span>Steam-X</span> </h4>
                      <ul>
                        <li><FontAwesomeIcon icon={faStar} className='start-icon'/> <span>4.8</span></li>
                        <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/> <span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
              <div className=" most-populer-card">
                  <img draggable ="false" src={popular8} alt=""  className='most-populer-item-img'/>
                  <div className='most-populer-item-contents'>
                      <h4 className='most-populer-item-title'> Dota2 <br /> <span>Steam-X</span> </h4>
                      <ul>
                        <li><FontAwesomeIcon icon={faStar} className='start-icon'/> <span>4.8</span></li>
                        <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/> <span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
          </div>
          <button className='Popular-button'>Discover Popular</button>
      </div>
    </>
  )
}

export default MostPopuler