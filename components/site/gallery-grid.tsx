'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Expand } from 'lucide-react'
import type { GalleryImage } from '@/lib/data'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

interface GalleryGridProps {
  images: GalleryImage[]
  className?: string
}

export function GalleryGrid({ images, className }: GalleryGridProps) {
  const [active, setActive] = useState<GalleryImage | null>(null)

  return (
    <>
      <ul
        className={cn(
          'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {images.map((image, i) => (
          <li
            key={image.id}
            className={cn(
              'group relative overflow-hidden rounded-xl border border-border bg-muted',
              i === 0 && 'sm:col-span-2 sm:row-span-2',
            )}
          >
            <button
              type="button"
              onClick={() => setActive(image)}
              aria-label={`Preview ${image.caption}`}
              className="relative block aspect-square w-full text-left"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <p className="text-sm font-medium text-background">
                  {image.caption}
                </p>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="size-4" />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {active ? (
            <div className="flex flex-col">
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-5">
                <DialogTitle className="text-base">{active.caption}</DialogTitle>
                <DialogDescription>{active.alt}</DialogDescription>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}