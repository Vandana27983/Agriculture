'use client'

import { useState, useMemo } from 'react'
import { FileText } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { SectionContainer } from '@/components/site/section-container'
import { SearchInput } from '@/components/site/search-input'
import { FilterBar } from '@/components/site/filter-bar'
import { EmptyState } from '@/components/site/empty-state'
import { BlogCard } from '@/components/site/blog-card'
import { Button } from '@/components/ui/button'
import { blogPosts, blogCategories, filterBlogPosts } from '@/lib/data'

const categoryOptions = blogCategories.map((c) => ({ label: c, value: c }))

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const results = useMemo(() => {
    return filterBlogPosts({ search, category })
  }, [search, category])

  return (
    <>
      <PageHero
        eyebrow="Insights & guides"
        title="From the field"
        description="Practical articles, research summaries, and expert advice to help you farm smarter."
      />

      <SectionContainer>
        <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search articles..."
            className="w-full md:max-w-sm"
          />
        </div>

        <div className="border-b border-border py-5">
          <FilterBar
            label="Category"
            options={categoryOptions}
            value={category}
            onChange={setCategory}
          />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {results.length} of {blogPosts.length} articles
        </p>

        {results.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-6"
            icon={<FileText className="size-6" />}
            title="No articles found"
            description="Try different keywords or browse all categories."
            action={
              <Button
                variant="outline"
                onClick={() => {
                  setSearch('')
                  setCategory('All')
                }}
              >
                Clear filters
              </Button>
            }
          />
        )}
      </SectionContainer>
    </>
  )
}