import Link from 'next/link'
import { ArrowRight, Sprout, FlaskConical, Satellite, Droplets } from 'lucide-react'
import type { Service } from '@/lib/data'

const iconMap = {
  consulting: Sprout,
  soil: FlaskConical,
  crop: Satellite,
  irrigation: Droplets,
} as const

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon]
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" />
      </span>
      <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {service.summary}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
