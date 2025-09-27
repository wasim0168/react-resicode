// Cards.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardsWithHover = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      id: 1,
      title: "Web Development",
      description: "Build modern, responsive websites with the latest technologies and frameworks.",
      icon: "💻",
      bgColor: "from-blue-500 to-purple-600",
      hoverColor: "from-purple-600 to-blue-500",
      category: "web"
    },
    {
      id: 2,
      title: "App Development",
      description: "Building user-friendly and high-performance apps",
      icon: "📱",
      bgColor: "from-green-500 to-teal-600",
      hoverColor: "from-teal-600 to-green-500",
      category: "app"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design beautiful and intuitive user interfaces with exceptional user experience.",
      icon: "🎨",
      bgColor: "from-pink-500 to-red-600",
      hoverColor: "from-red-600 to-pink-500",
      category: "uiux"
    },
  ];

  const handleLearnMore = (category) => {
    // Navigate to services page with category filter
    navigate('/services', { state: { filter: category } });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-xl text-gray-300">Discover what we can do for your business</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cardsData.map((card) => (
          <div 
            key={card.id}
            className={`
              group relative bg-gray-800 rounded-2xl p-8 transition-all duration-500 ease-in-out 
              transform hover:-translate-y-4 hover:scale-105 cursor-pointer
              border border-gray-700 hover:border-transparent
              shadow-lg hover:shadow-2xl
            `}
          >
            {/* Background Gradient on Hover */}
            <div className={`
              absolute inset-0 bg-gradient-to-br ${card.bgColor} rounded-2xl 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500
            `} />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                {card.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed transition-colors duration-300">
                {card.description}
              </p>
              
              {/* Learn More Button */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <button 
                  onClick={() => handleLearnMore(card.category)}
                  className={`
                    px-6 py-2 rounded-full font-semibold text-white 
                    bg-black bg-opacity-50 hover:bg-opacity-70 
                    border border-white border-opacity-30 hover:border-opacity-50
                    transition-all duration-300 transform hover:scale-105
                  `}
                >
                  Learn More →
                </button>
              </div>
            </div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10 group-hover:animate-shine" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsWithHover;