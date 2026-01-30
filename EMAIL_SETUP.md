# EmailJS Setup Guide

To make the contact form fully functional, you need to connect it to your EmailJS account.

## 1. Create an Account
Go to [EmailJS](https://www.emailjs.com/) and create a free account.

## 2. Create a Service
1. In your Dashboard, click **"Add New Service"**.
2. Select **"Gmail"** (or your preferred email provider).
3. Connect your account and click **"Create Service"**.
4. Copy the **Service ID** (e.g., `service_xxxxxxx`).

## 3. Create an Email Template
1. Go to **"Email Templates"** and click **"Create New Template"**.
2. Design your email. Use these variables to capture the form data:
   - `{{user_name}}` - The sender's name
   - `{{user_email}}` - The sender's email
   - `{{message}}` - The message body
3. Save the template.
4. Copy the **Template ID** (e.g., `template_xxxxxxx`).

## 4. Get Your Public Key
1. Go to **"Account"** (click your avatar).
2. Copy your **Public Key** (it looks like a random string).

## 5. Update the Code
Open `src/components/Contact.jsx` and look for the `sendEmail` function (around line 14). Replace the placeholders with your actual IDs:

```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
```

Example:
```javascript
emailjs.sendForm('service_abc123', 'template_xyz789', form.current, 'user_Key123456')
```

Once saved, the contact form will send emails directly to your inbox!
