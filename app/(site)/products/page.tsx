import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ProductsClient } from './products-client'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse our complete range of certified seeds, fertilizers, crop protection, and farm equipment.',
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsClient />
    </Suspense>
  )
}
