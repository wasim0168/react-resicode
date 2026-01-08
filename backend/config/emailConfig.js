const nodemailer = require("nodemailer");

const getEmailConfig = () => {
  const { EMAIL_USER, EMAIL_TO, EMAIL_SERVICE } = process.env;

  return {
    isConfigured: !!EMAIL_USER,
    service: EMAIL_SERVICE || "gmail",
    from: EMAIL_USER,
    to: EMAIL_TO || EMAIL_USER
  };
};

const createTransporter = () => {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_SERVICE } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn("⚠️ Email ENV missing");
    return null;
  }

  return nodemailer.createTransport({
    service: EMAIL_SERVICE || "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    },
    connectionTimeout: 10000, // ⬅️ important
    greetingTimeout: 10000,
    socketTimeout: 10000
  });
};

module.exports = { createTransporter, getEmailConfig };
