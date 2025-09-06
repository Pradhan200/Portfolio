# EmailJS Setup Guide

To enable direct email sending from your contact form, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

## 5. Update Configuration
1. Open `src/services/emailService.js`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` with your actual Service ID
   - `YOUR_TEMPLATE_ID` with your actual Template ID  
   - `YOUR_PUBLIC_KEY` with your actual Public Key

## 6. Test the Form
1. Start your development server: `npm start`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email inbox for the message

## Example Configuration:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'user_def456';
```

## Troubleshooting:
- Make sure your email service is active in EmailJS
- Check that your template variables match the ones in the code
- Verify your public key is correct
- Check browser console for any error messages

## Free Tier Limits:
- 200 emails per month
- Perfect for portfolio websites
- No credit card required
