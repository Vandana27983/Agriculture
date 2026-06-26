'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  LayoutDashboard,
  Package,
  Briefcase,
  FileText,
  Image as ImageIcon,
  Inbox,
  Languages,
  Settings as SettingsIcon,
  Leaf,
  Menu,
  X,
  ArrowLeft,
  LogOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { ProductProvider } from '@/lib/product-store'
import { useAuth } from '@/lib/auth-store'
import { toast } from 'sonner'

const adminLinks = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/services', label: 'Services', icon: Briefcase },
  { href: '/admin/blog', label: 'Blog', icon: FileText },
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/inquiries', label: 'Inquiries', icon: Inbox },
  { href: '/admin/translations', label: 'Translations', icon: Languages },
  { href: '/admin/settings', label: 'Settings', icon: SettingsIcon },
]

function AdminSidebarContent() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)

  return (
    <nav className="flex flex-col gap-1 px-3">
      {adminLinks.map((link) => {
        const active = isActive(link.href)
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              active
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground',
            )}
          >
            <link.icon className="size-4 shrink-0" />
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, loading, user, logout } = useAuth()

  const isLoginPage = pathname === '/admin/login'

  const handleLogout = () => {
    logout()
    toast.success('Signed out successfully')
    router.replace('/admin/login')
  }

  // Redirect to login if not authenticated (skip for login page)
  useEffect(() => {
    if (!loading && !isAuthenticated && !isLoginPage) {
      router.replace('/admin/login')
    }
  }, [loading, isAuthenticated, isLoginPage, router])

  // Show nothing while checking auth
  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="text-sm text-muted-foreground">Loading…</div>
      </div>
    )
  }

  // On login page, render children without admin shell
  if (isLoginPage) {
    return <>{children}</>
  }

  // Not authenticated → render nothing (redirect is in-flight)
  if (!isAuthenticated) {
    return null
  }

  return (
    <ProductProvider>
    <div className="min-h-dvh bg-muted/30">
      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
          <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-4">
            <span className="flex size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
              <Leaf className="size-4" />
            </span>
            <span className="font-heading text-base font-semibold text-sidebar-foreground">
              Admin
            </span>
          </div>
          {user && (
            <div className="border-b border-sidebar-border px-4 py-2.5">
              <p className="text-xs text-sidebar-foreground/60">Signed in as</p>
              <p className="truncate text-sm font-medium text-sidebar-foreground">
                {user.username}
              </p>
            </div>
          )}
          <div className="flex-1 overflow-y-auto py-4">
            <AdminSidebarContent />
          </div>
          <div className="border-t border-sidebar-border p-3 flex flex-col gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to site
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut className="size-4" />
              Sign out
            </button>
          </div>
        </aside>

        {/* Mobile header + content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon-sm" aria-label="Open admin menu" />
                }
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-sidebar p-0">
                <SheetTitle className="flex items-center gap-2 border-b border-sidebar-border px-4 py-3 text-left">
                  <span className="flex size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                    <Leaf className="size-4" />
                  </span>
                  <span className="font-heading text-base font-semibold text-sidebar-foreground">
                    Admin
                  </span>
                </SheetTitle>
                <div className="py-4">
                  <div onClick={() => setOpen(false)}>
                    <AdminSidebarContent />
                  </div>
                </div>
                <div className="border-t border-sidebar-border p-3 flex flex-col gap-2">
                  {user && (
                    <p className="px-2 text-xs text-sidebar-foreground/60">
                      Signed in as <span className="font-medium text-sidebar-foreground">{user.username}</span>
                    </p>
                  )}
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  >
                    <ArrowLeft className="size-4" />
                    Back to site
                  </Link>
                  <button
                    onClick={() => { setOpen(false); handleLogout() }}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <LogOut className="size-4" />
                    Sign out
                  </button>
                </div>
              </SheetContent>
            </Sheet>
            <span className="font-heading text-sm font-semibold">Admin</span>
          </header>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
      </div>
    </ProductProvider>
  )
}