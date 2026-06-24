import Link from 'next/link'
import { ArrowLeft, Sprout } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
        <div className="flex items-center gap-3 text-primary">
          <Sprout className="size-10" />
        </div>
        <p className="mt-6 font-heading text-7xl font-bold text-primary sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button render={<Link href="/" />} size="lg">
            <ArrowLeft className="size-4" />
            Back to home
          </Button>
          <Button render={<Link href="/products" />} size="lg" variant="outline">
            Browse products
          </Button>
          <Button render={<Link href="/contact" />} size="lg" variant="outline">
            Contact us
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
