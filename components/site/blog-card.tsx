import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { formatDate, type BlogPost } from '@/lib/data'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  className?: string
  showImage?: boolean
  variant?: 'default' | 'compact'
}

export function BlogCard({
  post,
  className,
  showImage = true,
  variant = 'default',
}: BlogCardProps) {
  return (
    <Card
      className={cn(
        'group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
    >
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        {showImage ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <Image
              src={post.image || '/placeholder.svg'}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Badge className="absolute left-3 top-3 bg-background/90 text-foreground hover:bg-background/90">
              {post.category}
            </Badge>
          </div>
        ) : null}
        <CardContent
          className={cn(
            'flex flex-1 flex-col gap-3',
            variant === 'compact' && 'p-5',
          )}
        >
          <h3
            className={cn(
              'font-heading font-semibold leading-snug group-hover:text-primary',
              variant === 'compact' ? 'text-base' : 'text-lg md:text-xl',
            )}
          >
            {post.title}
          </h3>
          {variant === 'default' ? (
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
          ) : null}
          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <User className="size-3" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" />
              {post.readTime}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Read article
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Link>
    </Card>
  )
}