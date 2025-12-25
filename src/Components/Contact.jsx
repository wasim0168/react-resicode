import React, { useState } from "react";
import SocialLinks from "./SocialLink";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Consulting",
    "Other",
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // In your ContactPage.jsx, update the handleSubmit function:

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Replace the mock API call with actual backend call
    const response = await fetch('http://localhost:5000/api/contact/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (response.ok && result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', serviceType: '', subject: '', message: '' });
      
      // Show success message
      alert(result.message || 'Message sent successfully!');
    } else {
      setSubmitStatus('error');
      alert(result.message || 'Failed to send message. Please try again.');
    }
  } catch (error) {
    setSubmitStatus('error');
    console.error('Error submitting form:', error);
    alert('Network error. Please check your connection and try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get in Touch with <span className="text-yellow-300">RESICODE</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Whether you want to start a project or just say hello, our team is
            ready to help.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-10">

            {/* Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
  {[
    ["Email Us", "resicode003@gmail.com", ""],
    ["Call Us", "9529468439", ""],
    ["Live Chat", "Start Chat", ""],
  ].map((item, i) => (
    <div
      key={i}
      className="
        bg-gray-800 border border-gray-700 rounded-xl 
        p-6 flex flex-col items-center justify-center 
        text-center min-h-[160px]
        hover:-translate-y-1 hover:shadow-xl 
        transition duration-300
      "
    >
      {/* Icon */}
      <div className="text-3xl mb-3">{item[2]}</div>

      {/* Title */}
      <h3 className="text-lg font-bold text-yellow-300">
        {item[0]}
      </h3>

      {/* Value */}
      <p className="text-gray-300 mt-2 break-all">
        {item[1]}
      </p>
    </div>
  ))}
</div>


            {/* Office Info */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-300 mb-6">
                Momon Colony, Old Kampthee Road, Kalamna, Nagpur, Maharashtra
                - 440026
              </p>

              <div className="space-y-4 text-gray-300">
                <p>🕒 Mon - Sat: 10 AM – 7 PM</p>
                <p>⭐ Rated 4.9/5 by clients</p>
                <p>🚗 Ample parking available</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                ["name", "Full Name *", "text"],
                ["email", "Email Address *", "email"],
                ["phone", "Phone Number", "tel"],
                ["subject", "Subject", "text"],
              ].map(([name, label, type]) => (
                <div key={name}>
                  <label className="block text-gray-300 mb-1">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-300 mb-1">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"
                >
                  <option value="">Select Service</option>
                  {serviceTypes.map((s, i) => (
                    <option key={i}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-yellow-300 text-black font-bold py-3 rounded-lg hover:opacity-90 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center mt-3">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 bg-gray-800 border border-gray-700 rounded-xl p-10 text-center text-gray-300">
          📍 Momon Colony, Old Kampthee Road, Kalamna, Nagpur
        </div>

        <SocialLinks />
      </div>
    </section>
  );
};

export default ContactPage;
