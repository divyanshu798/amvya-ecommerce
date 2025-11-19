# Lovable E-Commerce Website

A premium e-commerce website for sustainable bed essentials built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, natural aesthetic with earthy color palette
- **Product Catalog**: Complete product management with categories, filters, and search
- **Shopping Cart**: Full cart functionality with persistent state
- **Secure Checkout**: Integrated Stripe payment processing
- **Responsive Design**: Optimized for all device sizes
- **Sustainability Focus**: Highlighting eco-friendly materials and practices
- **SEO Optimized**: Built with Next.js best practices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Zustand for cart and UI state
- **Payment Processing**: Stripe integration
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Create .env.local file
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lovable-ecommerce/
├── app/
│   ├── components/          # Reusable React components
│   ├── data/               # Product data and utilities
│   ├── store/              # Zustand state management
│   ├── products/           # Product pages
│   ├── checkout/           # Checkout flow
│   └── about/              # About page
├── public/                 # Static assets
└── styles/                 # Global styles
```

## Brand Identity

**Lovable** is positioned as a premium bed essentials brand that combines:

- **Natural Luxury**: High-quality, sustainable materials
- **Conscious Comfort**: Environmental responsibility without compromise
- **Target Audience**: 
  - Young professionals (25-35) who value sustainability
  - Luxury home decor enthusiasts seeking premium quality

## Key Features

### E-Commerce Functionality
- Product catalog with filtering and sorting
- Individual product pages with detailed information
- Shopping cart with quantity management
- Multi-step checkout process
- Secure payment processing with Stripe

### Sustainability Focus
- Emphasis on organic and eco-friendly materials
- Transparency about sourcing and manufacturing
- Environmental impact messaging
- Certifications and sustainability credentials

### User Experience
- Mobile-responsive design
- Fast loading times
- Intuitive navigation
- Clear calls-to-action
- Trust signals and security features

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding Products

Products are managed in `app/data/products.ts`. Each product includes:
- Basic information (name, price, description)
- Material and sustainability details
- Available sizes and colors
- Features and benefits
- High-quality product images

### Customization

The design system is built with Tailwind CSS and includes custom color palettes:
- **Sage**: Primary brand color (various shades)
- **Warm Gray**: Neutral tones
- **Cream**: Background and accent colors

## Deployment

This project is ready for deployment on Vercel, Netlify, or any other Next.js-compatible platform.

1. Build the project: `npm run build`
2. Deploy the `out` directory or connect your git repository to your deployment platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.