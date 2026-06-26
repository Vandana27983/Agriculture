'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { products as seedProducts, type Product } from '@/lib/data'

const STORAGE_KEY = 'verdant-fields-products'

function loadInitial(): Product[] {
  if (typeof window === 'undefined') return seedProducts
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as Product[]
      if (Array.isArray(parsed) && parsed.length > 0) return parsed
    }
  } catch {
    // corrupted — fall through
  }
  // Seed localStorage on first visit
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedProducts))
  } catch { /* quota exceeded, ignore */ }
  return seedProducts
}

let nextId = 100

interface ProductStore {
  products: Product[]
  addProduct: (data: Omit<Product, 'id'>) => void
  updateProduct: (id: string, data: Partial<Product>) => void
  deleteProduct: (id: string) => void
}

const ProductContext = createContext<ProductStore | null>(null)

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => loadInitial())

  // Generate next ID
  useEffect(() => {
    const max = products.reduce((max, p) => {
      const num = parseInt(p.id.replace('p', ''), 10)
      return Number.isNaN(num) ? max : Math.max(max, num)
    }, 100)
    nextId = max + 1
  }, [])

  const persist = useCallback((updated: Product[]) => {
    setProducts(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch { /* ignore */ }
  }, [])

  const addProduct = useCallback(
    (data: Omit<Product, 'id'>) => {
      const id = `p${nextId++}`
      const newProduct: Product = { ...data, id }
      persist([...products, newProduct])
    },
    [products, persist],
  )

  const updateProduct = useCallback(
    (id: string, data: Partial<Product>) => {
      const updated = products.map((p) =>
        p.id === id ? { ...p, ...data } : p,
      )
      persist(updated)
    },
    [products, persist],
  )

  const deleteProduct = useCallback(
    (id: string) => {
      persist(products.filter((p) => p.id !== id))
    },
    [products, persist],
  )

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts(): ProductStore {
  const ctx = useContext(ProductContext)
  if (!ctx) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return ctx
}
