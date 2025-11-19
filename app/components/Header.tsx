'use client'

import Link from 'next/link'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '../store/cartStore'
import Cart from './Cart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-sage-100">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif font-semibold text-sage-800">
              amvya
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-warm-gray-700 hover:text-sage-700 transition-colors">
                Shop All
              </Link>
              <Link href="/products?category=bedsheets" className="text-warm-gray-700 hover:text-sage-700 transition-colors">
                Bedsheets
              </Link>
              <Link href="/products?category=comforters" className="text-warm-gray-700 hover:text-sage-700 transition-colors">
                Comforters
              </Link>
              <Link href="/products?category=pillows" className="text-warm-gray-700 hover:text-sage-700 transition-colors">
                Pillows
              </Link>
              <Link href="/about" className="text-warm-gray-700 hover:text-sage-700 transition-colors">
                Our Story
              </Link>
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => toggleCart()}
                className="relative p-2 text-warm-gray-700 hover:text-sage-700 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingBag size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-sage-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                className="md:hidden p-2 text-warm-gray-700 hover:text-sage-700 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-sage-100">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/products" 
                  className="text-warm-gray-700 hover:text-sage-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop All
                </Link>
                <Link 
                  href="/products?category=bedsheets" 
                  className="text-warm-gray-700 hover:text-sage-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bedsheets
                </Link>
                <Link 
                  href="/products?category=comforters" 
                  className="text-warm-gray-700 hover:text-sage-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comforters
                </Link>
                <Link 
                  href="/products?category=pillows" 
                  className="text-warm-gray-700 hover:text-sage-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pillows
                </Link>
                <Link 
                  href="/about" 
                  className="text-warm-gray-700 hover:text-sage-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
      <Cart />
    </>
  )
}