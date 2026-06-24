import type { Metadata } from 'next'
import Image from 'next/image'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { galleryImages } from '@/lib/data'

export const metadata: Metadata = { title: 'Manage gallery' }

export default function AdminGalleryPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold">Gallery</h1>
          <p className="text-sm text-muted-foreground">
            Manage gallery images ({galleryImages.length} images).
          </p>
        </div>
        <Button size="lg">
          <Plus className="size-4" />
          Upload image
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All images</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <li
                key={image.id}
                className="group relative overflow-hidden rounded-xl border border-border"
              >
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-2 p-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{image.caption}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {image.alt}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Delete"
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Trash2 className="size-4 text-destructive" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}