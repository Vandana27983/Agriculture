import type { Metadata } from 'next'
import { HomeClient } from './home-client'

export const metadata: Metadata = {
  title: 'Verdant Fields | Growing a Better Harvest',
  description:
    'Premium seeds, fertilizers, crop protection, and farm equipment paired with expert agricultural services. Verdant Fields is your trusted partner from soil to harvest.',
}

export default function HomePage() {
  return <HomeClient />
}
