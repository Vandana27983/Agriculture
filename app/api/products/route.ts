import { NextResponse } from 'next/server'
import {
  products,
  getProductBySlug,
  filterProducts,
  type ProductFilters,
} from '@/lib/data'

/**
 * GET /api/products
 *
 * Query params:
 *   slug     – return a single product by slug
 *   search   – free-text search
 *   category – one of: Seeds | Fertilizers | Pesticides | Farm Equipment
 *   stock    – all | in-stock | out-of-stock
 *   sort     – name-asc | name-desc | price-asc | price-desc | rating-desc
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  // Single product lookup
  const slug = searchParams.get('slug')
  if (slug) {
    const product = getProductBySlug(slug)
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    return NextResponse.json({ data: product })
  }

  // Filtered list
  const hasFilters = [...searchParams.keys()].length > 0
  if (!hasFilters) {
    return NextResponse.json({ data: products })
  }

  const filters: ProductFilters = {
    search: searchParams.get('search') ?? undefined,
    category: (searchParams.get('category') as ProductFilters['category']) ?? undefined,
    stock: (searchParams.get('stock') as ProductFilters['stock']) ?? undefined,
    sort: (searchParams.get('sort') as ProductFilters['sort']) ?? undefined,
  }

  const results = filterProducts(filters)
  return NextResponse.json({ data: results })
}
