const nodemailer = require('nodemailer');

const createTransporter = () => {
  // Check if email is configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('⚠️ Email not configured. Using test mode.');
    return null;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('✅ Email transporter created successfully');
    return transporter;
  } catch (error) {
    console.error('❌ Error creating email transporter:', error.message);
    return null;
  }
};

const getEmailConfig = () => ({
  isConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
  from: `"RESICODE Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
  service: process.env.EMAIL_SERVICE || 'gmail'
});

module.exports = { createTransporter, getEmailConfig };