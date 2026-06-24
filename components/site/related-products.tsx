import type { Product } from '@/lib/data'
import { ProductCard } from './product-card'
import { SectionContainer } from './section-container'

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <SectionContainer background="muted" padding="lg">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-heading text-2xl font-semibold sm:text-3xl">
          You might also like
        </h2>
        <p className="mt-3 text-muted-foreground">
          Explore more products from the same category.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionContainer>
  )
}