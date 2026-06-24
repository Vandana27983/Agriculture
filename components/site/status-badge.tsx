import { cn } from '@/lib/utils'

type StatusVariant = 'success' | 'warning' | 'info' | 'neutral' | 'destructive'

interface StatusBadgeProps {
  variant?: StatusVariant
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<StatusVariant, string> = {
  success: 'bg-primary/15 text-primary',
  warning: 'bg-accent/20 text-accent-foreground',
  info: 'bg-secondary text-secondary-foreground',
  neutral: 'bg-muted text-muted-foreground',
  destructive: 'bg-destructive/15 text-destructive',
}

export function StatusBadge({
  variant = 'neutral',
  children,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}