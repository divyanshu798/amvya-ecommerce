export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-2xl font-serif text-sage-800 mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-warm-gray-600 mb-6">
          Thank you for your purchase. Your premium bed essentials will be shipped to you soon.
        </p>
        
        <div className="space-y-3 text-sm text-warm-gray-600 mb-6">
          <p>📧 A confirmation email has been sent to your inbox</p>
          <p>🚚 Expected delivery: 5-7 business days</p>
          <p>📞 Questions? Contact us at amvyastore@gmail.com or call +91 9911518877</p>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="/products"
            className="btn-secondary flex-1 text-center"
          >
            Continue Shopping
          </a>
          <a 
            href="/"
            className="btn-primary flex-1 text-center"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}