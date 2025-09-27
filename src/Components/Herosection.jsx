import React from 'react'
import Img from './Image/desktop-wallpaper-12-striking-dark-sites-that-are-perfect-for-your-developer.jpg'

const Herosection = () => {
  return (
    <div 
      className="relative flex items-center justify-center w-full hero-section"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // marginTop: '80px' // Adjust based on your navbar height
      }}
    >
      {/* Centered Content */}
      <div className="hero-content text-center px-4 w-full max-w-6xl mx-auto">
        <h1 className='hero-title transition-all duration-300 ease-in-out transform hover:scale-105'>
          "RESICODE - YOUR VISION OUR WEB SOLUTION"
        </h1>
        
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-16">
          <button 
            className="hero-button bg-transparent text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black"
          >
            Get A Free Consultation
          </button>
          <button 
            className="hero-button bg-transparent text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black"
          >
            Training
          </button>
        </div>
      </div>

      {/* Add CSS for responsive behavior */}
      <style jsx>{`
        .hero-section {
          height: 100vh;
          min-height: 600px;
          max-height: 1200px;
        }
        
        .hero-title {
          color: white;
          font-size: clamp(24px, 5vw, 48px);
          padding-bottom: 40px;
          line-height: 1.3;
          font-weight: 600;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        
        .hero-button {
          min-width: 200px;
          width: 100%;
          max-width: 280px;
          font-size: clamp(16px, 2vw, 20px);
          white-space: nowrap;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            height: 70vh;
            min-height: 500px;
            margin-top: 70px;
          }
          
          .hero-title {
            padding-bottom: 30px;
            line-height: 1.4;
          }
          
          .hero-buttons {
            gap: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section {
            height: 60vh;
            min-height: 400px;
          }
          
          .hero-title {
            padding-bottom: 25px;
            font-size: 20px;
          }
          
          .hero-button {
            min-width: 180px;
            padding: 12px 20px;
            font-size: 16px;
          }
        }
        
        @media (max-width: 360px) {
          .hero-section {
            min-height: 350px;
          }
          
          .hero-title {
            font-size: 18px;
            padding-bottom: 20px;
          }
          
          .hero-buttons {
            gap: 15px;
          }
        }
        
        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-section {
            height: 100vh;
            min-height: 300px;
          }
          
          .hero-title {
            padding-bottom: 20px;
            font-size: 20px;
          }
          
          .hero-buttons {
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  )
}

export default Herosection