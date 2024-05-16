import React from 'react'
import "./BrowseHero.css" 
import Feature1 from "../../assets/images/featured-01.jpg"
import Feature2 from "../../assets/images/featured-02.jpg"
import Feature3 from "../../assets/images/featured-03.jpg"
import Feature4 from "../../assets/images/feature-left.jpg"
import Feature5 from "../../assets/images/feature-right.jpg"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Clib1 from "../../assets/images/clip-01.jpg"
import Clib2 from "../../assets/images/clip-02.jpg"
import Clib3 from "../../assets/images/clip-03.jpg"
import Clib4 from "../../assets/images/clip-04.jpg"
import Gamme1 from "../../assets/images/game-01.jpg"
import Gamme2 from "../../assets/images/game-02.jpg"
import Gamme3 from "../../assets/images/game-03.jpg"

const BrowseHero = () => {
  return (
    <>
        <div className='BrowseHero-warpper container'>
            <div className='BrowseHero-warpper-left'>
                <div className='BrowseHero-left-header'>
                  <h4 className='header-title'><u>Featured</u> <span>Games</span></h4>
                </div>
                <div className='BrowseHero-left-contents'>
                    <div className='BrowseHero-left-card'>
                          <img draggable = "false" className='BrowseHero-card-left-img' src= {Feature3} alt='opps something went wrong'/>
                          <div className='BrowseHero-left-card-items'>
                              <h4>Island Rusty <br/> <span>247 Download</span></h4>
                              <ul>
                              <li><FontAwesomeIcon icon={faStar}  className='start-icon'/> <span>4.8</span></li>
                              <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/><span>2.3M</span></li>
                              </ul>
                          </div>
                    </div>
                    <div className='BrowseHero-left-card'>
                          <img draggable = "false" className='BrowseHero-card-left-img' src= {Feature2} alt='opps something went wrong'/>
                          <div className='BrowseHero-left-card-items'>
                              <h4>CS Go <br/> <span>247 Download</span></h4>
                              <ul>
                                <li><FontAwesomeIcon icon={faStar}  className='start-icon'/> <span>4.8</span></li>
                                <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/><span>2.3M</span></li>
                              </ul>
                          </div>
                    </div>
                    <div className='BrowseHero-left-card'>
                          <img draggable = "false" className='BrowseHero-card-left-img' src= {Feature1} alt='opps something went wrong'/>
                          <div className='BrowseHero-left-card-items'>
                              <h4>Gamerze <br/> <span>249 Download</span></h4>
                              <ul>
                                <li><FontAwesomeIcon icon={faStar}  className='start-icon'/> <span>4.8</span></li>
                                <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/><span>2.3M</span></li>
                              </ul>
                          </div>
                    </div>
                </div>
            </div>
            <div className='BrowseHero-warpper-right'>
              <div className='BrowseHero-right-header'>
                    <h4 className='header-title'><u>Top</u> <span>Downloaded</span></h4>
                    <div className= "BrowseHero-right-contents">
                        <div className='BrowseHero-right-card'>
                            <img className='BrowseHero-right-img' src={Gamme1} alt='opps soething went wrong'/>
                            <div className='BrowseHero-right-midle'>
                                <h4>Fortnite <br/> <span>Sandbox</span></h4>
                                <div className='BrowseHero-right-midle-links'> 
                                    <ul>
                                      <li><FontAwesomeIcon icon={faStar}  className='start-icon'/> <span>4.8</span></li>
                                      <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/><span>2.2M</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='BrowseHero-right-left'>
                                  <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/></li>
                            </div>
                        </div>
                        <div className='BrowseHero-right-card'>
                            <img className='BrowseHero-right-img' src={Gamme2} alt='opps soething went wrong'/>
                            <div className='BrowseHero-right-midle'>
                                <h4>CS-GO <br/> <span>Legendary</span></h4>
                                <div className='BrowseHero-right-midle-links'> 
                                    <ul>
                                      <li><FontAwesomeIcon icon={faStar}  className='start-icon'/> <span>4.8</span></li>
                                      <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/><span>2.2M</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='BrowseHero-right-left'>
                                  <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/></li>
                            </div>
                        </div>
                        <div className='BrowseHero-right-card'>
                            <img className='BrowseHero-right-img' src={Gamme3} alt='opps soething went wrong'/>
                            <div className='BrowseHero-right-midle'>
                                <h4>PugG <br/> <span>Battle Royale</span></h4>
                                <div className='BrowseHero-right-midle-links'> 
                                    <ul>
                                      <li><FontAwesomeIcon icon={faStar}  className='start-icon'/> <span>4.8</span></li>
                                      <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/><span>2.2M</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='BrowseHero-right-left'>
                                  <li><FontAwesomeIcon icon={faDownload} className='daonload-icon'/></li>
                            </div>
                        </div>
                    </div>
                    <h4 className='browese-hero-view-all'><a>View All Games</a></h4>
                  </div>
              </div>
        </div>
    </>
  )
}

export default BrowseHero