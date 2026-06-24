import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
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
import { EmptyState } from '@/components/site/empty-state'
import { inquiries, formatDate } from '@/lib/data'

export const metadata: Metadata = { title: 'Manage inquiries' }

export default function AdminInquiriesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold">Inquiries</h1>
        <p className="text-sm text-muted-foreground">
          Review messages submitted through the contact form (
          {inquiries.length} total).
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          {inquiries.length === 0 ? (
            <EmptyState
              icon={<Mail className="size-6" />}
              title="No inquiries yet"
              description="Messages from the contact form will appear here once persistence is enabled."
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="hidden sm:table-cell">From</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.map((inquiry) => (
                  <TableRow key={inquiry.id}>
                    <TableCell>
                      <div className="max-w-xs truncate font-medium">
                        {inquiry.subject}
                      </div>
                      <p className="line-clamp-1 text-xs text-muted-foreground">
                        {inquiry.message}
                      </p>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-sm">
                        {inquiry.name}
                        <p className="text-xs text-muted-foreground">
                          {inquiry.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm">
                      {formatDate(inquiry.date)}
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground">
        Note: Inquiries are currently static. Connect a database to enable
        persistent storage and reply workflows.
      </p>
    </div>
  )
}