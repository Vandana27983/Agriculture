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
import { Input } from '@/components/ui/input'
import { products } from '@/lib/data'

export const metadata: Metadata = { title: 'Manage products' }

export default function AdminProductsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold">Products</h1>
          <p className="text-sm text-muted-foreground">
            Manage your product catalog ({products.length} items).
          </p>
        </div>
        <Button size="lg">
          <Plus className="size-4" />
          Add product
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>All products</CardTitle>
          <Input
            placeholder="Search products..."
            className="sm:max-w-xs"
            readOnly
          />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${product.price.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={product.inStock ? 'secondary' : 'destructive'}
                      className={
                        product.inStock
                          ? 'bg-primary/15 text-primary'
                          : undefined
                      }
                    >
                      {product.inStock ? 'In stock' : 'Out'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Edit"
                        render={<Link href={`/admin/products`} />}
                      >
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

      <p className="text-xs text-muted-foreground">
        Note: Data is static. Connect a database to enable persistent edits.
      </p>
    </div>
  )
}