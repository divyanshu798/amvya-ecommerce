import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import SustainabilitySection from './components/SustainabilitySection'
import TestimonialsSection from './components/TestimonialsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <SustainabilitySection />
      <TestimonialsSection />
    </div>
  )
}