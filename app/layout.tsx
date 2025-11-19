import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from './providers/CartProvider'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'amvya - Premium Bed Essentials',
  description: 'Discover sustainable, luxury bedsheets, comforters, and sleep essentials crafted for comfort and designed with nature in mind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}