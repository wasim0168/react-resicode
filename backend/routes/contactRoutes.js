const express = require('express');
const router = express.Router();
const { 
  handleContactSubmission, 
  getHealth 
} = require('../controllers/contactController');

// Health check endpoint
router.get('/health', getHealth);

// Contact form submission
router.post('/send', handleContactSubmission);

module.exports = router;