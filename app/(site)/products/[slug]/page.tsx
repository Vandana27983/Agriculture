import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Reveal } from '@/components/site/reveal'
import { RelatedProducts } from '@/components/site/related-products'
import { CTASection } from '@/components/site/cta-section'
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from '@/lib/data'

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Verdant Fields`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return notFound()
  }

  const related = getRelatedProducts(product, 3)

  return (
    <>
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to products
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <Reveal className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>

            {/* Details */}
            <Reveal delay={0.1} className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{product.category}</Badge>
                {product.inStock ? (
                  <Badge variant="secondary" className="bg-primary/15 text-primary">
                    In stock
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-foreground/80 text-background">
                    Out of stock
                  </Badge>
                )}
              </div>

              <h1 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-1 text-accent">
                  <Star className="size-4 fill-current" />
                </div>
                <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">/ 5.0</span>
              </div>

              <p className="mt-6 text-4xl font-semibold text-primary">
                ${product.price.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{product.unit}</p>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                {product.shortDescription}
              </p>

              <Separator className="my-6" />

              <p className="leading-relaxed">{product.description}</p>

              {product.features.length > 0 ? (
                <>
                  <h2 className="mt-6 font-heading text-lg font-semibold">
                    Key features
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button render={<Link href="/contact" />} size="lg">
                  Request a quote
                  <ArrowRight className="size-4" />
                </Button>
                <Button render={<Link href="/products" />} size="lg" variant="outline">
                  View more products
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <RelatedProducts products={related} />

      <CTASection
        eyebrow="Need help?"
        title="Talk to our agronomists"
        description="Our team can help you choose the right products for your farm. No pressure, just honest advice."
        primaryAction={{ label: 'Get in touch', href: '/contact' }}
      />
    </>
  )
}