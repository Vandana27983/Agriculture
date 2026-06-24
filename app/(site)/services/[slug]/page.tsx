import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { SectionContainer } from '@/components/site/section-container'
import { CTASection } from '@/components/site/cta-section'
import {
  getServiceBySlug,
  getRelatedServices,
  services,
} from '@/lib/data'

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Service not found' }
  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: `${service.title} | Verdant Fields`,
      description: service.summary,
      images: [{ url: service.image, alt: service.title }],
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return notFound()

  const related = getRelatedServices(service, 3)

  return (
    <>
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to services
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col">
              <span className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                {service.title}
              </span>
              <h1 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
                {service.summary}
              </h1>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {service.benefits.length > 0 ? (
                <>
                  <h2 className="mt-8 font-heading text-lg font-semibold">
                    Benefits you can expect
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="inline-flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button render={<Link href="/contact" />} size="lg">
                  Book a consultation
                  <ArrowRight className="size-4" />
                </Button>
                <Button render={<Link href="/services" />} size="lg" variant="outline">
                  View all services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 ? (
        <SectionContainer background="muted" padding="lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-heading text-2xl font-semibold sm:text-3xl">
              You might also like
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore our other agronomic services.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedService) => (
              <Link
                key={relatedService.id}
                href={`/services/${relatedService.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-semibold group-hover:text-primary">
                  {relatedService.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {relatedService.summary}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </SectionContainer>
      ) : null}

      <CTASection
        eyebrow="Let's work together"
        title="Get expert guidance for your farm"
        description="Our team is ready to build a customized service plan that fits your operation."
        primaryAction={{ label: 'Contact us', href: '/contact' }}
      />
    </>
  )
}