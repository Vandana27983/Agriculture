import type { Metadata } from 'next'
import { AdminTranslationsClient } from './translations-client'

export const metadata: Metadata = {
  title: 'Manage translations',
}

export default function AdminTranslationsPage() {
  return <AdminTranslationsClient />
}
