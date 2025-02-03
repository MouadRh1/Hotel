import React from 'react'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Room from './Components/Rooms/Room'
import Amenities from './Components/Amenities/Amenities'
import Testimontial from './Components/Testimontial/Testimontial'
import Category from './Components/Category/Category'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
        <BrowserRouter>
          <Nav/>
          
          <Routes>
            <Route path='/' element={
              <>
                <Header/>
                <About/>
                <Services/>
                <Room/>
                <Amenities/>
                <Testimontial/>
              </>
            }/>
            <Route path='/About' element={<>
              <Header/>
              <About/>
            </>}/>
            <Route path='/Categoty' element={<>
              <Header/>
              <Category/>
            </>}/>
            <Route path='/Testimontial' element={<>
              <Header/>
              <Testimontial/>
            </>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Rooms' element={
              <>
                <Header/>
                <Room/>
              </>
            }/>
            <Route path='/Blogs' element={
              <>
                <Header/>
                <Amenities/>
              </>
            }/>
          </Routes>
          <Footer/>
        </BrowserRouter>
  )
}
