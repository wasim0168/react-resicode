import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold text-yellow-400">RESICODE</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Web & Script is a leading web development and design company dedicated to creating
               innovative and user-friendly digital solutions. 
               We empower businesses to thrive in the digital world with
               cutting-edge technology and creative expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span className="text-gray-300">Memon Colony Front Of Dadi Amma Masjid Nagpur 440026</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-yellow-400" />
                <span className="text-gray-300">+91 9529468439</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400" />
                <span className="text-gray-300">resicode003@gmail.com</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400"
                />
                <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Resicode. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;