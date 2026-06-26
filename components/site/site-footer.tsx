'use client'

import Link from 'next/link'
import { Leaf, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks } from '@/lib/nav'
import { useLanguage } from '@/lib/language-store'

const productLinks = [
  { href: '/products?category=Seeds', label: 'Seeds' },
  { href: '/products?category=Fertilizers', label: 'Fertilizers' },
  { href: '/products?category=Pesticides', label: 'Pesticides' },
  { href: '/products?category=Farm+Equipment', label: 'Farm Equipment' },
]

export function SiteFooter() {
  const { __ } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
              <Leaf className="size-5" />
            </span>
            <span className="font-heading text-lg font-semibold">
              Verdant Fields
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sidebar-foreground/70">
            {__('footer.tagline')}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sidebar-foreground/90">
            {__('footer.explore')}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                >
                  {__(link.translationKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sidebar-foreground/90">
            {__('footer.products')}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sidebar-foreground/90">
            {__('footer.getInTouch')}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-sidebar-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{__('contact.address')}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0" />
              <a href="tel:+18005550199" className="hover:text-sidebar-foreground">
                +1 (800) 555-0199
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" />
              <a
                href="mailto:hello@verdantfields.com"
                className="hover:text-sidebar-foreground"
              >
                hello@verdantfields.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sidebar-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-sidebar-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            {__('footer.copyright', { year: String(year) })}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/admin" className="hover:text-sidebar-foreground">
              Admin
            </Link>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
