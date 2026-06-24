import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { SectionContainer } from '@/components/site/section-container'
import { SectionHeading } from '@/components/site/section-heading'
import { ServiceCard } from '@/components/site/service-card'
import { Reveal } from '@/components/site/reveal'
import { CTASection } from '@/components/site/cta-section'
import { services } from '@/lib/data'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agricultural services',
  description:
    'Expert agricultural consulting, soil testing, crop management, and irrigation planning from Verdant Fields agronomists.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Expert services"
        title="Guidance at every stage"
        description="Our agronomists and engineers partner with you to plan, grow, and protect a more profitable harvest."
      />

      {/* Overview grid */}
      <SectionContainer>
        <SectionHeading
          eyebrow="What we offer"
          title="Full-service agronomy support"
          description="From the first soil test to harvest-day decisions, we are with you at every step."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* Detailed sections */}
      {services.map((service, i) => (
        <SectionContainer
          key={service.id}
          background={i % 2 === 0 ? 'muted' : 'default'}
          padding="lg"
        >
          <div
            id={service.slug}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <Reveal className={i % 2 === 0 ? '' : 'order-2'}>
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                {service.title}
              </span>
              <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
                {service.summary}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              {service.benefits.length > 0 ? (
                <ul className="mt-6 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="inline-flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
            <Reveal
              delay={0.1}
              className={i % 2 === 0 ? 'order-2' : ''}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      ))}

      <CTASection
        eyebrow="Ready to start?"
        title="Let's plan your best season yet"
        description="Book a consultation with our agronomists and get a tailored plan for your farm."
        primaryAction={{ label: 'Contact us', href: '/contact' }}
        secondaryAction={{ label: 'Browse products', href: '/products' }}
      />
    </>
  )
}