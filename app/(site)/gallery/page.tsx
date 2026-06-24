import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { SectionContainer } from '@/components/site/section-container'
import { GalleryGrid } from '@/components/site/gallery-grid'
import { galleryImages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A look at our farms, fields, and greenhouses through the seasons. Explore the Verdant Fields world in pictures.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our world"
        title="Fields, farms, and harvests"
        description="Take a closer look at the land, crops, and people behind Verdant Fields."
      />

      <SectionContainer>
        <GalleryGrid images={galleryImages} />
      </SectionContainer>
    </>
  )
}