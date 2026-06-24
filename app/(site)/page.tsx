import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, ShieldCheck, Sprout, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Hero } from '@/components/home/hero'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { ProductCard } from '@/components/site/product-card'
import { ServiceCard } from '@/components/site/service-card'
import {
  products,
  services,
  testimonials,
  companyStats,
  productCategories,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'Verdant Fields | Growing a Better Harvest',
  description:
    'Premium seeds, fertilizers, crop protection, and farm equipment paired with expert agricultural services. Verdant Fields is your trusted partner from soil to harvest.',
}

const whyUs = [
  {
    icon: Sprout,
    title: 'Certified Quality',
    description:
      'Every product is tested and certified to deliver consistent, reliable performance in your fields.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description:
      'We champion regenerative methods that protect your land for generations to come.',
  },
  {
    icon: ShieldCheck,
    title: 'Expert Guidance',
    description:
      'Our agronomists work alongside you with data-driven advice tailored to your farm.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description:
      'Dependable nationwide logistics get your supplies where they need to be, on time.',
  },
]

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:py-12">
          {companyStats.map((stat) => (
            <Reveal key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionHeading
          eyebrow="Why Verdant Fields"
          title="Rooted in trust, grown with science"
          description="For over two decades we have helped farms thrive with quality inputs and honest, expert advice."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full border-border transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="What we offer"
            title="Everything your farm needs"
            description="From the first seed to the final harvest, explore our full range of agricultural supplies."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.08}>
                <Link
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="group relative block overflow-hidden rounded-xl"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={cat.image || '/placeholder.svg'}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-semibold text-background">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm text-background/80">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Best sellers"
            title="Featured products"
            description="Trusted favorites that farmers come back for season after season."
          />
          <Button render={<Link href="/products" />} variant="outline" className="hidden sm:inline-flex">
            View all products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button render={<Link href="/products" />} variant="outline">
            View all products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Expert services"
            title="Guidance at every stage"
            description="Our specialists partner with you to plan, grow, and protect a more profitable harvest."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionHeading
          eyebrow="Trusted by farmers"
          title="What our clients say"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <Card className="h-full border-border bg-card">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <p className="flex-1 leading-relaxed text-foreground">
                    {`"${t.quote}"`}
                  </p>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/cta-field.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-primary-foreground md:py-28">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Ready to grow a better harvest?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90">
              Talk to our team about the right products and services for your
              farm. We are here to help you succeed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button render={<Link href="/contact" />} size="lg" variant="secondary">
                Get in touch
              </Button>
              <Button
                render={<Link href="/products" />}
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Browse products
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
