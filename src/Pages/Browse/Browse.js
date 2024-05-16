import React from 'react'

import BrowseHero from '../../Sections/BrowseHero/BrowseHero'
import BrowseStreem from '../../Sections/BrowseStreem/BrowseStreem'
import { BrowserRouter } from 'react-router-dom'
import BrowesePopular from '../../Sections/BrowesePopular/BrowesePopular'

const Browse = () => {
  return (
    <>
       <BrowseStreem/>
       <BrowseHero/>
       <BrowesePopular/> 
    </>
  )
}

export default Browse