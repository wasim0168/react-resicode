// Navbar.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './Logos/Screenshot_20250920-003837-removebg-preview.png'
import './Custom.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600" style={{backgroundColor:'#26282dff'}}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          {/* Logo - Increased Size */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group" onClick={closeMenu}>
            <img 
              src={logo} 
              className="logo-image transition-transform duration-300 group-hover:scale-110" 
              alt="Resicode Logo" 
              style={{ 
                height: '80px', // Increased from default
                width: 'auto',
                maxWidth: '200px'
              }}
            />
          </Link>
          
          {/* Training Button + Hamburger */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            
        
            
            {/* Hamburger Button */}
            <button 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden transition-all duration-300 hover:bg-gray-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg 
                className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          
          {/* Menu Items */}
          <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black md:bg-transparent" style={{fontSize:'18px', paddingLeft:'40px'}}>
              <li className="nav-item">
                <Link to="/" className="nav-link text-white hover:text-yellow-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-800" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white hover:text-yellow-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-800" onClick={closeMenu}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-white hover:text-yellow-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-800" onClick={closeMenu}>Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link text-white hover:text-yellow-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-800" onClick={closeMenu}>Our Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white hover:text-yellow-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-800" onClick={closeMenu}>Contact</Link>
              </li>
              
              {/* Training Button - Visible on mobile */}
              <li className="nav-item md:hidden mt-4 pt-4 border-t border-gray-700">
                <button 
                  type="button" 
                  className="w-full text-black bg-yellow-500 font-bold rounded-lg text-lg px-6 py-3 text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-600 hover:shadow-lg"
                  onClick={closeMenu}
                >
                  Training
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="nav-spacer" style={{ height: '100px' }}></div>
    </div>
  )
}

export default Navbar