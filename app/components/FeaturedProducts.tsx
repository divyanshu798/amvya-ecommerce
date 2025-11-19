import Link from 'next/link'
import { getFeaturedProducts } from '../data/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
            Featured Collection
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most beloved pieces, each thoughtfully crafted to bring natural comfort 
            and timeless beauty to your bedroom sanctuary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/products" 
            className="btn-secondary hover:bg-sage-50 border-sage-300 text-sage-700"
          >
            Shop All Products
          </Link>
        </div>
      </div>
    </section>
  )
}