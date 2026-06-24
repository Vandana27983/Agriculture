import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Verdant Fields — Modern Agriculture & Farm Supplies',
    template: '%s | Verdant Fields',
  },
  description:
    'Verdant Fields supplies premium seeds, fertilizers, crop protection and farm equipment, plus expert agricultural consulting, soil testing, crop management and irrigation planning.',
  keywords: [
    'agriculture',
    'seeds',
    'fertilizers',
    'pesticides',
    'farm equipment',
    'soil testing',
    'crop management',
    'irrigation',
    'agricultural consulting',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Verdant Fields — Modern Agriculture & Farm Supplies',
    description:
      'Premium farm supplies and expert agronomy services to help your farm grow.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#3f6b3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
