import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from './Sections/Header/Header'
import Footer from './Sections/Footer/Footer'
import Container from './Sections/Content/Container'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Browse from './Pages/Browse/Browse'
import Details from './Pages/Details/Details'
import Streams from './Pages/Streams/Streams'

const App = () => {
  return (
    <div>
      <Header/>
      <Container>
          <BrowserRouter>
              <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/Profile' element = {<Profile/>}/>
                <Route path='/Browse' element = {<Browse/>}/>
                <Route path='/Details' element = {<Details/>}/>
                <Route path='/Streams' element = {<Streams/>}/>
              </Routes>
          </BrowserRouter>
      </Container>
      <Footer/>
    </div>
  )
}

export default App