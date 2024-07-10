import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <Navbar />
    <Home />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />


  </React.StrictMode>
)
