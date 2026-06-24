import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  image?: string
  alt?: string
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'compact'
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt = '',
  children,
  className,
  variant = 'default',
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-card',
        variant === 'compact' ? 'py-16 md:py-20' : 'py-20 md:py-28',
        className,
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </>
      ) : null}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}