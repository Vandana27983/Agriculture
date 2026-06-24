import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import type { Product } from '@/lib/data'
import { Badge } from '@/components/ui/badge'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-background/90 text-foreground hover:bg-background/90">
          {product.category}
        </Badge>
        {!product.inStock ? (
          <Badge
            variant="secondary"
            className="absolute right-3 top-3 bg-foreground/80 text-background"
          >
            Out of stock
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-1 text-accent">
          <Star className="size-4 fill-current" />
          <span className="text-sm font-medium text-foreground">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <h3 className="font-heading text-lg font-semibold leading-snug">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-baseline justify-between pt-3">
          <span className="text-lg font-semibold text-primary">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-xs text-muted-foreground">{product.unit}</span>
        </div>
      </div>
    </Link>
  )
}
