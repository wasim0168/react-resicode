// Service.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Service.css';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [filter, setFilter] = useState('all');
  const location = useLocation();

  // Get filter from navigation state
  useEffect(() => {
    if (location.state && location.state.filter) {
      setFilter(location.state.filter);
    }
  }, [location.state]);

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "💻",
      category: "web",
      description: "Custom web applications built with modern technologies",
      fullDescription: "We create responsive, scalable web applications using React, Node.js, and other cutting-edge technologies. Our solutions are tailored to your business needs.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Cross-browser Compatible"],
      price: "Starting at $2,500"
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "📱",
      category: "app",
      description: "Native and cross-platform mobile applications",
      fullDescription: "Develop high-performance mobile apps for iOS and Android that provide exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Native Performance", "App Store Deployment"],
      price: "Starting at $4,000"
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: "🎨",
      category: "uiux",
      description: "User-centered design that converts visitors to customers",
      fullDescription: "Our design team creates intuitive interfaces that enhance user engagement and drive business growth.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,500"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      icon: "🛒",
      category: "web",
      description: "Complete online store development and optimization",
      fullDescription: "Build and optimize your online store with secure payment processing and inventory management.",
      features: ["Payment Integration", "Inventory Management", "Security", "Analytics"],
      price: "Starting at $3,500"
    },
    {
      id: 5,
      title: "SEO & Digital Marketing",
      icon: "📈",
      category: "web",
      description: "Boost your online visibility and drive targeted traffic",
      fullDescription: "Comprehensive SEO strategies and digital marketing campaigns to grow your business online.",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Performance Tracking"],
      price: "Starting at $800/month"
    },
    {
      id: 6,
      title: "Consulting & Strategy",
      icon: "🔍",
      category: "uiux",
      description: "Expert guidance for your digital transformation",
      fullDescription: "Strategic consulting to help you make informed decisions about technology and digital growth.",
      features: ["Technical Audit", "Strategy Planning", "Implementation Guide", "Ongoing Support"],
      price: "Custom Pricing"
    },
    {
      id: 7,
      title: "iOS App Development",
      icon: "📱",
      category: "app",
      description: "Native iOS applications with Swift",
      fullDescription: "High-performance native iOS apps built with Swift and modern Apple technologies.",
      features: ["Swift Development", "Apple Guidelines", "App Store Optimization", "iOS Features"],
      price: "Starting at $5,000"
    },
    {
      id: 8,
      title: "Android App Development",
      icon: "🤖",
      category: "app",
      description: "Native Android applications with Kotlin",
      fullDescription: "Robust Android apps developed with Kotlin and following Material Design principles.",
      features: ["Kotlin Development", "Material Design", "Google Play Deployment", "Android Features"],
      price: "Starting at $4,500"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Services' },
    { value: 'web', label: 'Web Development' },
    { value: 'app', label: 'App Development' },
    { value: 'uiux', label: 'UI/UX Design' }
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(service => service.category === filter);

  const ServiceCard = ({ service }) => (
    <div 
      className="service-card"
      onClick={() => setSelectedService(service)}
    >
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="learn-more-btn">Learn More</button>
    </div>
  );

  const ServiceDetail = ({ service, onClose }) => (
    <div className="service-detail-overlay">
      <div className="service-detail">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="detail-header">
          <span className="detail-icon">{service.icon}</span>
          <h2>{service.title}</h2>
        </div>
        <p className="detail-description">{service.fullDescription}</p>
        
        <div className="features-section">
          <h4>What's Included:</h4>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>✓ {feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="pricing-section">
          <h4>Pricing:</h4>
          <p className="price">{service.price}</p>
        </div>
        
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );

  const FilterDropdown = () => (
    <div className="filter-container">
      <label htmlFor="service-filter" className="filter-label">Filter by Category:</label>
      <select 
        id="service-filter"
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        className="filter-dropdown"
      >
        {filterOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  // Get category label for display
  const getCategoryLabel = (value) => {
    const option = filterOptions.find(opt => opt.value === value);
    return option ? option.label : 'All Services';
  };

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions to grow your business</p>
          {filter !== 'all' && (
            <div className="active-filter-badge">
              Showing: {getCategoryLabel(filter)}
            </div>
          )}
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p>We provide end-to-end digital solutions tailored to your specific needs</p>
            
            <FilterDropdown />
          </div>
          
          <div className="services-container">
            {filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))
            ) : (
              <div className="no-services">
                <p>No services found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation</p>
          <button className="primary-cta">Get Free Consultation</button>
        </div>
      </section>

      {selectedService && (
        <ServiceDetail 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default ServicesPage;