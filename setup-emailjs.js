// Quick EmailJS Setup Script
// Run this script to help configure EmailJS

console.log(`
🚀 EmailJS Setup Helper
======================

To enable direct email sending, follow these steps:

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your credentials

Then update src/services/emailService.js with your actual values:

const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

📧 Email Template Content:
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.

✅ Once configured, emails will be sent directly to pradhanpissay2001@gmail.com
`);

// Check current configuration
const fs = require('fs');
const path = require('path');

try {
  const emailServicePath = path.join(__dirname, 'src', 'services', 'emailService.js');
  const content = fs.readFileSync(emailServicePath, 'utf8');
  
  if (content.includes('YOUR_SERVICE_ID')) {
    console.log('❌ EmailJS not configured yet - using fallback method');
    console.log('📝 The form will open user\'s email client until EmailJS is set up');
  } else {
    console.log('✅ EmailJS appears to be configured!');
  }
} catch (error) {
  console.log('⚠️  Could not check configuration status');
}
