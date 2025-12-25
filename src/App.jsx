// App.jsx (Updated - Footer on all pages)
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Cards from './Components/Cards'
import Ourclient from './Components/Ourclient'
import Footer from './Components/Footer'
import About from './Components/About'
import Service from './Components/Service'
import Teampage from './Components/Teampage'
import Contact from './Components/Contact'
import SeCards from './Components/servicesCards'
import Process from './Components/process'
import Start from './Components/Start'
import Portfolio from './Components/Portfolio'
import Currer from './Components/CareersPage'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar appears on all pages */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={
              <>
                <Herosection />
                <Cards/>
                <SeCards />
                <Process />
                <Start />
                {/* <Ourclient /> */}
              </>
            } />
           
            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service/>} />
            <Route path="/team" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/careers" element={<Currer/>} />
          </Routes>
        </main>
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App