import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80")'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 leading-tight">
            Sleep in 
            <span className="block font-medium">Natural Luxury</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover premium bedsheets, comforters, and sleep essentials crafted from sustainable materials. 
            Where conscious comfort meets timeless design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/products" 
              className="btn-primary bg-sage-600 hover:bg-sage-700 px-8 py-4 text-lg"
            >
              Shop Collection
            </Link>
            <Link 
              href="/about" 
              className="btn-secondary bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white px-8 py-4 text-lg"
            >
              Our Story
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-cream-200">
            <div className="text-center">
              <div className="text-2xl font-semibold mb-1">100%</div>
              <div className="text-sm">Organic Cotton</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold mb-1">10,000+</div>
              <div className="text-sm">Happy Sleepers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold mb-1">100</div>
              <div className="text-sm">Night Trial</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}