import { Product } from '../store/cartStore'

export const products: Product[] = [
  {
    id: '0',
    name: 'Test Product - ₹1',
    price: 1,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'accessories',
    material: 'Test Material',
    sizes: ['One Size'],
    colors: ['Test Color'],
    description: 'This is a test product for payment testing purposes. Use this to test the checkout and email functionality without spending real money.',
    features: [
      'Test product for development',
      'Only ₹1 for testing',
      'Perfect for payment gateway testing',
      'Email functionality testing'
    ],
    sustainability: [
      'This is a test product',
      'For development purposes only'
    ]
  },
  {
    id: '1',
    name: 'Organic Cotton Percale Sheet Set',
    price: 700,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'bedsheets',
    material: 'Organic Cotton Percale',
    threadCount: 280,
    sizes: ['Twin', 'Full', 'Queen', 'King', 'California King'],
    colors: ['White', 'Natural', 'Sage', 'Charcoal'],
    description: 'Breathable and crisp, our organic cotton percale sheets offer cool comfort and effortless elegance. Pre-washed for ultimate softness.',
    features: [
      '100% GOTS-certified organic cotton',
      '280 thread count for optimal breathability',
      'Pre-washed for immediate softness',
      'Deep pockets fit mattresses up to 17"',
      'Complete set includes fitted sheet, flat sheet, and pillowcases'
    ],
    sustainability: [
      'GOTS certified organic cotton',
      'Water-efficient manufacturing',
      'Plastic-free packaging',
      'Fair trade certified facilities'
    ]
  },
  {
    id: '2',
    name: 'Bamboo Lyocell Duvet Cover',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'comforters',
    material: 'Bamboo Lyocell',
    sizes: ['Full', 'Queen', 'King', 'California King'],
    colors: ['Ivory', 'Stone', 'Eucalyptus', 'Charcoal'],
    description: 'Silky smooth bamboo lyocell duvet cover that naturally regulates temperature and resists odors. Incredibly soft with a subtle lustrous finish.',
    features: [
      'Temperature-regulating bamboo lyocell',
      'Naturally antimicrobial and odor-resistant',
      'Button closure with interior corner ties',
      'Smooth, silk-like texture',
      'Machine washable and quick-drying'
    ],
    sustainability: [
      'Sustainably sourced bamboo',
      'Closed-loop production process',
      'Biodegradable fibers',
      'Renewable resource cultivation'
    ]
  },
  {
    id: '3',
    name: 'Down Alternative Comforter',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'comforters',
    material: 'Recycled Polyester Fill',
    sizes: ['Twin', 'Full', 'Queen', 'King'],
    colors: ['White'],
    description: 'Luxuriously fluffy comforter filled with premium recycled polyester. Offers the warmth and loft of down without allergens.',
    features: [
      'Hypoallergenic recycled polyester fill',
      'Box stitch construction prevents shifting',
      'Machine washable and dryable',
      'Corner loops for duvet cover attachment',
      'All-season medium weight'
    ],
    sustainability: [
      'Made from recycled plastic bottles',
      'Cruelty-free alternative to down',
      'Reduced waste production',
      'Recyclable at end of life'
    ]
  },
  {
    id: '4',
    name: 'Memory Foam Pillow Duo',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'pillows',
    material: 'Gel-Infused Memory Foam',
    sizes: ['Standard', 'King'],
    colors: ['White'],
    description: 'Two premium memory foam pillows with cooling gel infusion. Contours to your head and neck for optimal support and alignment.',
    features: [
      'Gel-infused memory foam for cooling',
      'Removable, machine-washable cover',
      'Contours to head and neck shape',
      'Hypoallergenic and dust mite resistant',
      'Set of 2 pillows'
    ],
    sustainability: [
      'CertiPUR-US certified foam',
      'Bamboo-derived rayon cover',
      'Low VOC emissions',
      'Durable construction for longevity'
    ]
  },
  {
    id: '5',
    name: 'Linen Sheet Set - European Flax',
    price: 700,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'bedsheets',
    material: 'European Flax Linen',
    sizes: ['Queen', 'King', 'California King'],
    colors: ['Natural', 'Sage', 'Terracotta', 'Charcoal'],
    description: 'Authentic European flax linen that becomes softer and more beautiful with each wash. Naturally temperature regulating and effortlessly elegant.',
    features: [
      'Premium European flax linen',
      'Pre-washed for immediate comfort',
      'Naturally wrinkled texture',
      'Highly breathable and moisture-wicking',
      'Becomes softer over time'
    ],
    sustainability: [
      'European Flax certified linen',
      'Requires minimal water to grow',
      'Fully biodegradable natural fiber',
      'Supporting traditional farming practices'
    ]
  },
  {
    id: '6',
    name: 'Organic Cotton Mattress Topper',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'accessories',
    material: 'Organic Cotton Batting',
    sizes: ['Twin', 'Full', 'Queen', 'King'],
    colors: ['Natural'],
    description: 'Add a layer of organic comfort to any mattress. Filled with pure organic cotton batting for natural breathability and gentle cushioning.',
    features: [
      'GOTS-certified organic cotton fill',
      'Breathable organic cotton cover',
      'Elastic corner straps for secure fit',
      '2-inch loft for added comfort',
      'Machine washable (gentle cycle)'
    ],
    sustainability: [
      'GOTS certified organic cotton',
      'No synthetic materials or chemicals',
      'Biodegradable components',
      'Supporting regenerative farming'
    ]
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4)
}