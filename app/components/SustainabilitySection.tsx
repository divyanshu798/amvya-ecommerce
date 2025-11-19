import { Leaf, Recycle, Heart, Globe } from 'lucide-react'

export default function SustainabilitySection() {
  return (
    <section className="py-20 bg-sage-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
            Naturally Conscious
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that true luxury doesn't come at the expense of our planet. 
            Every amvya product is crafted with sustainable practices and materials that honor both your comfort and the Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-semibold text-sage-800 mb-3">Organic Materials</h3>
            <p className="text-warm-gray-600 leading-relaxed">
              GOTS-certified organic cotton and sustainably sourced bamboo ensure purity in every thread.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
              <Recycle size={32} />
            </div>
            <h3 className="text-xl font-semibold text-sage-800 mb-3">Circular Design</h3>
            <p className="text-warm-gray-600 leading-relaxed">
              From recycled fill materials to biodegradable packaging, we design for a circular economy.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold text-sage-800 mb-3">Ethical Production</h3>
            <p className="text-warm-gray-600 leading-relaxed">
              Fair trade certified facilities ensure every product is made with respect for people and planet.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-semibold text-sage-800 mb-3">Carbon Neutral</h3>
            <p className="text-warm-gray-600 leading-relaxed">
              We offset 100% of our shipping emissions and invest in reforestation projects worldwide.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-sage-800 mb-4">
            Our Commitment to Tomorrow
          </h3>
          <p className="text-warm-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            By 2025, we're committed to achieving 100% renewable energy in our supply chain, 
            eliminating all single-use plastics from our packaging, and supporting regenerative 
            agriculture practices that actually improve the soil health of our cotton farms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-sage-700 mb-2">1M+</div>
              <div className="text-warm-gray-600">Plastic bottles recycled into comforters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-700 mb-2">500</div>
              <div className="text-warm-gray-600">Acres of reforestation supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-700 mb-2">Zero</div>
              <div className="text-warm-gray-600">Harmful chemicals in our materials</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}