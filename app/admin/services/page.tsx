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
import { services } from '@/lib/data'

export const metadata: Metadata = { title: 'Manage services' }

export default function AdminServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold">Services</h1>
          <p className="text-sm text-muted-foreground">
            Manage your service offerings ({services.length} items).
          </p>
        </div>
        <Button size="lg">
          <Plus className="size-4" />
          Add service
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All services</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Summary</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell className="hidden truncate max-w-md md:table-cell">
                    {service.summary}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon-sm" aria-label="Edit" render={<Link href="/admin/services" />}>
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