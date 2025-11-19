'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { getProductById } from '../../data/products'
import { useCartStore } from '../../store/cartStore'
import { ShoppingBag, Leaf, Award, Truck } from 'lucide-react'

export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id as string)
  const { addItem } = useCartStore()

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('features')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-sage-800 mb-4">Product Not Found</h1>
          <p className="text-warm-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size')
      return
    }
    if (product.colors.length > 0 && !selectedColor) {
      alert('Please select a color')
      return
    }

    addItem(product, selectedSize || 'Standard', selectedColor || product.colors[0])
    alert('Added to cart!')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-sage-50 rounded-xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-sage-800 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-sage-700">
                ₹{product.price}
              </p>
            </div>

            <p className="text-warm-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Material Info */}
            <div className="bg-sage-50 rounded-lg p-4">
              <h3 className="font-semibold text-sage-800 mb-2">Material</h3>
              <p className="text-sage-700">{product.material}</p>
              {product.threadCount && (
                <p className="text-sage-600 text-sm">Thread Count: {product.threadCount}</p>
              )}
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="font-semibold text-sage-800 mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-sage-600 bg-sage-600 text-white'
                          : 'border-sage-200 text-sage-700 hover:border-sage-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="font-semibold text-sage-800 mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                        selectedColor === color
                          ? 'border-sage-600 bg-sage-600 text-white'
                          : 'border-sage-200 text-sage-700 hover:border-sage-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-sage-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sage-600 hover:bg-sage-50"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sage-600 hover:bg-sage-50"
                >
                  +
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="btn-primary flex-1 flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={20} />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-sage-100 pt-6">
              <div className="flex space-x-1 mb-4">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === 'features'
                      ? 'text-sage-700 border-b-2 border-sage-600'
                      : 'text-warm-gray-600 hover:text-sage-700'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('sustainability')}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === 'sustainability'
                      ? 'text-sage-700 border-b-2 border-sage-600'
                      : 'text-warm-gray-600 hover:text-sage-700'
                  }`}
                >
                  Sustainability
                </button>
              </div>

              <div className="space-y-3">
                {activeTab === 'features' && (
                  <>
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-sage-600 rounded-full mt-2"></div>
                        <span className="text-warm-gray-700">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
                
                {activeTab === 'sustainability' && (
                  <>
                    {product.sustainability.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Leaf size={16} className="text-sage-600 mt-1" />
                        <span className="text-warm-gray-700">{item}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}