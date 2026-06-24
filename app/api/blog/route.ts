import { NextResponse } from 'next/server'
import {
  blogPosts,
  getBlogPostBySlug,
  filterBlogPosts,
  blogCategories,
  type BlogFilters,
} from '@/lib/data'

/**
 * GET /api/blog
 *
 * Query params:
 *   slug     – return a single post by slug
 *   search   – free-text search
 *   category – blog category filter
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  // Single post lookup
  const slug = searchParams.get('slug')
  if (slug) {
    const post = getBlogPostBySlug(slug)
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json({ data: post })
  }

  // Filtered list
  const hasFilters = [...searchParams.keys()].length > 0
  if (!hasFilters) {
    return NextResponse.json({ data: blogPosts, categories: blogCategories })
  }

  const filters: BlogFilters = {
    search: searchParams.get('search') ?? undefined,
    category: searchParams.get('category') ?? undefined,
  }

  const results = filterBlogPosts(filters)
  return NextResponse.json({ data: results, categories: blogCategories })
}
