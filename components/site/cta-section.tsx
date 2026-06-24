import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  eyebrow?: string
  title: string
  description?: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  image?: string
  variant?: 'primary' | 'muted'
  className?: string
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  image = '/images/cta-field.png',
  variant = 'primary',
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden',
        variant === 'muted' && 'bg-secondary/40',
        className,
      )}
    >
      {variant === 'primary' && image ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-primary/85" />
        </>
      ) : null}

      <div
        className={cn(
          'mx-auto max-w-4xl px-4 py-20 text-center md:py-28',
          variant === 'primary' && 'text-primary-foreground',
        )}
      >
        {eyebrow ? (
          <span
            className={cn(
              'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
              variant === 'primary'
                ? 'bg-primary-foreground/15 text-primary-foreground'
                : 'bg-secondary text-secondary-foreground',
            )}
          >
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-4 text-balance font-heading text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              'mx-auto mt-4 max-w-2xl text-pretty leading-relaxed',
              variant === 'primary'
                ? 'text-primary-foreground/90'
                : 'text-muted-foreground',
            )}
          >
            {description}
          </p>
        ) : null}
        {(primaryAction || secondaryAction) && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {primaryAction ? (
              <Button render={<Link href={primaryAction.href} />} size="lg" variant="secondary">
                {primaryAction.label}
                <ArrowRight className="size-4" />
              </Button>
            ) : null}
            {secondaryAction ? (
              <Button
                render={<Link href={secondaryAction.href} />}
                size="lg"
                variant="outline"
                className={
                  variant === 'primary'
                    ? 'border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground'
                    : undefined
                }
              >
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}