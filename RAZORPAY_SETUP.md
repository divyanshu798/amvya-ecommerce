# How to Set Up Razorpay for Your Lovable E-commerce Website

## Step 1: Create a Razorpay Account

1. Go to [https://razorpay.com/](https://razorpay.com/)
2. Click "Sign Up" and create a business account
3. Complete the verification process (you can start with test mode immediately)

## Step 2: Get Your Test API Keys

1. Log into your Razorpay Dashboard
2. Go to **Settings** → **API Keys**
3. Download your **Test Keys** (don't use live keys for testing!)
4. You'll get:
   - **Test Key ID** (starts with `rzp_test_`)
   - **Test Secret Key** (keep this private)

## Step 3: Configure Your Website

1. Open the file `/Users/divtomar/Desktop/lovable-ecommerce/.env.local`
2. Replace `rzp_test_your_key_here` with your actual Test Key ID
3. Example:
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_1DP5mmOlF5G5ag
   ```

## Step 4: Test Payment Methods

With Razorpay test mode, you can use these test cards:

### Successful Payment Cards:
- **Card Number**: 4111 1111 1111 1111
- **Expiry**: Any future date (e.g., 12/25)
- **CVV**: 123
- **Name**: Any name

### UPI Testing:
- **UPI ID**: success@razorpay (for successful payments)
- **UPI ID**: failure@razorpay (for failed payments)

### Netbanking Testing:
- Select any bank and use the test credentials provided

## Step 5: Test the Integration

1. Start your website: `npm run dev`
2. Add items to cart
3. Go to checkout
4. Click "Pay with Razorpay"
5. Use the test payment methods above

## Step 6: Check Payment Status

1. Go to your Razorpay Dashboard
2. Navigate to **Transactions** → **Payments**
3. You'll see all test payments here

## Current Implementation Features

✅ **Working Features:**
- Razorpay SDK loading
- Payment modal opening
- Test payment processing
- Success/failure handling
- Order confirmation page
- Error handling and logging

✅ **Test Modes Available:**
1. **Razorpay Integration** - Real Razorpay test payments
2. **Demo Payment** - Instant success for UI testing
3. **Stripe Integration** - International card payments

## Troubleshooting

### If Razorpay doesn't work:

1. **Check Console Logs** (F12 in browser):
   - Look for error messages
   - Verify Razorpay script is loading
   - Check if your key is being used

2. **Common Issues:**
   - Invalid API key → Update `.env.local` with correct test key
   - Network issues → Check internet connection
   - Script loading → Refresh page and try again

3. **Verify Integration**:
   ```javascript
   // Open browser console and run:
   console.log('Razorpay available:', !!window.Razorpay);
   ```

## Going Live

When you're ready for production:

1. Complete Razorpay KYC verification
2. Get Live API keys from dashboard
3. Update environment variables with live keys
4. Test with small amounts first
5. Set up webhooks for payment confirmations

## Support

- **Razorpay Docs**: https://razorpay.com/docs/
- **Test Cards**: https://razorpay.com/docs/payment-gateway/test-card-details/
- **API Reference**: https://razorpay.com/docs/api/

Your website now has a fully functional Razorpay integration! 🎉