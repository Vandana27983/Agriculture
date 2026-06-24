import { NextResponse } from 'next/server'
import { services, getServiceBySlug } from '@/lib/data'

/**
 * GET /api/services
 *
 * Query params:
 *   slug – return a single service by slug
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const slug = searchParams.get('slug')
  if (slug) {
    const service = getServiceBySlug(slug)
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }
    return NextResponse.json({ data: service })
  }

  return NextResponse.json({ data: services })
}
