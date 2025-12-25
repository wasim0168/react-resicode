// Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from './Logos/Screenshot_20250920-003837-removebg-preview.png'
import './Custom.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div>
      <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-xl py-1' : 'bg-transparent py-2'}`} style={{backgroundColor: '#101828'}}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
            
            {/* Logo - Optimized for mobile */}
            <Link to="/" className="flex-shrink-0 z-10" onClick={closeMenu}>
              <div className="logo-container group">
                <img 
                  src={logo} 
                  className="logo-image transition-all duration-300 group-hover:scale-105 group-hover:rotate-1" 
                  alt="Resicode Logo" 
                  style={{ 
                    height: '50px', 
                    width: 'auto',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))'
                  }}
                />
              </div>
            </Link>

            {/* Centered Navigation Links - Desktop */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-800">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive(link.path) 
                        ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-md' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Careers Button - Desktop */}
            <div className="hidden lg:block flex-shrink-0">
              <Link to="/careers">
                <button 
                  type="button" 
                  className="careers-btn group relative px-6 py-2.5 rounded-full text-white font-bold text-sm tracking-wider transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl overflow-hidden"
                  onClick={closeMenu}
                >
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-full opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Text */}
                  <span className="relative flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1.5 transition-transform duration-200 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Careers
                  </span>
                </button>
              </Link>
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="lg:hidden flex items-center">
              <button 
                type="button" 
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg 
                  className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-80 opacity-100 mt-1' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-1 pb-2 space-y-0.5 bg-gray-900/95 backdrop-blur-lg rounded-lg border border-gray-800 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link-mobile block px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                    isActive(link.path)
                      ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  onClick={closeMenu}
                >
                  <div className="flex items-center">
                    <span className="flex-1">{link.label}</span>
                    {isActive(link.path) && (
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                    )}
                  </div>
                </Link>
              ))}
              
              {/* Careers Button - Mobile */}
              <Link to="/careers" onClick={closeMenu}>
                <button 
                  type="button" 
                  className="w-full mt-2 px-4 py-2.5 rounded-lg text-white font-bold text-sm bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 hover:from-yellow-600 hover:via-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-[1.02] shadow-md flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Careers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed navbar - Optimized for mobile */}
      <div className="nav-spacer" style={{ height: '56px' }}></div>

      <style jsx>{`
        .navbar {
          background: linear-gradient(180deg, #101828 0%, rgba(16, 24, 40, 0.98) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          min-height: 56px;
        }

        .logo-container {
          position: relative;
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #FFD700, #FF6B6B, #4ECDC4, #45B7D1);
          border-radius: 8px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover::before {
          opacity: 0.3;
        }

        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .careers-btn {
          box-shadow: 0 2px 8px rgba(251, 146, 60, 0.3);
        }

        .careers-btn:hover {
          box-shadow: 0 4px 15px rgba(251, 146, 60, 0.5);
        }

        /* Pulse animation for active link indicator */
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Mobile menu animation */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link-mobile {
          animation: slideDown 0.2s ease-out forwards;
        }

        .nav-link-mobile:nth-child(1) { animation-delay: 0.05s; }
        .nav-link-mobile:nth-child(2) { animation-delay: 0.1s; }
        .nav-link-mobile:nth-child(3) { animation-delay: 0.15s; }
        .nav-link-mobile:nth-child(4) { animation-delay: 0.2s; }
        .nav-link-mobile:nth-child(5) { animation-delay: 0.25s; }

        /* Responsive adjustments for tablets */
        @media (min-width: 640px) {
          .navbar {
            min-height: 64px;
          }
          
          .nav-spacer {
            height: 64px;
          }
          
          .logo-image {
            height: 55px !important;
          }
          
          .nav-link-mobile {
            font-size: 0.875rem;
            padding: 0.75rem 1rem;
          }
        }

         @media (max-width: 340px) {
          .navbar {
            min-height: 14px;
          }
          
        }


        /* Desktop adjustments */
        @media (min-width: 1024px) {
          .navbar {
            min-height: 80px;
          }
          
          .nav-spacer {
            height: 80px;
          }
          
          .logo-image {
            height: 65px !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .navbar {
            min-height: 53px;
          }
          
          .nav-spacer {
            height: 52px;
          }
          
          .logo-image {
            height: 45px !important;
          }
          
          .mobile-menu {
            font-size: 0.75rem;
          }
        }

        /* Landscape mode for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .navbar {
            min-height: 50px;
          }
          
          .nav-spacer {
            height: 50px;
          }
          
          .logo-image {
            height: 40px !important;
          }
          
          .mobile-menu {
            max-height: 60vh;
            overflow-y: auto;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .navbar,
          .logo-image,
          .nav-link,
          .careers-btn,
          .nav-link-mobile {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar