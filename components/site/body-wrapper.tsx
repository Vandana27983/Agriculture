'use client'

import { type ReactNode } from 'react'
import { AuthProvider } from '@/lib/auth-store'
import { LanguageProvider } from '@/lib/language-store'

export function BodyWrapper({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </AuthProvider>
  )
}
