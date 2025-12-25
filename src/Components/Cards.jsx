// Cards.jsx
import React from 'react';
import trust from './Logos/trust.png';
import mains from './Logos/mains.png';
import profit from './Logos/profit.png';

const CardsWithHover = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">About RESICODE</h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-2">
          "Transforming ideas into powerful digital solutions that drive business growth and innovation."
        </p>
      </div>

      {/* Who We Are */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-12 lg:mb-16">
        
        {/* LEFT: Text Section */}
        <div className="text-gray-300 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
          <p className="mb-4 sm:mb-6">
            Resicode is a premier web development company dedicated to crafting modern,
            scalable digital solutions for businesses of all sizes. Founded with a passion
            for innovation and excellence, we combine technical expertise with creative
            vision to deliver exceptional results.
          </p>

          <p className="mb-4 sm:mb-6">
            Our team of skilled developers, designers, and strategists work collaboratively
            to transform your ideas into robust web applications that not only look great
            but also perform flawlessly and drive measurable business outcomes.
          </p>

          <p>
            We believe in building long-term partnerships with our clients, providing
            ongoing support and guidance to ensure your digital presence evolves with
            your business needs.
          </p>
        </div>

        {/* RIGHT: Cards Section */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">3+</h3>
            <p className="text-sm sm:text-base">Years Experience</p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 text-white rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">50+</h3>
            <p className="text-sm sm:text-base">Projects Delivered</p>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">98%</h3>
            <p className="text-sm sm:text-base">Client Satisfaction</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-yellow-500 text-white rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">24/7</h3>
            <p className="text-sm sm:text-base">Support Hours</p>
          </div>
        </div>
      </div>

      {/* Vision Mission Values Section */}
      <div className="mb-12 lg:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          
          {/* Vision */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-[#FBDB57] mb-3">Our Vision</h4>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              To be the leading web development partner for businesses seeking innovative, scalable, and future-proof digital solutions that drive sustainable growth and competitive advantage.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-[#F45DA2] mb-3">Our Mission</h4>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Empower businesses with cutting-edge web solutions that enhance their digital presence, streamline operations, and create meaningful connections with their audience through technology.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-[#FBDB57] mb-3">Our Values</h4>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
               Innovation, Quality, Transparency, Collaboration, and Client Success. We believe in delivering excellence while building trust-based relationships.partnerships that drive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 sm:my-12 border-gray-700" />

      {/* Why Choose Resicode */}
      <div className="mb-12 lg:mb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Why Choose Resicode?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Discover what sets us apart in the competitive web development landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Trust & Reliability */}
          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4 flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <img src={trust} alt="Trust" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F45DA2] mb-3 text-center">
                Trust & Reliability
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed">
              We build trust through transparent communication, reliable delivery, and long-term partnerships. Your success is our priority.
            </p>
          </div>

          {/* Technical Expertise */}
          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4 flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <img src={mains} alt="Technical Expertise" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FBDB57] mb-3 text-center">
                Technical Expertise
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed">
              Our team stays ahead of technology trends, ensuring your projects are built with the latest, most efficient tools and frameworks.
            </p>
          </div>

          {/* Cost-Effective Solutions */}
          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4 flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <img src={profit} alt="Cost-Effective" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F45DA2] mb-3 text-center">
                Cost-Effective Solutions
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed">
              Premium quality doesn't have to mean premium prices. We offer competitive pricing without compromising on quality or service.
            </p>
          </div>
        </div>
      </div>

      {/* Fast & Efficient Delivery */}
      <div className="mb-12 lg:mb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Fast & Efficient Delivery
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            We understand the importance of time in business. Our agile development process ensures quick turnaround times without sacrificing quality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  From project kickoff to final delivery, we prioritize efficiency and clear communication to keep your project on track and within budget. Our agile methodology ensures rapid iterations and continuous improvement throughout the development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 sm:my-12 border-gray-700" />
    </div>
  );
};

export default CardsWithHover;