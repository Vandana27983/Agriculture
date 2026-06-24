import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Reveal } from '@/components/site/reveal'
import { RelatedPosts } from '@/components/site/related-posts'
import { CTASection } from '@/components/site/cta-section'
import {
  getBlogPostBySlug,
  getRelatedPosts,
  formatDate,
  blogPosts,
} from '@/lib/data'

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Article not found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Verdant Fields`,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.title }],
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return notFound()

  const related = getRelatedPosts(post, 2)

  return (
    <>
      <article className="bg-card">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to blog
          </Link>

          <Reveal>
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary">
              {post.category}
            </Badge>
            <h1 className="mt-4 text-balance font-heading text-3xl font-semibold sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="size-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <div className="prose-custom space-y-5 text-lg leading-relaxed">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          {post.tags.length > 0 ? (
            <>
              <Separator className="my-8" />
              <Reveal delay={0.15} className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                  >
                    {tag}
                  </Badge>
                ))}
              </Reveal>
            </>
          ) : null}
        </div>
      </article>

      <RelatedPosts posts={related} />

      <CTASection
        eyebrow="Have questions?"
        title="Talk to our agronomists"
        description="Our experts can help turn these insights into practical steps for your farm."
        primaryAction={{ label: 'Get in touch', href: '/contact' }}
        secondaryAction={{ label: 'Browse products', href: '/products' }}
      />
    </>
  )
}