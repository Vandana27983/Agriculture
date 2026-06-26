'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import { type Locale, type TranslationEntry, locales, defaultTranslations, t } from '@/lib/translations'

const LOCALE_KEY = 'verdant-fields-locale'
const TRANSLATIONS_KEY = 'verdant-fields-translations'

function loadInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = localStorage.getItem(LOCALE_KEY) as Locale | null
    if (stored && ['en', 'hi', 'gu'].includes(stored)) return stored
  } catch { /* ignore */ }
  return 'en'
}

function loadInitialTranslations(): TranslationEntry[] {
  if (typeof window === 'undefined') return defaultTranslations
  try {
    const raw = localStorage.getItem(TRANSLATIONS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as TranslationEntry[]
      if (Array.isArray(parsed) && parsed.length > 0) return parsed
    }
  } catch { /* corrupted */ }
  try {
    localStorage.setItem(TRANSLATIONS_KEY, JSON.stringify(defaultTranslations))
  } catch { /* ignore */ }
  return defaultTranslations
}

interface LanguageStore {
  locale: Locale
  setLocale: (l: Locale) => void
  translations: TranslationEntry[]
  /** Quick-lookup: returns translated string for current locale */
  __ : (key: string, replacements?: Record<string, string>) => string
  addTranslation: (data: TranslationEntry) => void
  updateTranslation: (key: string, data: Partial<TranslationEntry>) => void
  deleteTranslation: (key: string) => void
}

const LanguageContext = createContext<LanguageStore | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => loadInitialLocale())
  const [translations, setTranslations] = useState<TranslationEntry[]>(() =>
    loadInitialTranslations(),
  )

  // Persist locale
  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem(LOCALE_KEY, l)
    } catch { /* ignore */ }
  }, [])

  // Persist translations on change
  useEffect(() => {
    try {
      localStorage.setItem(TRANSLATIONS_KEY, JSON.stringify(translations))
    } catch { /* ignore */ }
  }, [translations])

  // Update <html lang> attribute
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  // Quick lookup helper
  const __ = useCallback(
    (key: string, replacements?: Record<string, string>) =>
      t(translations, key, locale, replacements),
    [translations, locale],
  )

  const addTranslation = useCallback((data: TranslationEntry) => {
    setTranslations((prev) => {
      if (prev.some((e) => e.key === data.key)) return prev
      return [...prev, data]
    })
  }, [])

  const updateTranslation = useCallback(
    (key: string, data: Partial<TranslationEntry>) => {
      setTranslations((prev) =>
        prev.map((e) => (e.key === key ? { ...e, ...data } : e)),
      )
    },
    [],
  )

  const deleteTranslation = useCallback((key: string) => {
    setTranslations((prev) => prev.filter((e) => e.key !== key))
  }, [])

  const value = useMemo<LanguageStore>(
    () => ({
      locale,
      setLocale,
      translations,
      __,
      addTranslation,
      updateTranslation,
      deleteTranslation,
    }),
    [locale, setLocale, translations, __, addTranslation, updateTranslation, deleteTranslation],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageStore {
  const ctx = useContext(LanguageContext)
  if (!ctx)
    throw new Error('useLanguage must be used within a <LanguageProvider>')
  return ctx
}
