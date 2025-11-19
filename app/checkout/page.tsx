'use client'

import { useState } from 'react'
import { useCartStore } from '../store/cartStore'
import CheckoutForm from '../components/CheckoutForm'

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore()

  const [step, setStep] = useState(1)
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  })

  const subtotal = getTotalPrice()
  const tax = subtotal * 0.18  // 18% GST for India
  const total = subtotal + tax

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-sage-800 mb-4">Your Cart is Empty</h1>
          <p className="text-warm-gray-600 mb-6">Add some products to continue with checkout.</p>
          <a href="/products" className="btn-primary">
            Continue Shopping
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-serif text-sage-800 mb-8">Checkout</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-8">
              <div className={`flex items-center ${step >= 1 ? 'text-sage-600' : 'text-warm-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= 1 ? 'bg-sage-600 text-white' : 'bg-warm-gray-200 text-warm-gray-500'
                }`}>
                  1
                </div>
                <span className="ml-2">Shipping</span>
              </div>
              
              <div className={`w-16 h-px ${step >= 2 ? 'bg-sage-600' : 'bg-warm-gray-300'}`}></div>
              
              <div className={`flex items-center ${step >= 2 ? 'text-sage-600' : 'text-warm-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= 2 ? 'bg-sage-600 text-white' : 'bg-warm-gray-200 text-warm-gray-500'
                }`}>
                  2
                </div>
                <span className="ml-2">Payment</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <div className="card p-8">
                  <h2 className="text-xl font-semibold text-sage-800 mb-6">Shipping Information</h2>
                  
                  <form onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-sage-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                          className="w-full border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-sage-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                          className="w-full border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-sage-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                        className="w-full border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-sage-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                        className="w-full border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-sage-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                          className="w-full border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-sage-700 mb-2">
                          State
                        </label>
                        <select
                          required
                          value={shippingInfo.state}
                          onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                          className="w-full border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        >
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          {/* Add more states as needed */}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-sage-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.zipCode}
                          onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                          className="w-full border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <button type="submit" className="btn-primary w-full">
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="card p-8">
                  <h2 className="text-xl font-semibold text-sage-800 mb-6">Payment Information</h2>
                  
                  <CheckoutForm total={total} shippingInfo={shippingInfo} />
                  
                  <button
                    onClick={() => setStep(1)}
                    className="btn-secondary mt-6"
                  >
                    Back to Shipping
                  </button>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="card p-8 h-fit">
              <h3 className="text-xl font-semibold text-sage-800 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sage-800">{item.name}</h4>
                      <p className="text-sm text-warm-gray-600">
                        {item.selectedSize} • {item.selectedColor} • Qty: {item.quantity}
                      </p>
                      <p className="text-sage-700 font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-sage-100 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{tax.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t border-sage-100 pt-2">
                  <span>Total</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}