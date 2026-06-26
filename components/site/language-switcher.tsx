'use client'

import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/lib/language-store'
import { locales, type Locale } from '@/lib/translations'

interface LanguageSwitcherProps {
  variant?: 'default' | 'ghost'
}

export function LanguageSwitcher({ variant = 'ghost' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant={variant === 'ghost' ? 'ghost' : 'outline'}
            size="icon-sm"
            aria-label="Change language"
          />
        }
      >
        <Globe className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(v) => v && setLocale(v as Locale)}
        >
          {locales.map((l) => (
            <DropdownMenuRadioItem key={l.code} value={l.code}>
              <span>{l.native}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {l.label}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
