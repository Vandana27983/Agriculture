'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface SortOption {
  label: string
  value: string
}

interface SortSelectProps {
  value: string
  onChange: (value: string) => void
  options: SortOption[]
  placeholder?: string
  className?: string
}

export function SortSelect({
  value,
  onChange,
  options,
  placeholder = 'Sort by',
  className,
}: SortSelectProps) {
  return (
    <Select value={value} onValueChange={(v) => v && onChange(v)}>
      <SelectTrigger className={className} aria-label={placeholder}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}