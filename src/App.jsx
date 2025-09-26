// App.jsx (Updated - Footer on all pages)
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Cards from './Cards'
import Ourclient from './Ourclient'
import Footer from './Footer'
import About from './About'
import Service from './Service'
import Teampage from './Teampage'
import Contact from './Contact'

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
                <Ourclient />
              </>
            } />
            
            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service/>} />
            <Route path="/team" element={<Teampage/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
        
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App