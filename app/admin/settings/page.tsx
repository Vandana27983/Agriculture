import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { InputField } from '@/components/site/form-field'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'

export const metadata: Metadata = { title: 'Website settings' }

export default function AdminSettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          General site configuration. Changes are not persisted until a
          database is connected.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Site identity</CardTitle>
          <CardDescription>
            Core branding used across the public website.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <InputField
            label="Site name"
            name="siteName"
            defaultValue="Verdant Fields"
          />
          <InputField
            label="Tagline"
            name="tagline"
            defaultValue="Premium farm supplies and expert agronomy"
          />
          <InputField
            label="Contact email"
            name="email"
            type="email"
            defaultValue="hello@verdantfields.com"
          />
          <InputField
            label="Contact phone"
            name="phone"
            type="tel"
            defaultValue="+1 (800) 555-0199"
          />
          <InputField
            label="Address"
            name="address"
            defaultValue="1420 Harvest Road, Greenfield, CA 93927"
          />
          <div className="pt-2">
            <Button size="lg">
              <Save className="size-4" />
              Save settings
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SEO defaults</CardTitle>
          <CardDescription>
            Fallback meta values for pages that do not define their own.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <InputField
            label="Default page title"
            name="seoTitle"
            defaultValue="Verdant Fields — Modern Agriculture & Farm Supplies"
          />
          <InputField
            label="Default meta description"
            name="seoDescription"
            defaultValue="Premium seeds, fertilizers, crop protection and farm equipment, plus expert agricultural consulting, soil testing, crop management and irrigation planning."
          />
          <div className="pt-2">
            <Button size="lg">
              <Save className="size-4" />
              Save settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}