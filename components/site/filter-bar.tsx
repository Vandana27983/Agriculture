'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface FilterChip {
  label: string
  value: string
}

interface FilterBarProps {
  label?: string
  options: FilterChip[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function FilterBar({
  label,
  options,
  value,
  onChange,
  className,
}: FilterBarProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {label ? (
        <span className="text-sm font-medium text-muted-foreground">
          {label}:
        </span>
      ) : null}
      {options.map((option) => {
        const active = option.value === value
        return (
          <Button
            key={option.value}
            type="button"
            size="sm"
            variant={active ? 'default' : 'outline'}
            onClick={() => onChange(option.value)}
            aria-pressed={active}
          >
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}