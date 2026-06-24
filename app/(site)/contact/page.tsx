import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { SectionContainer } from '@/components/site/section-container'
import { ContactForm } from '@/components/site/contact-form'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/site/reveal'

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Get in touch with the Verdant Fields team. Whether you need a quote, agronomic advice, or just have a question, we are here to help.',
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit us',
    lines: ['1420 Harvest Road', 'Greenfield, CA 93927'],
  },
  {
    icon: Phone,
    title: 'Call us',
    lines: ['+1 (800) 555-0199', 'Mon–Fri, 8am to 6pm'],
  },
  {
    icon: Mail,
    title: 'Email us',
    lines: ['hello@verdantfields.com', 'sales@verdantfields.com'],
  },
  {
    icon: Clock,
    title: 'Office hours',
    lines: ['Monday – Friday: 8am – 6pm', 'Saturday: 9am – 2pm'],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We'd love to hear from you"
        description="Whether you need a quote, agronomic advice, or just have a question, our team is ready to help."
      />

      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info cards */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info, i) => (
                <Reveal key={info.title} delay={i * 0.05}>
                  <Card className="h-full border-border">
                    <CardContent className="flex gap-4 p-5">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <info.icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-semibold">
                          {info.title}
                        </h3>
                        {info.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm text-muted-foreground"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <Card className="border-border">
              <CardContent className="p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-semibold">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we will get back to you within one
                  business day.
                </p>
                <ContactForm className="mt-6" />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  )
}