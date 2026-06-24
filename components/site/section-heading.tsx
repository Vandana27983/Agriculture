import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-pretty text-muted-foreground leading-relaxed',
            align === 'center' ? 'max-w-2xl' : 'max-w-2xl',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
