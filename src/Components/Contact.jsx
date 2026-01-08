import React, { useState } from "react";

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
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Use your deployed backend URL
  const BACKEND_URL = "https://resicode-backend.onrender.com";

  const serviceTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Consulting",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) setFormErrors({ ...formErrors, [name]: '' });
    // Clear messages when user starts typing
    if (successMessage) setSuccessMessage("");
    if (errorMessage) setErrorMessage("");
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");
    
    try {
      console.log(`📤 Sending to: ${BACKEND_URL}/api/contact/send`);
      
      const response = await fetch(`${BACKEND_URL}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      console.log('📥 Response:', result);
      
      if (response.ok && result.success) {
        setSuccessMessage(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', serviceType: '', subject: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('❌ Connection error:', error);
      setErrorMessage(`Failed to connect to server: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Test backend connection
  const testBackendConnection = async () => {
    try {
      setErrorMessage("");
      setSuccessMessage("");
      
      const response = await fetch(`${BACKEND_URL}/api/health`);
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(`✅ Backend connected! Status: ${data.status}`);
        console.log('Backend health:', data);
      } else {
        setErrorMessage(`❌ Backend returned error: ${response.status}`);
      }
    } catch (error) {
      setErrorMessage(`❌ Cannot connect to backend: ${error.message}`);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Contact <span className="text-yellow-300">RESICODE</span>
      </h1>
      
      {/* Connection Status */}
      <div className="mb-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Backend Status</h3>
            <p className="text-gray-300 text-sm">
              URL: <code className="bg-gray-900 px-2 py-1 rounded">{BACKEND_URL}</code>
            </p>
          </div>
          <button
            onClick={testBackendConnection}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Test Connection
          </button>
        </div>
      </div>
      
      {/* Success Message */}
      {successMessage && (
        <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-300">{successMessage}</span>
          </div>
        </div>
      )}
      
      {/* Error Message */}
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-red-300">{errorMessage}</span>
          </div>
        </div>
      )}
      
      {/* Form */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Your name"
              />
              {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="your@email.com"
              />
              {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="+91 1234567890"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Select Service</option>
                {serviceTypes.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Subject of your message"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Message *</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Your message here..."
            />
            {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-4 rounded-lg font-bold text-lg transition-all duration-300
              ${isSubmitting 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-yellow-300 text-black hover:bg-yellow-400 hover:scale-[1.02] active:scale-[0.98]'
              }
            `}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
      
      {/* Troubleshooting Tips */}
      <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-700 rounded-xl">
        <h3 className="text-xl font-bold text-yellow-300 mb-3">🔧 Troubleshooting</h3>
        <div className="text-yellow-200 space-y-2">
          <p>If you're getting connection errors:</p>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Make sure your backend is running on Render</li>
            <li>Check if the backend URL is correct: <code className="bg-gray-900 px-2 py-1 rounded text-sm">{BACKEND_URL}</code></li>
            <li>Click the "Test Connection" button above to verify</li>
            <li>Make sure CORS is properly configured on your backend</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;