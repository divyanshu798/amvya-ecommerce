# Email Setup Guide for amvya E-commerce

This guide explains how to set up email notifications for order confirmations using Nodemailer.

## Email Service: Nodemailer with Gmail

We use [Nodemailer](https://nodemailer.com/) with Gmail for sending transactional emails. It's reliable, free for reasonable volumes, and easy to set up.

## Setup Instructions

### Option 1: Gmail (Recommended for Getting Started)

#### 1. Enable 2-Step Verification on Your Google Account

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. This is required to create App Passwords

#### 2. Generate an App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select app: **Mail**
3. Select device: **Other (Custom name)** → Enter "amvya ecommerce"
4. Click **Generate**
5. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

#### 3. Add Credentials to Environment Variables

1. Open the file: `/Users/divtomar/Desktop/lovable-ecommerce/.env.local`
2. Update these values:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

3. Save the file
4. Restart your Next.js development server

### Option 2: Other Email Services

Nodemailer supports any SMTP service. Here are common configurations:

#### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

#### Yahoo Mail
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

#### Custom SMTP Server
```env
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587  # or 465 for SSL
```

## Configuration Details

### Environment Variables

- **EMAIL_USER**: Your email address (used as sender)
- **EMAIL_PASS**: App password or SMTP password
- **EMAIL_HOST**: SMTP server hostname (default: smtp.gmail.com)
- **EMAIL_PORT**: SMTP port (587 for TLS, 465 for SSL)

### Email Recipients

The system currently sends emails to:
- **Customer:** The email they provide during checkout
- **Admin 1:** `divyanshutomar53@gmail.com`
- **Admin 2:** `amaya@gmail.com`

To change admin email addresses, edit:
`/Users/divtomar/Desktop/lovable-ecommerce/app/api/send-order-email/route.ts`

Look for this section:
```typescript
{
  to: 'divyanshutomar53@gmail.com',
  subject: `New Order Alert - ${orderId}`,
  html: adminEmailHTML
},
{
  to: 'amaya@gmail.com',
  subject: `New Order Alert - ${orderId}`,
  html: adminEmailHTML
}
```

## How It Works

### When a payment is completed:

1. **Customer receives:**
   - Order confirmation email
   - Order ID
   - List of items purchased
   - Total amount paid
   - Contact information for support

2. **Admins receive:**
   - New order notification
   - Customer details
   - Order items and quantities
   - Total amount
   - Action items checklist

### Email Templates Include:

✅ Order ID: `AMV-[timestamp]`  
✅ Product details (name, size, color, quantity)  
✅ Pricing breakdown (subtotal, tax, total)  
✅ Contact information (phone, email, Instagram)  
✅ Professional HTML formatting  

## Testing

To test email functionality:

1. Make sure all email variables are set in `.env.local`
2. Restart the development server
3. Complete a test order using any payment method
4. Check your inbox and spam folder
5. Verify both customer and admin emails are received

## Gmail Sending Limits

- **Free Gmail:** 500 emails per day
- **Google Workspace:** 2,000 emails per day
- For higher volumes, consider dedicated email services (SendGrid, AWS SES, etc.)

## Troubleshooting

### Emails not sending?
1. Check if `EMAIL_USER` and `EMAIL_PASS` are set correctly in `.env.local`
2. Verify you're using an **App Password**, not your regular Gmail password
3. Check browser console and server logs for errors
4. Ensure 2-Step Verification is enabled on your Google Account
5. Check spam folder

### "Invalid login" error?
- You must use an **App Password**, not your regular password
- Generate one at: https://myaccount.google.com/apppasswords

### Gmail blocks the email?
- Gmail may block "less secure apps" - use App Passwords instead
- Check Gmail security settings
- Temporarily enable "Less secure app access" (not recommended)

### Emails going to spam?
- Gmail/Outlook may flag emails from unknown senders
- For production, use a verified domain
- Consider using SPF/DKIM records

### Need to test without sending real emails?
Without email credentials configured, orders will still process, but no emails will be sent.

## Production Recommendations

For production deployment:

1. **Use a dedicated email service** (SendGrid, AWS SES, Mailgun)
2. **Set up SPF and DKIM records** for your domain
3. **Monitor email delivery rates** and bounce rates
4. **Use a professional email address** (e.g., orders@amvya.com)
5. **Implement rate limiting** to prevent abuse

## Support

For Nodemailer documentation: https://nodemailer.com/
For Gmail App Passwords: https://support.google.com/accounts/answer/185833

---

**Last Updated:** November 18, 2025
