import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ErrorStateProps {
  title?: string
  description?: string
  action?: ReactNode
  className?: string
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'We could not load this content. Please try again.',
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border border-destructive/30 bg-destructive/5 px-6 py-16 text-center',
        className,
      )}
    >
      <h3 className="font-heading text-xl font-semibold text-destructive">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  )
}