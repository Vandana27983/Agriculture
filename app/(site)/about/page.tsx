import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Heart, Leaf, Target } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { SectionContainer } from '@/components/site/section-container'
import { SectionHeading } from '@/components/site/section-heading'
import { Reveal } from '@/components/site/reveal'
import { CTASection } from '@/components/site/cta-section'
import { Card, CardContent } from '@/components/ui/card'
import { companyStats, teamMembers } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Verdant Fields',
  description:
    'Learn how Verdant Fields grew from a family farm into a trusted partner for over 3,500 farms, combining modern agronomy with a deep respect for the land.',
}

const mission = [
  {
    icon: Leaf,
    title: 'Sustainability first',
    description:
      'Every product and service we offer is rooted in responsible, regenerative practices that protect farmland for generations.',
  },
  {
    icon: Target,
    title: 'Results-driven',
    description:
      'We measure success by your yield, your profitability, and the long-term health of your soil and crops.',
  },
  {
    icon: Heart,
    title: 'Partnership mindset',
    description:
      'Our agronomists work alongside you, not above you. Your farm knowledge and our science combine to unlock better harvests.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Rooted in trust, grown with science"
        description="For over two decades, Verdant Fields has helped family farms thrive by combining certified quality supplies with expert agronomic guidance."
        image="/images/about-farm.png"
        alt="Aerial view of a family farm at golden hour"
      />

      {/* Story */}
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-farm.png"
              alt="Verdant Fields team working with farmers"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-pretty font-heading text-3xl font-semibold sm:text-4xl">
              From one family farm to thousands
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Verdant Fields began in 1999 when third-generation farmer Daniel Hart
              saw a gap: family farms needed modern, science-backed supplies and
              honest, on-the-ground advice, but most suppliers treated them like
              just another transaction.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today we serve over 3,500 farms across the country. From certified
              seeds and fertilizers to soil testing and irrigation planning, we
              have grown into a one-stop partner that understands the unique
              challenges each farm faces. Our agronomists, engineers, and field
              staff share a single mission: helping your land produce more, more
              sustainably, season after season.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                'Certified, field-tested inputs',
                'Data-driven agronomic advice',
                'Commitment to regenerative practices',
                'Nationwide logistics and support',
              ].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 text-sm font-medium"
                >
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Mission */}
      <SectionContainer background="muted">
        <SectionHeading
          eyebrow="What we stand for"
          title="Mission and values"
          description="The principles that guide every product, recommendation, and relationship we build."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {mission.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full border-border">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                    <item.icon className="size-6" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* Stats */}
      <SectionContainer padding="lg">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {companyStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05} className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* Team */}
      <SectionContainer background="muted" padding="lg">
        <SectionHeading
          eyebrow="The people behind Verdant Fields"
          title="Meet the team"
          description="Agronomists, engineers, and farmers themselves, all working to help your land thrive."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.08}>
              <Card className="h-full overflow-hidden border-border">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex flex-col gap-2 p-6">
                  <h3 className="font-heading text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <CTASection
        eyebrow="Ready to grow?"
        title="Let's build a better harvest together"
        description="Whether you need supplies, advice, or a long-term agronomy partner, our team is ready to help."
        primaryAction={{ label: 'Get in touch', href: '/contact' }}
        secondaryAction={{ label: 'Browse products', href: '/products' }}
      />
    </>
  )
}