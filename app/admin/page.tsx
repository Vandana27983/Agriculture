import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Package,
  Briefcase,
  FileText,
  Image as ImageIcon,
  Inbox,
  ArrowUpRight,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  products,
  services,
  blogPosts,
  galleryImages,
  inquiries,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'Admin dashboard',
}

const stats = [
  {
    label: 'Products',
    value: products.length,
    icon: Package,
    href: '/admin/products',
  },
  {
    label: 'Services',
    value: services.length,
    icon: Briefcase,
    href: '/admin/services',
  },
  {
    label: 'Blog posts',
    value: blogPosts.length,
    icon: FileText,
    href: '/admin/blog',
  },
  {
    label: 'Gallery images',
    value: galleryImages.length,
    icon: ImageIcon,
    href: '/admin/gallery',
  },
  {
    label: 'Inquiries',
    value: inquiries.length,
    icon: Inbox,
    href: '/admin/inquiries',
  },
]

const quickLinks = [
  { label: 'Manage products', href: '/admin/products' },
  { label: 'Manage services', href: '/admin/services' },
  { label: 'Write a blog post', href: '/admin/blog' },
  { label: 'Upload gallery photos', href: '/admin/gallery' },
  { label: 'Review inquiries', href: '/admin/inquiries' },
  { label: 'Website settings', href: '/admin/settings' },
]

export default function AdminDashboard() {
  const newInquiries = inquiries.filter((i) => i.status === 'New')

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back. Here is an overview of your Verdant Fields website
          content.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between gap-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="size-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="font-heading text-3xl font-semibold">{stat.value}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent inquiries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent inquiries</CardTitle>
            <Link
              href="/admin/inquiries"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View all
              <ArrowUpRight className="size-3.5" />
            </Link>
          </CardHeader>
          <CardContent>
            {inquiries.length === 0 ? (
              <p className="text-sm text-muted-foreground">No inquiries yet.</p>
            ) : (
              <ul className="space-y-3">
                {inquiries.slice(0, 5).map((inquiry) => (
                  <li
                    key={inquiry.id}
                    className="flex items-start justify-between gap-3 rounded-lg border border-border p-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-medium">
                          {inquiry.subject}
                        </p>
                        <Badge
                          variant={
                            inquiry.status === 'New' ? 'default' : 'secondary'
                          }
                          className={
                            inquiry.status === 'New'
                              ? 'bg-primary/15 text-primary'
                              : undefined
                          }
                        >
                          {inquiry.status}
                        </Badge>
                      </div>
                      <p className="truncate text-xs text-muted-foreground">
                        {inquiry.name} &middot; {inquiry.date}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {newInquiries.length > 0 ? (
              <p className="mt-3 text-xs text-muted-foreground">
                {newInquiries.length} new inquiry
                {newInquiries.length === 1 ? '' : 'ies'} awaiting response.
              </p>
            ) : null}
          </CardContent>
        </Card>

        {/* Quick links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}