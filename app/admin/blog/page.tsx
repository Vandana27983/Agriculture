import type { Metadata } from 'next'
import Link from 'next/link'
import { Edit, Plus, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { blogPosts, formatDate } from '@/lib/data'

export const metadata: Metadata = { title: 'Manage blog' }

export default function AdminBlogPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold">Blog</h1>
          <p className="text-sm text-muted-foreground">
            Manage articles and posts ({blogPosts.length} articles).
          </p>
        </div>
        <Button size="lg">
          <Plus className="size-4" />
          New article
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All articles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden sm:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden lg:table-cell">Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant="secondary">{post.category}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {post.author}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {formatDate(post.date)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon-sm" aria-label="Edit" render={<Link href="/admin/blog" />}>
                        <Edit className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon-sm" aria-label="Delete">
                        <Trash2 className="size-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}