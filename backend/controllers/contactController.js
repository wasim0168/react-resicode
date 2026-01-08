const { createTransporter, getEmailConfig } = require('../config/emailConfig');

const validateContactData = (data) => {
  const errors = {};
  
  if (!data.name?.trim()) errors.name = 'Name is required';
  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!data.message?.trim()) errors.message = 'Message is required';
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

const sendContactEmail = async (contactData) => {
  const transporter = createTransporter();
  const emailConfig = getEmailConfig();
  
  // If email not configured, simulate success for testing
  if (!transporter) {
    console.log('📧 SIMULATED EMAIL (not configured):', {
      from: contactData.email,
      to: emailConfig.to,
      subject: contactData.subject || `Contact from ${contactData.name}`,
      name: contactData.name,
      message: contactData.message
    });
    
    return {
      success: true,
      simulated: true,
      message: 'Email would be sent if configured'
    };
  }
  
  try {
    const mailOptions = {
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: contactData.email,
      subject: contactData.subject || `New Contact: ${contactData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { padding: 30px; background: #f8f9fa; border-radius: 0 0 10px 10px; }
            .field { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .label { font-weight: bold; color: #667eea; display: inline-block; width: 100px; }
            .message { background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 New Contact Form Submission</h1>
            <p>RESICODE Website</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Name:</span> ${contactData.name}
            </div>
            <div class="field">
              <span class="label">📧 Email:</span> ${contactData.email}
            </div>
            <div class="field">
              <span class="label">📱 Phone:</span> ${contactData.phone || 'Not provided'}
            </div>
            <div class="field">
              <span class="label">🛠️ Service:</span> ${contactData.serviceType || 'Not specified'}
            </div>
            <div class="field">
              <span class="label">📋 Subject:</span> ${contactData.subject || 'No subject'}
            </div>
            
            <h3>💬 Message:</h3>
            <div class="message">
              ${contactData.message.replace(/\n/g, '<br>')}
            </div>
            
            <div class="footer">
              <p>🕐 Submitted: ${new Date().toLocaleString()}</p>
              <p>🔗 Source: RESICODE Contact Form</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
NEW CONTACT FORM SUBMISSION
============================

Name: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.phone || 'Not provided'}
Service: ${contactData.serviceType || 'Not specified'}
Subject: ${contactData.subject || 'No subject'}

Message:
${contactData.message}

============================
Submitted: ${new Date().toLocaleString()}
From: RESICODE Website
      `
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    
    return {
      success: true,
      messageId: info.messageId,
      simulated: false
    };
    
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

const handleContactSubmission = async (req, res) => {
  try {
    console.log('📥 Received contact form submission:', req.body);
    
    // Validate input
    const validation = validateContactData(req.body);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }
    
    // Send email
    const emailResult = await sendContactEmail(req.body);
    
    // Log to console for debugging
    console.log('📝 Contact form processed:', {
      name: req.body.name,
      email: req.body.email,
      timestamp: new Date().toISOString(),
      emailSent: !emailResult.simulated
    });
    
    // Respond to client
    res.json({
      success: true,
      message: emailResult.simulated 
        ? 'Message received! (Email service not configured - check backend console)' 
        : 'Thank you! Your message has been sent successfully.',
      data: {
        name: req.body.name,
        email: req.body.email,
        timestamp: new Date().toISOString()
      },
      debug: emailResult.simulated ? { received: req.body } : undefined
    });
    
  } catch (error) {
    console.error('❌ Contact processing error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process your request. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

const getHealth = (req, res) => {
  const emailConfig = getEmailConfig();
  
  res.json({
    status: 'healthy',
    service: 'contact-api',
    timestamp: new Date().toISOString(),
    email: {
      configured: emailConfig.isConfigured,
      service: emailConfig.service
    },
    endpoints: {
      contact: 'POST /api/contact/send',
      health: 'GET /api/contact/health'
    }
  });
};

module.exports = {
  handleContactSubmission,
  getHealth,
  validateContactData
};