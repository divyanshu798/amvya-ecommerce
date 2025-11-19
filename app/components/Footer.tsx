import Link from 'next/link'
import { Leaf, Award, Truck, RefreshCw, Phone, Mail, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-white">
      {/* Features Section */}
      <div className="border-b border-sage-700">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 rounded-full mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="font-semibold mb-2">Sustainably Sourced</h3>
              <p className="text-sage-200 text-sm">Ethically sourced materials with minimal environmental impact</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 rounded-full mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sage-200 text-sm">Artisan crafted with the finest natural materials</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 rounded-full mb-4">
                <Truck size={24} />
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sage-200 text-sm">Complimentary shipping on orders over ₹12,000</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 rounded-full mb-4">
                <RefreshCw size={24} />
              </div>
              <h3 className="font-semibold mb-2">100-Night Trial</h3>
              <p className="text-sage-200 text-sm">Sleep on it for 100 nights with free returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-semibold">amvya</h2>
            <p className="text-sage-200 leading-relaxed">
              Crafting premium bed essentials with nature in mind. Every thread tells a story of sustainable luxury and conscious comfort.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sage-200">
              <li><Link href="/products?category=bedsheets" className="hover:text-white transition-colors">Bedsheets</Link></li>
              <li><Link href="/products?category=comforters" className="hover:text-white transition-colors">Comforters</Link></li>
              <li><Link href="/products?category=pillows" className="hover:text-white transition-colors">Pillows</Link></li>
              <li><Link href="/products?category=accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Shop All</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sage-200">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Sleep Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sage-200">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919911518877" className="hover:text-white transition-colors">+91 9911518877</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:amvyastore@gmail.com" className="hover:text-white transition-colors">amvyastore@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram size={16} />
                <a href="https://www.instagram.com/amvyastore?igsh=czFlczhwa2wxeDhz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@amvyastore</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-sm">Support</h4>
              <ul className="space-y-2 text-sage-200 text-sm">
                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-sage-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sage-200 text-sm">
              © 2024 amvya. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sage-200 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sage-200 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}