import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import ServicePage from './pages/ServicePage'
import ProjectPage from './pages/ProjectPage'

function App() {
 

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/ServicePage/:id' element={<ServicePage />} />
        <Route path='/ProjectPage/:id' element={<ProjectPage/>} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
