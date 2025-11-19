import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      text: "The bamboo sheets are incredibly soft and keep me cool all night. Love knowing they're sustainably made!",
      rating: 5,
      product: "Bamboo Lyocell Sheet Set"
    },
    {
      name: "Marcus Rodriguez",
      location: "Austin, TX", 
      text: "Best comforter I've ever owned. The recycled fill is just as cozy as down, and my allergies have completely disappeared.",
      rating: 5,
      product: "Down Alternative Comforter"
    },
    {
      name: "Emily Watson",
      location: "Portland, OR",
      text: "The organic cotton sheets get softer with every wash. Beautiful quality that aligns with my values.",
      rating: 5,
      product: "Organic Cotton Percale Sheets"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
            What Our Sleepers Say
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of happy customers who've transformed their sleep with our natural luxury bedding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-cream-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-warm-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div>
                <cite className="font-semibold text-sage-800 not-italic">
                  {testimonial.name}
                </cite>
                <div className="text-warm-gray-600 text-sm mt-1">
                  {testimonial.location}
                </div>
                <div className="text-sage-600 text-sm mt-2">
                  Verified purchase: {testimonial.product}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-sage-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-sage-800 mb-4">
            Try amvya Risk-Free
          </h3>
          <p className="text-warm-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We're so confident you'll love your new bedding that we offer a 100-night sleep trial. 
            If you're not completely satisfied, we'll pick it up and give you a full refund.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-sage-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>100-Night Trial</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sage-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Free Shipping & Returns</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sage-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>10-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}