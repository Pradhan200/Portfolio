import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

// Check if EmailJS is properly configured
const isEmailJSConfigured = () => {
  return EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && 
         EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
         EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';
};

// Email service for handling contact form submissions
export const sendEmail = async (formData) => {
  try {
    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      console.log('EmailJS not configured, using fallback method');
      return sendEmailViaMailto(formData);
    }
    
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'pradhanpissay2001@gmail.com'
    };
    
    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    
    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly at pradhanpissay2001@gmail.com'
    };
  }
};

// Alternative: Using a simple mailto approach
export const sendEmailViaMailto = (formData) => {
  const { name, email, subject, message } = formData;
  const mailtoLink = `mailto:pradhanpissay2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;
  
  window.open(mailtoLink);
  return {
    success: true,
    message: 'Opening your email client...'
  };
};
