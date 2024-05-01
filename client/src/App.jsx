import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Appointment from './components/Appointment';
import { Routes, Route } from 'react-router-dom';
import './Styles.css'
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
