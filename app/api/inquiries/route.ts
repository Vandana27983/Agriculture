import { NextResponse } from 'next/server'

// TODO: Replace with a real database / email service integration.
// For now this accepts inquiries in-memory and returns a successful response.

interface InquiryPayload {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: InquiryPayload

  try {
    body = (await request.json()) as InquiryPayload
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 },
    )
  }

  const errors: Partial<Record<keyof InquiryPayload, string>> = {}
  if (!body.name || !body.name.trim()) errors.name = 'Name is required'
  if (!body.email || !EMAIL_PATTERN.test(body.email))
    errors.email = 'Valid email is required'
  if (!body.subject || !body.subject.trim())
    errors.subject = 'Subject is required'
  if (!body.message || body.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters'

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  // TODO: Persist inquiry to database and/or forward to email service.
  // Example future integration:
  // await db.inquiries.create({ data: { ...body, date: new Date().toISOString(), status: 'New' } })
  // await sendEmail({ to: 'hello@verdantfields.com', subject: body.subject, body: body.message })

  return NextResponse.json({
    success: true,
    message: 'Your inquiry has been received. We will be in touch shortly.',
  })
}