const nodemailer = require("nodemailer");

const getEmailConfig = () => {
  const {
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_TO,
    EMAIL_SERVICE
  } = process.env;

  const isConfigured = !!(EMAIL_USER && EMAIL_PASS && EMAIL_TO);

  return {
    isConfigured,
    service: EMAIL_SERVICE || "gmail",
    from: EMAIL_USER || "no-reply@resicode.com",
    to: EMAIL_TO || EMAIL_USER
  };
};

const createTransporter = () => {
  try {
    const { EMAIL_USER, EMAIL_PASS, EMAIL_SERVICE } = process.env;

    // ❗ IMPORTANT: If not configured, RETURN NULL (not throw)
    if (!EMAIL_USER || !EMAIL_PASS) {
      console.warn("⚠️ Email not configured properly");
      return null;
    }

    return nodemailer.createTransport({
      service: EMAIL_SERVICE || "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });
  } catch (error) {
    console.error("❌ Transporter creation failed:", error.message);
    return null; // ⬅️ THIS FIXES 500 ERROR
  }
};

module.exports = {
  createTransporter,
  getEmailConfig
};
