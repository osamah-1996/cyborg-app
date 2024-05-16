import React from 'react'
import "./Home.css"
import Hero from './Pages/Hero/Hero';
import MostPopuler from './Components/MostPoupler/MostPopuler';
import Gamming from './Components/Gamming/Gamming';
const Home = () => {
  return (
    <>
          
          <Hero/>
         <MostPopuler/>
         <Gamming/>
    </>
  )
}

export default Home