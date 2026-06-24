'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Leaf, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/lib/nav'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background/40 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Leaf className="size-5" />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight">
            Verdant Fields
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: 'lg' }), 'hidden sm:inline-flex')}
          >
            Get a Quote
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  aria-label="Open menu"
                  className="lg:hidden"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="flex items-center gap-2 text-left">
                <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Leaf className="size-4" />
                </span>
                Verdant Fields
              </SheetTitle>
              <nav className="mt-6 flex flex-col gap-1 px-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                      isActive(link.href)
                        ? 'bg-secondary text-primary'
                        : 'text-foreground/80 hover:bg-secondary/60',
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants({ size: 'lg' }), 'mt-3')}
                >
                  Get a Quote
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
