import { create } from 'zustand'

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  material: string
  threadCount?: number
  sizes: string[]
  colors: string[]
  description: string
  features: string[]
  sustainability: string[]
}

export interface CartItem extends Product {
  quantity: number
  selectedSize: string
  selectedColor: string
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, size: string, color: string) => void
  removeItem: (id: string, size: string, color: string) => void
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, size, color) => {
    set((state) => {
      const existingItem = state.items.find(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      )
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id && item.selectedSize === size && item.selectedColor === color
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      
      return {
        items: [...state.items, { 
          ...product, 
          quantity: 1, 
          selectedSize: size, 
          selectedColor: color 
        }]
      }
    })
  },
  
  removeItem: (id, size, color) => {
    set((state) => ({
      items: state.items.filter(
        item => !(item.id === id && item.selectedSize === size && item.selectedColor === color)
      )
    }))
  },
  
  updateQuantity: (id, size, color, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id, size, color)
      return
    }
    
    set((state) => ({
      items: state.items.map(item =>
        item.id === id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    }))
  },
  
  clearCart: () => {
    set({ items: [] })
  },
  
  toggleCart: () => {
    set((state) => ({ isOpen: !state.isOpen }))
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  }
}))