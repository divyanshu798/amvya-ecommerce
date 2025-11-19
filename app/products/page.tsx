'use client'

import { useState, useEffect } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { Product } from '../store/cartStore'

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('name')

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'bedsheets', label: 'Bedsheets' },
    { value: 'comforters', label: 'Comforters' },
    { value: 'pillows', label: 'Pillows' },
    { value: 'accessories', label: 'Accessories' }
  ]

  useEffect(() => {
    let filtered = selectedCategory === 'all' 
      ? products 
      : products.filter(product => product.category === selectedCategory)

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
      default:
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-white border-b border-sage-100">
        <div className="container-custom py-12">
          <h1 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            Shop All Products
          </h1>
          <p className="text-lg text-warm-gray-600 max-w-2xl">
            Discover our complete collection of sustainably crafted bed essentials, 
            designed to bring natural comfort and timeless beauty to your sleep sanctuary.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-sage-100">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-sage-600 text-white'
                      : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-warm-gray-600">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-sage-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sage-500"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-warm-gray-600 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}