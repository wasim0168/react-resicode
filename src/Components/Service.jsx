import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import './Service.css';
import { FiArrowRight, FiCheck, FiChevronRight, FiX, FiFilter } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [filter, setFilter] = useState('all');
  const [setActiveFilter] = useState(null);
  const location = useLocation();

  // Get filter from navigation state
  useEffect(() => {
    if (location.state && location.state.filter) {
      setFilter(location.state.filter);
      setActiveFilter(location.state.filter);
    }
  }, [location.state]);

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "💻",
      category: "web",
      description: "Custom web applications built with modern technologies",
      fullDescription: "We create responsive, scalable web applications using React, Node.js, and other cutting-edge technologies. Our solutions are tailored to your business needs and deliver exceptional performance across all devices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Cross-browser Compatible", "Scalable Architecture", "Secure Implementation"],
      price: "",
      color: "#4F46E5",
      gradient: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "📱",
      category: "app",
      description: "Native and cross-platform mobile applications",
      fullDescription: "Develop high-performance mobile apps for iOS and Android that provide exceptional user experiences with smooth animations and native functionality.",
      features: ["iOS & Android", "React Native", "Native Performance", "App Store Deployment", "Push Notifications", "Offline Support"],
      price: "",
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)"
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: "🎨",
      category: "uiux",
      description: "User-centered design that converts visitors to customers",
      fullDescription: "Our design team creates intuitive interfaces that enhance user engagement and drive business growth through thoughtful design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Design Handoff"],
      price: "",
      color: "#DB2777",
      gradient: "linear-gradient(135deg, #DB2777 0%, #EC4899 100%)"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      icon: "🛒",
      category: "web",
      description: "Complete online store development and optimization",
      fullDescription: "Build and optimize your online store with secure payment processing, inventory management, and seamless shopping experiences.",
      features: ["Payment Integration", "Inventory Management", "Security"],
      price: "",
      color: "#EA580C",
      gradient: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)"
    },
    {
      id: 5,
      title: "SEO & Digital Marketing",
      icon: "📈",
      category: "web",
      description: "Boost your online visibility and drive targeted traffic",
      fullDescription: "Comprehensive SEO strategies and digital marketing campaigns to grow your business online through organic reach and targeted advertising.",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Performance Tracking", "Competitor Analysis", "ROI Optimization"],
      price: "",
      color: "#0891B2",
      gradient: "linear-gradient(135deg, #0891B2 0%, #0EA5E9 100%)"
    },
    {
      id: 6,
      title: "Consulting & Strategy",
      icon: "🔍",
      category: "uiux",
      description: "Expert guidance for your digital transformation",
      fullDescription: "Strategic consulting to help you make informed decisions about technology and digital growth with data-driven insights.",
      features: ["Technical Audit", "Strategy Planning", "Implementation Guide", "Ongoing Support", "Market Analysis", "Growth Roadmap"],
      price: "",
      color: "#7C3AED",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Services', icon: '', color: '#4F46E5' },
    { value: 'web', label: 'Web Development', icon: '', color: '#3B82F6' },
    { value: 'app', label: 'App Development', icon: '', color: '#10B981' },
    { value: 'uiux', label: 'UI/UX Design', icon: '', color: '#EC4899' }
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(service => service.category === filter);

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We dive deep into your business goals, target audience, and project requirements through detailed discussions.",
      duration: "1-2 Days",
      activities: ["Initial Meeting", "Requirement Analysis", "Goal Setting", "Scope Definition"]
    },
    {
      number: "02",
      title: "Planning & Strategy",
      description: "We create a comprehensive roadmap and strategy with detailed specifications and timeline.",
      duration: "3-5 Days",
      activities: ["Project Planning", "Tech Stack Selection", "Timeline Creation", "Resource Allocation"]
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Our team brings your vision to life with creative design and robust development implementation.",
      duration: "2-4 Weeks",
      activities: ["UI/UX Design", "Development", "Quality Checks", "Client Review"]
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures flawless performance, security, and optimal user experience.",
      duration: "1-2 Weeks",
      activities: ["Testing", "Bug Fixing", "Performance Optimization", "Security Audit"]
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "Smooth deployment to production environment with comprehensive documentation.",
      duration: "3-5 Days",
      activities: ["Deployment", "Final Testing", "Documentation", "Training"]
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, maintenance, and optimization to ensure long-term success.",
      duration: "Ongoing",
      activities: ["Technical Support", "Updates", "Performance Monitoring", "Enhancements"]
    }
  ];

  const ServiceCard = ({ service }) => (
    <div 
      className="service-card"
      onClick={() => setSelectedService(service)}
      style={{ '--service-color': service.color }}
    >
      <div className="service-card-inner">
        <div className="service-icon" style={{ background: service.gradient }}>
          {service.icon}
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-features">
          {service.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="feature-tag">
              <FiCheck /> {feature}
            </span>
          ))}
          {service.features.length > 3 && (
            <span className="feature-tag">+{service.features.length - 3} more</span>
          )}
        </div>
        <div className="service-footer">
          <span className="service-price">{service.price}</span>
          <button className="learn-more-btn">
  <span>Learn More</span>
  <FiArrowRight className="arrow-icon" />
</button>

        </div>
        <div className="card-hover-effect"></div>
      </div>
    </div>
  );

  const ServiceDetail = ({ service, onClose }) => (
    <div className="service-detail-overlay">
      <div className="service-detail" style={{ '--service-color': service.color }}>
        <button className="close-btn" onClick={onClose}>
          <FiX />
        </button>
        
        <div className="detail-header">
          <div className="detail-icon" style={{ background: service.gradient }}>
            {service.icon}
          </div>
          <div>
            <h2>{service.title}</h2>
            <span className="service-category">{filterOptions.find(f => f.value === service.category)?.label}</span>
          </div>
        </div>
        
        <div className="detail-content">
          <div className="description-section">
            <h4>Service Overview</h4>
            <p>{service.fullDescription}</p>
          </div>
          
          <div className="features-section">
            <h4>What's Included <HiOutlineSparkles /></h4>
            <div className="features-grid">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <FiCheck className="feature-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pricing-section">
            <div className="price-card">
              <h4>Pricing</h4>
              <div className="price-display">
                <span className="price-amount">{service.price}</span>
                <span className="price-note">Flexible plans available based on project scope</span>
              </div>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="cta-button primary">
              Get Started <FiChevronRight />
            </button>
            <button className="cta-button secondary" onClick={onClose}>
              Browse More Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const FilterButtons = () => (
    <div className="w-full max-w-7xl mx-auto px-4 mb-12">

  {/* Header */}
  <div className="flex items-center justify-center gap-3 mb-6">
    <FiFilter className="text-[#FBDB57] text-xl" />
    <span className="text-lg font-semibold text-white">
      Filter by Category
    </span>
  </div>

  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-4">
    {filterOptions.map(option => (
      <button
        key={option.value}
        onClick={() => setFilter(option.value)}
        className={`flex items-center gap-2 px-6 py-3 rounded-full
                    border text-sm font-medium transition-all duration-300
                    ${
                      filter === option.value
                        ? 'bg-opacity-10 shadow-lg scale-105'
                        : 'hover:scale-105'
                    }`}
        style={{
          borderColor: filter === option.value ? option.color : '#374151',
          color: filter === option.value ? option.color : '#d1d5db',
          backgroundColor:
            filter === option.value ? `${option.color}20` : 'transparent'
        }}
      >
        <span className="text-lg">{option.icon}</span>
        {option.label}
      </button>
    ))}
  </div>

</div>

  );

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Digital Solutions That
              <span className="gradient-text"> Drive Growth</span>
            </h1>
            <p className="hero-description">
              At Resicode, we provide a full range of web development and digital solutions tailored to meet the unique needs of your business. Our goal is to help you grow online with modern, scalable, and user-friendly solutions.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section py-10 shadow-lg mt-1" style={{backgroundColor:'#101828'}}>
        <div className="container">
          <div className="section-header" style={{color:"white"}}>
            <h1 style={{fontSize:"40px"} } className='font-bold'>Our Service Portfolio</h1>
            <p className="section-subtitle">
              Explore our comprehensive range of digital services designed to elevate your business
            </p>
          </div>
          
          <FilterButtons />
          
          <div className="w-full max-w-7xl mx-auto px-4">
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      place-items-stretch
    "
  >
    {filteredServices.map(service => (
      <ServiceCard
        key={service.id}
        service={service}
      />
    ))}
  </div>
</div>

        </div>
      </section>

      {/* Process Section */}
      <section className="process-section mt-1">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p className="section-subtitle">
              A transparent, step-by-step approach to delivering exceptional digital solutions
            </p>
          </div>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-header">
                  <div className="step-number">{step.number}</div>
                  <div className="step-duration">
                    <span className="duration-icon">⏱️</span>
                    {step.duration}
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-activities">
                  {step.activities.map((activity, idx) => (
                    <span key={idx} className="activity-tag">
                      {activity}
                    </span>
                  ))}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector">
                    <FiChevronRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's transform your ideas into a powerful digital solution. Get started with a free consultation and see how we can help your business grow.
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <FiCheck /> Free Initial Consultation
                </div>
                <div className="cta-feature">
                  <FiCheck /> No Commitment Required
                </div>
                <div className="cta-feature">
                  <FiCheck /> Response Within 24 Hours
                </div>
              </div>
            </div>
            <div className="cta-actions">
              <button className="primary-cta">
                Get Free Consultation <FiArrowRight />
              </button>
              <button className="secondary-cta">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="testimonial-section p-2 bg-yellow-500 mb-5">
        <div className="container">
          <div className="testimonial-card">
            {/* <div className="quote-icon">"</div> */}
            {/* review */}
            <p className="testimonial-text">
              "Resicode delivered our project ahead of schedule with exceptional quality. Their team was professional, communicative, and truly understood our vision."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <strong>Ather Trading</strong>
                <span>E-commerce Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetail 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

        {/* Styles */}
      <style jsx>{`

/* Service.css */

/* ===== Variables ===== */
:root {
  --primary-color: #4F46E5;
  --primary-gradient: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  --secondary-color: #10B981;
  --dark-color: #1F2937;
  --light-color: #F9FAFB;
  --gray-color: #6B7280;
  --card-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --card-shadow-hover: 0 20px 40px -10px rgba(79, 70, 229, 0.2), 0 10px 20px -5px rgba(79, 70, 229, 0.1);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== Reset & Base Styles ===== */
.services-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
  min-height: 100vh;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ===== Hero Section ===== */
.services-hero {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  background: var(--dark-color);
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 2rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffef14ff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
}

/* ===== Services Grid Section ===== */
.services-grid-section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--gray-color);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Filter Section */
.filter-section {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 3rem;
  box-shadow: var(--card-shadow);
  border: 1px solid #E5E7EB;
}

.filter-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--dark-color);
  font-weight: 600;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid transparent;
  background: #F3F4F6;
  border-radius: 50px;
  font-weight: 500;
  color: var(--dark-color);
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover {
  background: #E5E7EB;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: white;
  border-color: var(--filter-color);
  color: var(--filter-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.filter-icon {
  font-size: 1.25rem;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  position: relative;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }
.service-card:nth-child(5) { animation-delay: 0.5s; }
.service-card:nth-child(6) { animation-delay: 0.6s; }
.service-card:nth-child(7) { animation-delay: 0.7s; }
.service-card:nth-child(8) { animation-delay: 0.8s; }

.service-card-inner {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  height: 100%;
  position: relative;
  z-index: 1;
  border: 1px solid #E5E7EB;
  transition: var(--transition);
  overflow: hidden;
}

.service-card:hover .service-card-inner {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--service-color);
}

.service-card:hover .card-hover-effect {
  opacity: 1;
}

.card-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--service-color);
  opacity: 0;
  transition: var(--transition);
}

.service-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  color: white;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 0.75rem;
}

.service-card p {
  color: var(--gray-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  background: #F3F4F6;
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--dark-color);
}

.feature-tag svg {
  color: var(--service-color);
}

.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid #E5E7EB;
}

.service-price {
  font-weight: 700;
  color: var(--service-color);
  font-size: 1.125rem;
}

.learn-more-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  font-weight: 600;
  color: var(--dark-color);
  cursor: pointer;
  transition: var(--transition);
}

.learn-more-btn:hover {
  border-color: var(--service-color);
  color: var(--service-color);
  transform: translateX(4px);
}

/* ===== Process Section ===== */
.process-section {
  padding: 5rem 0;
  background:#121F39;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
}

.process-step {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  position: relative;
  border: 1px solid #E5E7EB;
  transition: var(--transition);
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow);
  border-color: var(--primary-color);
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.step-number {
  font-size: 2rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.step-duration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: #F3F4F6;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
}

.process-step h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
}

.process-step p {
  color: var(--gray-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.step-activities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.activity-tag {
  padding: 0.375rem 0.75rem;
  background: var(--primary-color);
  color: white;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
}

.step-connector {
  position: absolute;
  top: 50%;
  right: -1rem;
  transform: translateY(-50%);
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

/* ===== CTA Section ===== */
.cta-section {
  padding: 5rem 0;
}

.cta-card {
  background: var(--dark-color);
  border-radius: var(--border-radius);
  padding: 4rem;
  color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-gradient);
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.cta-feature svg {
  color: var(--secondary-color);
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.primary-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--primary-gradient);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
}

.primary-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
}

.secondary-cta {
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
}

.secondary-cta:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* ===== Testimonial Section ===== */


.testimonial-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 3rem;
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: var(--card-shadow);
  border: 1px solid #E5E7EB;
}

.quote-icon {
  font-size: 4rem;
  color: var(--primary-color);
  opacity: 0.2;
  margin-bottom: -2rem;
}

.testimonial-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--dark-color);
  font-style: italic;
  margin-bottom: 2rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.author-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.author-info strong {
  font-size: 1.125rem;
  color: var(--dark-color);
}

.author-info span {
  font-size: 0.875rem;
  color: var(--gray-color);
}

/* ===== Service Detail Modal ===== */
.service-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: fadeIn 0.3s ease-out;
}

.service-detail {
  background: white;
  border-radius: var(--border-radius);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.4s ease-out;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #F3F4F6;
  border: none;
  border-radius: 8px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  z-index: 2;
}

.close-btn:hover {
  background: #E5E7EB;
  transform: rotate(90deg);
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem 3rem 2rem;
  background: linear-gradient(180deg, var(--service-color)10 0%, #FFFFFF 100%);
}

.detail-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 20px;
  color: white;
}

.detail-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-color);
}

.service-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--service-color)10;
  color: var(--service-color);
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

.detail-content {
  padding: 0 3rem 3rem;
}

.description-section h4,
.features-section h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.description-section p {
  color: var(--gray-color);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #F9FAFB;
  border-radius: 8px;
  transition: var(--transition);
}

.feature-item:hover {
  background: #F3F4F6;
  transform: translateX(4px);
}

.feature-check {
  color: var(--service-color);
  min-width: 20px;
}

.pricing-section {
  margin-bottom: 2rem;
}

.price-card {
  background: var(--service-color)10;
  border: 2px solid var(--service-color)20;
  border-radius: var(--border-radius);
  padding: 2rem;
}

.price-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
}

.price-display {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.price-amount {
  font-size: 2rem;
  font-weight: 800;
  color: var(--service-color);
}

.price-note {
  color: var(--gray-color);
  font-size: 0.875rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
}

.cta-button {
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.cta-button.primary {
  background: var(--service-color);
  color: white;
  border: none;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid #E5E7EB;
  color: var(--dark-color);
}

.cta-button.secondary:hover {
  border-color: var(--service-color);
  color: var(--service-color);
}

/* ===== Animations ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== Responsive Design ===== */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.75rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  .cta-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .cta-features {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .services-hero {
    padding: 4rem 0;
  }
  
  .hero-title {
    font-size: 2.25rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .process-timeline {
    grid-template-columns: 1fr;
  }
  
  .step-connector {
    display: none;
  }
  
  .service-detail {
    padding: 0;
  }
  
  .detail-header {
    padding: 2rem;
    flex-direction: column;
    text-align: center;
  }
  
  .detail-content {
    padding: 2rem;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.875rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-buttons {
    flex-direction: column;
  }
  
  .filter-btn {
    width: 100%;
    justify-content: center;
  }
  
  .cta-card {
    padding: 2rem;
  }
  
  .testimonial-card {
    padding: 2rem;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}


  .learn-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 9999px;

  font-size: 14px;
  font-weight: 600;


  background: rgba(255, 255, 255, 0.12);
  border: 1.8px solid rgba(0, 0, 0, 1);

  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.learn-more-btn:hover {
  
  transform: translateX(4px);
}

.learn-more-btn .arrow-icon {
  transition: transform 0.3s ease;
}

.learn-more-btn:hover .arrow-icon {
  transform: translateX(4px);
}

       
      `}</style>

    </div>
        

  );
};

export default ServicesPage;