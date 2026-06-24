'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Package } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { SectionContainer } from '@/components/site/section-container'
import { SearchInput } from '@/components/site/search-input'
import { FilterBar } from '@/components/site/filter-bar'
import { SortSelect, type SortOption } from '@/components/site/sort-select'
import { EmptyState } from '@/components/site/empty-state'
import { ProductCard } from '@/components/site/product-card'
import { Button } from '@/components/ui/button'
import {
  products,
  productCategories,
  filterProducts,
  type ProductCategory,
  type ProductFilters,
} from '@/lib/data'

const categoryOptions = [
  { label: 'All', value: 'All' },
  ...productCategories.map((c) => ({ label: c.name, value: c.name })),
]

const stockOptions = [
  { label: 'All stock', value: 'all' },
  { label: 'In stock', value: 'in-stock' },
  { label: 'Out of stock', value: 'out-of-stock' },
]

const sortOptions: SortOption[] = [
  { label: 'Name (A–Z)', value: 'name-asc' },
  { label: 'Name (Z–A)', value: 'name-desc' },
  { label: 'Price: low to high', value: 'price-asc' },
  { label: 'Price: high to low', value: 'price-desc' },
  { label: 'Highest rated', value: 'rating-desc' },
]

export function ProductsClient() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialCategory = (searchParams.get('category') as ProductCategory) || 'All'

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>(initialCategory)
  const [stock, setStock] = useState<'all' | 'in-stock' | 'out-of-stock'>('all')
  const [sort, setSort] = useState<string>('name-asc')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  const results = useMemo(() => {
    const filters: ProductFilters = {
      search,
      category: category as ProductCategory | 'All',
      stock,
      sort: sort as ProductFilters['sort'],
    }
    return filterProducts(filters)
  }, [search, category, stock, sort])

  function handleCategoryChange(value: string) {
    setCategory(value)
    const params = new URLSearchParams(window.location.search)
    if (value && value !== 'All') {
      params.set('category', value)
    } else {
      params.delete('category')
    }
    router.replace(`/products?${params.toString()}`, { scroll: false })
  }

  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Everything your farm needs"
        description="Browse our complete range of certified seeds, fertilizers, crop protection, and farm equipment."
      />

      <SectionContainer>
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search products..."
            className="w-full md:max-w-sm"
          />
          <SortSelect
            value={sort}
            onChange={setSort}
            options={sortOptions}
            placeholder="Sort by"
            className="md:min-w-[200px]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 border-b border-border py-5">
          <FilterBar
            label="Category"
            options={categoryOptions}
            value={category}
            onChange={handleCategoryChange}
          />
          <FilterBar
            label="Stock"
            options={stockOptions}
            value={stock}
            onChange={(v) =>
              setStock(v as 'all' | 'in-stock' | 'out-of-stock')
            }
          />
        </div>

        {/* Results count */}
        <p className="mt-6 text-sm text-muted-foreground">
          Showing {results.length} of {products.length} products
        </p>

        {/* Grid */}
        {results.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-6"
            icon={<Package className="size-6" />}
            title="No products found"
            description="Try clearing filters or searching for something different."
            action={
              <Button
                variant="outline"
                onClick={() => {
                  setSearch('')
                  setCategory('All')
                  setStock('all')
                  setSort('name-asc')
                  router.replace('/products', { scroll: false })
                }}
              >
                Clear all filters
              </Button>
            }
          />
        )}
      </SectionContainer>
    </>
  )
}
