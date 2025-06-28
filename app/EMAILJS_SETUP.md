# EmailJS Setup Guide for LensTeasers Contact Form

This guide will help you set up EmailJS to enable email functionality for the contact form on the LensTeasers website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your email provider
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Design your email template with the following variables:

### Template Variables to Include:
```html
Name: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}
Subject: {{subject}}
Message: {{message}}
```

### Example Template:
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission from LensTeasers Website</h2>
    
    <h3>Contact Details:</h3>
    <p><strong>Name:</strong> {{user_name}}</p>
    <p><strong>Email:</strong> {{user_email}}</p>
    <p><strong>Phone:</strong> {{user_phone}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    
    <h3>Message:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><em>This message was sent from the LensTeasers contact form.</em></p>
</body>
</html>
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys** in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Configure the Website

### Option A: Using Environment Variables (Recommended)

1. Create a `.env.local` file in the root of your project (`lensteasers/app/.env.local`):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials

### Option B: Direct Configuration

1. Open `lensteasers/app/app/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const emailjsConfig = {
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here',
  publicKey: 'your_public_key_here',
};
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check your email to confirm the message was received

## Troubleshooting

### Common Issues:

1. **"Service ID not found" error**
   - Double-check your Service ID in the EmailJS dashboard
   - Ensure the service is properly connected to your email provider

2. **"Template ID not found" error**
   - Verify your Template ID in the EmailJS dashboard
   - Make sure the template is published and active

3. **"Public Key invalid" error**
   - Check your Public Key in the EmailJS dashboard
   - Ensure you're using the correct key for your account

4. **Form submits but no email received**
   - Check your email provider's spam folder
   - Verify your email service is properly configured in EmailJS
   - Check the EmailJS dashboard for any error logs

### Testing in Development:

- EmailJS works in development mode
- You can test the form functionality locally
- Make sure your environment variables are properly set

## Security Notes

- The Public Key is safe to expose in client-side code
- Never expose your Private Key
- EmailJS handles the email sending securely on their servers

## Support

If you encounter any issues:
1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Review the EmailJS dashboard for error messages
3. Contact EmailJS support if needed

## Next Steps

Once EmailJS is configured:
1. Test the contact form thoroughly
2. Consider setting up email notifications for different types of inquiries
3. Monitor the EmailJS dashboard for form submissions
4. Set up email templates for different subjects (booking, pricing, etc.) 