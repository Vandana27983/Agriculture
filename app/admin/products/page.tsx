import type { Metadata } from 'next'
import { AdminProductsClient } from './products-client'

export const metadata: Metadata = { title: 'Manage products' }

export default function AdminProductsPage() {
  return <AdminProductsClient />
}
