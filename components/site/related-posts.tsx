import type { BlogPost } from '@/lib/data'
import { BlogCard } from './blog-card'
import { SectionContainer } from './section-container'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <SectionContainer background="muted" padding="lg">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-heading text-2xl font-semibold sm:text-3xl">
          Related articles
        </h2>
        <p className="mt-3 text-muted-foreground">
          More insights on similar topics from our agronomists.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </SectionContainer>
  )
}