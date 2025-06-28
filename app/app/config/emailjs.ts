// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// EmailJS Template Variables
// Make sure your EmailJS template uses these variable names:
// - user_name (Full Name)
// - user_email (Email Address)
// - user_phone (Phone Number)
// - subject (Subject)
// - message (Message)

export const emailjsTemplateVariables = {
  user_name: '',
  user_email: '',
  user_phone: '',
  subject: '',
  message: '',
}; 