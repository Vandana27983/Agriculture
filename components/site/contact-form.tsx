'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InputField, TextareaField } from './form-field'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormValues {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

interface ContactFormProps {
  className?: string
  defaultSubject?: string
  onSubmitted?: (values: ContactFormValues) => void
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm({
  className,
  defaultSubject,
  onSubmitted,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>(
    {},
  )

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values: ContactFormValues = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      subject: String(formData.get('subject') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    }

    const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {}
    if (!values.name) nextErrors.name = 'Please enter your name'
    if (!values.email) {
      nextErrors.email = 'Please enter your email'
    } else if (!EMAIL_PATTERN.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address'
    }
    if (!values.subject) nextErrors.subject = 'Please add a subject'
    if (!values.message) {
      nextErrors.message = 'Please write a short message'
    } else if (values.message.length < 10) {
      nextErrors.message = 'Message should be at least 10 characters'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }
    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        throw new Error('Request failed')
      }
      setStatus('success')
      toast.success('Message sent', {
        description: 'Thanks for reaching out. We will get back to you shortly.',
      })
      onSubmitted?.(values)
      event.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      toast.error('Could not send message', {
        description: 'Please try again in a moment.',
      })
    } finally {
      window.setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn('flex flex-col gap-5', className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Name"
          name="name"
          required
          placeholder="Jane Farmer"
          error={errors.name}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          error={errors.email}
        />
        <InputField
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Optional"
          error={errors.phone}
        />
        <InputField
          label="Subject"
          name="subject"
          required
          placeholder="How can we help?"
          defaultValue={defaultSubject}
          error={errors.subject}
        />
      </div>
      <TextareaField
        label="Message"
        name="message"
        required
        placeholder="Tell us a bit about your farm or what you are looking for..."
        rows={6}
        error={errors.message}
      />

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          By submitting you agree to our friendly privacy practices.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          className="min-w-40"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 className="size-4" />
              Sent
            </>
          ) : status === 'error' ? (
            <>
              <AlertCircle className="size-4" />
              Try again
            </>
          ) : (
            'Send message'
          )}
        </Button>
      </div>
    </form>
  )
}