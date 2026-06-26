'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLanguage } from '@/lib/language-store'
import { type TranslationEntry } from '@/lib/translations'

interface TranslationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  translation?: TranslationEntry | null
}

export function TranslationDialog({
  open,
  onOpenChange,
  translation,
}: TranslationDialogProps) {
  const { addTranslation, updateTranslation } = useLanguage()
  const isEdit = !!translation

  const [key, setKey] = useState('')
  const [en, setEn] = useState('')
  const [hi, setHi] = useState('')
  const [gu, setGu] = useState('')

  useEffect(() => {
    if (!open) return
    if (translation) {
      setKey(translation.key)
      setEn(translation.en)
      setHi(translation.hi)
      setGu(translation.gu)
    } else {
      setKey('')
      setEn('')
      setHi('')
      setGu('')
    }
  }, [open, translation])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data: TranslationEntry = {
      key: key.trim(),
      en: en.trim(),
      hi: hi.trim(),
      gu: gu.trim(),
    }

    if (isEdit) {
      updateTranslation(translation!.key, data)
    } else {
      addTranslation(data)
    }

    onOpenChange(false)
  }

  const isValid =
    key.trim().length > 0 && en.trim().length > 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? 'Edit translation' : 'Add translation'}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? 'Update the translation for this key.'
              : 'Add a new translation key with text in all three languages.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Key */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="tr-key">Translation Key *</Label>
            <Input
              id="tr-key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="e.g. nav.home"
              disabled={isEdit}
              required
            />
            {!isEdit && (
              <p className="text-xs text-muted-foreground">
                Use dot notation, e.g. nav.home, btn.save, home.title
              </p>
            )}
          </div>

          {/* English */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="tr-en">English *</Label>
            <Textarea
              id="tr-en"
              rows={2}
              value={en}
              onChange={(e) => setEn(e.target.value)}
              placeholder="Enter English text..."
              required
            />
          </div>

          {/* Hindi */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="tr-hi">Hindi (हिन्दी)</Label>
            <Textarea
              id="tr-hi"
              rows={2}
              value={hi}
              onChange={(e) => setHi(e.target.value)}
              placeholder="Enter Hindi text..."
            />
          </div>

          {/* Gujarati */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="tr-gu">Gujarati (ગુજરાતી)</Label>
            <Textarea
              id="tr-gu"
              rows={2}
              value={gu}
              onChange={(e) => setGu(e.target.value)}
              placeholder="Enter Gujarati text..."
            />
          </div>

          <DialogFooter showCloseButton>
            <Button type="submit" disabled={!isValid}>
              {isEdit ? 'Save changes' : 'Add translation'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
