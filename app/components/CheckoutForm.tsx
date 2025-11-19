'use client'

import { useState } from 'react'
import { useCartStore } from '../store/cartStore'
import { loadRazorpayScript, getTestRazorpayKey } from '../utils/razorpayClient'

interface CheckoutFormProps {
  total: number
  shippingInfo?: {
    firstName: string
    lastName: string
    email: string
  }
}

export default function CheckoutForm({ total, shippingInfo }: CheckoutFormProps) {
  const { items, clearCart } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  // Function to send order confirmation emails
  const sendOrderEmails = async (orderId: string) => {
    try {
      const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      const tax = subtotal * 0.18
      
      await fetch('/api/send-order-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerEmail: shippingInfo?.email || 'customer@example.com',
          customerName: shippingInfo ? `${shippingInfo.firstName} ${shippingInfo.lastName}` : 'Valued Customer',
          orderId,
          items: items.map(item => ({
            name: item.name,
            selectedSize: item.selectedSize,
            selectedColor: item.selectedColor,
            quantity: item.quantity,
            price: item.price
          })),
          total,
          tax,
          subtotal
        })
      })
    } catch (error) {
      console.error('Failed to send order emails:', error)
    }
  }

  // Demo payment handler (for testing without actual payment)
  const handleDemoPayment = async () => {
    setIsProcessing(true)
    setError('')
    
    // Generate order ID
    const orderId = `AMV-${Date.now()}`
    
    // Simulate payment processing
    setTimeout(async () => {
      // Send order confirmation emails
      await sendOrderEmails(orderId)
      
      clearCart()
      alert(`Payment Successful! ✅\n\nYour Order ID: ${orderId}\n\nA confirmation email has been sent to your inbox.`)
      window.location.href = '/order-confirmation'
      setIsProcessing(false)
    }, 2000)
  }

  // Razorpay handler
  const handleRazorpay = async () => {
    try {
      setIsProcessing(true)
      setError('')
      
      console.log('Starting Razorpay payment process...')
      console.log('Total amount:', total)
      
      const loaded = await loadRazorpayScript()
      if (!loaded) {
        setError('Failed to load Razorpay SDK. Please check your internet connection.')
        setIsProcessing(false)
        return
      }
      
      // Amount in paise (smallest currency unit)
      const amountPaise = Math.round(total * 100)
      console.log('Amount in paise:', amountPaise)
      
      const razorpayKey = getTestRazorpayKey()
      console.log('Using Razorpay key:', razorpayKey)
      
      const options = {
        key: razorpayKey,
        amount: amountPaise,
        currency: 'INR',
        name: 'amvya',
        description: 'Premium Bed Essentials',
        image: '/lovable-logo.png', // Add your logo here
        handler: async function (response: any) {
          console.log('Payment successful:', response)
          
          // Generate order ID
          const orderId = `AMV-${Date.now()}`
          
          // Send order confirmation emails
          await sendOrderEmails(orderId)
          
          clearCart()
          alert(`Payment Successful! ✅\n\nYour Order ID: ${orderId}\nPayment ID: ${response.razorpay_payment_id}\n\nA confirmation email has been sent.`)
          // Redirect to order confirmation page
          setTimeout(() => {
            window.location.href = '/order-confirmation'
          }, 1000)
          setIsProcessing(false)
        },
        prefill: {
          name: 'Customer',
          email: 'amvyastore@gmail.com',
          contact: '9911518877'
        },
        notes: {
          address: 'Corporate Office'
        },
        theme: {
          color: '#5c6b58'
        },
        modal: {
          ondismiss: function(){
            console.log('Payment modal closed by user')
            setIsProcessing(false)
          }
        }
      }
      
      console.log('Razorpay options:', options)
      
      if (!window.Razorpay) {
        setError('Razorpay not loaded properly. Please refresh and try again.')
        setIsProcessing(false)
        return
      }
      
      const rzp = new window.Razorpay(options)
      
      rzp.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response)
        setError(`Payment failed: ${response.error.description || 'Unknown error'}`)
        setIsProcessing(false)
      })
      
      rzp.open()
      
    } catch (err) {
      console.error('Razorpay error:', err)
      setError('An error occurred while processing payment. Please try again.')
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-sage-50 p-4 rounded-lg">
        <h4 className="font-medium text-sage-800 mb-2">Payment Security</h4>
        <ul className="text-sm text-sage-600 space-y-1">
          <li>• 256-bit SSL encryption</li>
          <li>• PCI DSS compliant</li>
          <li>• Your payment information is never stored</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2">🧪 Test Payment Info</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <p><strong>Test Card:</strong> 4111 1111 1111 1111</p>
          <p><strong>Expiry:</strong> Any future date (12/25)</p>
          <p><strong>CVV:</strong> 123</p>
          <p><strong>UPI:</strong> success@razorpay</p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleRazorpay}
        disabled={isProcessing}
        className={`btn-primary w-full ${isProcessing ? 'bg-sage-400 cursor-not-allowed' : ''}`}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            <span>Processing...</span>
          </div>
        ) : (
          `Pay with Razorpay • ₹${total.toLocaleString('en-IN')}`
        )}
      </button>

      <div className="text-sm text-warm-gray-600 text-center">
        By completing your order, you agree to our Terms of Service and Privacy Policy.
      </div>
    </div>
  )
}