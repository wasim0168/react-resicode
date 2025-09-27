// ContactPage.jsx
import React, { useState } from 'react';
import './Contact.css';
import SocialLinks from './SocialLink';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Phone</h3>
              <p>+91 9529468439</p>
              <span>Mon-Fri from 8am to 5pm</span>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>resicode003@gmail.com</p>
              <span>We'll reply within 24 hours</span>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Office</h3>
              <p>RESICODE</p>
              <span>Memon Colony Front Of Dadi Amma Masjid Nagpur 440026</span>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Business Hours</h3>
              <p>Monday - Friday</p>
              <span>9:00 AM - 6:00 PM EST</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us Here</h2>
          <div className="map-placeholder">
            <div className="map-overlay">
              <i className="fas fa-map-marker-alt"></i>
              <p>Memon Colony Front Of Dadi Amma Masjid Nagpur 440026</p>
            </div>
          </div>
        </div>
      </div>
      <SocialLinks/>
    </div>
  );
};

export default ContactPage;