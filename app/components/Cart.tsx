'use client'

import { X, Plus, Minus } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import Link from 'next/link'

export default function Cart() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice } = useCartStore()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={() => toggleCart()} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-sage-100">
            <h2 className="text-lg font-semibold text-sage-800">Shopping Cart</h2>
            <button
              onClick={() => toggleCart()}
              className="p-2 text-warm-gray-500 hover:text-sage-700 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-warm-gray-500 mb-4">Your cart is empty</p>
                <Link 
                  href="/products"
                  onClick={() => toggleCart()}
                  className="btn-primary inline-block"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center space-x-4 py-4 border-b border-sage-100">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-sage-800">{item.name}</h3>
                      <p className="text-sm text-warm-gray-600">
                        {item.selectedSize} • {item.selectedColor}
                      </p>
                      <p className="text-sage-700 font-medium">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        className="p-1 text-warm-gray-500 hover:text-sage-700 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="p-1 text-warm-gray-500 hover:text-sage-700 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id, item.selectedSize, item.selectedColor)}
                      className="p-2 text-warm-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-sage-100 px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-sage-800">Total</span>
                <span className="text-lg font-semibold text-sage-800">₹{getTotalPrice().toFixed(2)}</span>
              </div>
              
              <Link 
                href="/checkout"
                onClick={() => toggleCart()}
                className="btn-primary w-full text-center block"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}