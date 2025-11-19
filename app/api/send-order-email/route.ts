import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerEmail, customerName, orderId, items, total, tax, subtotal } = body

    // Email configuration using Nodemailer
    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASS = process.env.EMAIL_PASS
    const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com'
    const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587')

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.log('Email credentials not configured. Email sending skipped.')
      return NextResponse.json({ 
        success: false, 
        message: 'Email service not configured. Please set EMAIL_USER and EMAIL_PASS in .env.local' 
      })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: EMAIL_PORT === 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    // Prepare order details
    const itemsList = items.map((item: any) => 
      `<li style="margin-bottom: 12px;">
        <strong>${item.name}</strong><br/>
        Size: ${item.selectedSize} | Color: ${item.selectedColor} | Qty: ${item.quantity}<br/>
        Price: ₹${(item.price * item.quantity).toLocaleString('en-IN')}
      </li>`
    ).join('')

    // Customer email HTML
    const customerEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #5c6b58; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .order-details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .total { font-size: 18px; font-weight: bold; margin-top: 15px; padding-top: 15px; border-top: 2px solid #5c6b58; }
          ul { list-style: none; padding: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Order!</h1>
          </div>
          <div class="content">
            <p>Dear ${customerName || 'Valued Customer'},</p>
            <p>We're excited to confirm that we've received your order! 🎉</p>
            
            <div class="order-details">
              <h2 style="color: #5c6b58;">Order Details</h2>
              <p><strong>Order ID:</strong> ${orderId}</p>
              
              <h3>Items Ordered:</h3>
              <ul>${itemsList}</ul>
              
              <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd;">
                <p><strong>Subtotal:</strong> ₹${subtotal.toLocaleString('en-IN')}</p>
                <p><strong>Tax (GST 18%):</strong> ₹${tax.toLocaleString('en-IN')}</p>
                <p class="total">Total: ₹${total.toLocaleString('en-IN')}</p>
              </div>
            </div>
            
            <p>We'll send you another email once your order has been shipped with tracking information.</p>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #e8f5e9; border-radius: 8px;">
              <h3 style="color: #5c6b58; margin-top: 0;">Need Help?</h3>
              <p style="margin: 5px 0;">📞 Phone: <a href="tel:+919911518877">+91 9911518877</a></p>
              <p style="margin: 5px 0;">📧 Email: <a href="mailto:amvyastore@gmail.com">amvyastore@gmail.com</a></p>
              <p style="margin: 5px 0;">📱 Instagram: <a href="https://www.instagram.com/amvyastore">@amvyastore</a></p>
            </div>
            
            <p style="margin-top: 30px;">Thank you for choosing amvya!</p>
            <p style="color: #5c6b58;"><em>Sleep well, live consciously.</em></p>
          </div>
        </div>
      </body>
      </html>
    `

    // Admin notification email HTML
    const adminEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2196F3; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .order-details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .urgent { background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0; }
          ul { list-style: none; padding: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Order Received!</h1>
          </div>
          <div class="content">
            <div class="urgent">
              <strong>⚡ Action Required:</strong> Process this order and prepare for shipment.
            </div>
            
            <div class="order-details">
              <h2 style="color: #2196F3;">Order Information</h2>
              <p><strong>Order ID:</strong> ${orderId}</p>
              <p><strong>Customer Name:</strong> ${customerName || 'Not provided'}</p>
              <p><strong>Customer Email:</strong> ${customerEmail}</p>
              
              <h3>Order Items:</h3>
              <ul>${itemsList}</ul>
              
              <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd;">
                <p><strong>Subtotal:</strong> ₹${subtotal.toLocaleString('en-IN')}</p>
                <p><strong>Tax (GST 18%):</strong> ₹${tax.toLocaleString('en-IN')}</p>
                <p style="font-size: 18px; font-weight: bold; color: #2196F3; margin-top: 15px;">
                  Total: ₹${total.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
            
            <p><strong>Next Steps:</strong></p>
            <ol>
              <li>Verify payment confirmation</li>
              <li>Prepare items for packaging</li>
              <li>Generate shipping label</li>
              <li>Send tracking information to customer</li>
            </ol>
          </div>
        </div>
      </body>
      </html>
    `

    // Send emails using Nodemailer
    const emails = [
      {
        to: customerEmail,
        cc: 'divyanshutomar943@gmail.com',
        subject: `Order Confirmation - ${orderId} - amvya`,
        html: customerEmailHTML
      },
      {
        to: 'tomarpriyanshu131@gmail.com',
        cc: 'divyanshutomar943@gmail.com',
        subject: `New Order Alert - ${orderId}`,
        html: adminEmailHTML
      },
      {
        to: 'amvyastore@gmail.com',
        cc: 'divyanshutomar943@gmail.com',
        subject: `New Order Alert - ${orderId}`,
        html: adminEmailHTML
      }
    ]

    // Send all emails
    const emailPromises = emails.map(async (email) => {
      try {
        const info = await transporter.sendMail({
          from: `"amvya" <${EMAIL_USER}>`,
          to: email.to,
          cc: email.cc,
          subject: email.subject,
          html: email.html
        })

        console.log(`Email sent to ${email.to}:`, info.messageId)
        return { success: true, to: email.to, messageId: info.messageId }
      } catch (error) {
        console.error(`Failed to send email to ${email.to}:`, error)
        return { success: false, to: email.to, error: error instanceof Error ? error.message : 'Unknown error' }
      }
    })

    const results = await Promise.all(emailPromises)
    console.log('Email sending results:', results)

    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully',
      results 
    })

  } catch (error) {
    console.error('Error sending emails:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send emails',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
