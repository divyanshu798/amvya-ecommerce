'use client'

import Link from 'next/link'
import { Product } from '../store/cartStore'
import { Leaf } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group card overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.sustainability.length > 0 && (
          <div className="absolute top-3 left-3 bg-sage-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Leaf size={12} />
            Sustainable
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-sage-800 mb-2 group-hover:text-sage-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-warm-gray-600 text-sm mb-2">
          {product.material}
          {product.threadCount && ` • ${product.threadCount} TC`}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-sage-800">
            ₹{product.price}
          </span>
          
          <Link 
            href={`/products/${product.id}`}
            className="text-sage-600 hover:text-sage-800 font-medium text-sm transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}