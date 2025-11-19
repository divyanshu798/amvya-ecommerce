import { Leaf, Heart, Award, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-sage-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-sage-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-warm-gray-700 leading-relaxed">
              amvya was born from a simple belief: your sleep sanctuary should reflect your values. 
              We're on a mission to create the world's most comfortable bedding while caring for the planet that cradles us all.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-sage-800 mb-6">
                Sleep Well, Do Good
              </h2>
              <p className="text-lg text-warm-gray-700 leading-relaxed mb-6">
                Founded in 2020 by a team of sleep enthusiasts and sustainability advocates, amvya emerged from 
                frustration with the bedding industry's false choice between luxury and environmental responsibility.
              </p>
              <p className="text-lg text-warm-gray-700 leading-relaxed mb-6">
                We spent two years researching materials, partnering with certified organic farms, and developing 
                manufacturing processes that prioritize both comfort and conscience. The result is a collection of 
                bedding that feels as good as it does good.
              </p>
              <p className="text-lg text-warm-gray-700 leading-relaxed">
                Every thread in our products tells a story of regenerative farming, fair wages, and innovative 
                sustainable materials that prove luxury and responsibility can beautifully coexist.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable bedroom with natural materials"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-sage-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make, from material sourcing to customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">Sustainability First</h3>
              <p className="text-warm-gray-600 leading-relaxed">
                Every material, process, and partnership is evaluated through the lens of environmental impact and regenerative potential.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">Uncompromising Quality</h3>
              <p className="text-warm-gray-600 leading-relaxed">
                We believe sustainable products should be heirloom quality, designed to last decades and improve with age.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">Radical Transparency</h3>
              <p className="text-warm-gray-600 leading-relaxed">
                From farm to bedroom, we openly share our supply chain, costs, and environmental impact data.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 text-white rounded-full mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">People-Centered</h3>
              <p className="text-warm-gray-600 leading-relaxed">
                Fair wages, safe working conditions, and community investment are non-negotiable in our supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-sage-800 mb-6">
              Our Impact So Far
            </h2>
            <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
              We measure our success not just in sales, but in positive environmental and social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-700 mb-2">15,000+</div>
              <div className="text-warm-gray-600">Happy customers sleeping sustainably</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-700 mb-2">2.5M</div>
              <div className="text-warm-gray-600">Plastic bottles diverted from landfills</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-700 mb-2">1,200</div>
              <div className="text-warm-gray-600">Acres of organic cotton supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-700 mb-2">100%</div>
              <div className="text-warm-gray-600">Carbon neutral shipping achieved</div>
            </div>
          </div>

          <div className="bg-sage-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif text-sage-800 mb-4">
                  Our 2025 Commitments
                </h3>
                <ul className="space-y-3 text-warm-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sage-600 rounded-full mt-2"></div>
                    <span>Achieve 100% renewable energy across our entire supply chain</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sage-600 rounded-full mt-2"></div>
                    <span>Eliminate all single-use plastics from packaging and operations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sage-600 rounded-full mt-2"></div>
                    <span>Support 50 farming families transition to regenerative agriculture</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sage-600 rounded-full mt-2"></div>
                    <span>Launch our first circular take-back program for end-of-life products</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Organic cotton field"
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-sage-800 mb-6">
              Meet the amvya Team
            </h2>
            <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
              We're a diverse team of dreamers, makers, and changemakers united by our passion for sustainable comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-sage-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-sage-800 mb-2">Maya Patel</h3>
              <p className="text-sage-600 mb-2">Co-Founder & CEO</p>
              <p className="text-warm-gray-600 text-sm">
                Former textile sustainability consultant with a passion for regenerative design.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-sage-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-sage-800 mb-2">James Chen</h3>
              <p className="text-sage-600 mb-2">Co-Founder & CPO</p>
              <p className="text-warm-gray-600 text-sm">
                Materials scientist focused on developing innovative sustainable fiber technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-sage-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-sage-800 mb-2">Sofia Rodriguez</h3>
              <p className="text-sage-600 mb-2">Head of Sustainability</p>
              <p className="text-warm-gray-600 text-sm">
                Environmental advocate ensuring every aspect of our business regenerates rather than depletes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}