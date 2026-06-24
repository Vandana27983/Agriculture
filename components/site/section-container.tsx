import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'div'
  background?: 'default' | 'muted'
  padding?: 'default' | 'sm' | 'lg'
}

export function SectionContainer({
  children,
  className,
  as = 'section',
  background = 'default',
  padding = 'default',
}: SectionContainerProps) {
  const Tag = as
  return (
    <Tag
      className={cn(
        background === 'muted' && 'bg-secondary/40',
        padding === 'sm' && 'py-10 md:py-12',
        padding === 'default' && 'py-16 md:py-24',
        padding === 'lg' && 'py-20 md:py-28',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </Tag>
  )
}