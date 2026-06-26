'use client'

import { useState, useMemo } from 'react'
import { Edit, Plus, Trash2, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TranslationDialog } from '@/components/admin/translation-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLanguage } from '@/lib/language-store'
import { locales, type TranslationEntry, type Locale } from '@/lib/translations'

type ViewLocale = Locale | 'all'

export function AdminTranslationsClient() {
  const {
    translations,
    addTranslation,
    updateTranslation,
    deleteTranslation,
  } = useLanguage()

  const [search, setSearch] = useState('')
  const [viewLocale, setViewLocale] = useState<ViewLocale>('all')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingTranslation, setEditingTranslation] =
    useState<TranslationEntry | null>(null)
  const [deletingTranslation, setDeletingTranslation] =
    useState<TranslationEntry | null>(null)

  const filtered = useMemo(() => {
    let list = translations
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (t) =>
          t.key.toLowerCase().includes(q) ||
          t.en.toLowerCase().includes(q) ||
          t.hi.toLowerCase().includes(q) ||
          t.gu.toLowerCase().includes(q),
      )
    }
    return list
  }, [translations, search])

  const openAdd = () => {
    setEditingTranslation(null)
    setDialogOpen(true)
  }

  const openEdit = (t: TranslationEntry) => {
    setEditingTranslation(t)
    setDialogOpen(true)
  }

  const localeLabel = locales.find((l) => l.code === viewLocale)?.native ?? 'All languages'

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold">Translations</h1>
          <p className="text-sm text-muted-foreground">
            Manage site translations ({translations.length} keys).
          </p>
        </div>
        <Button size="lg" onClick={openAdd}>
          <Plus className="size-4" />
          Add translation
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>All translations</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search keys or text..."
                className="pl-8 sm:max-w-xs"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" size="sm">
                    {localeLabel}
                  </Button>
                }
              >
                {localeLabel}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>View language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={viewLocale}
                  onValueChange={(v) => v && setViewLocale(v as ViewLocale)}
                >
                  <DropdownMenuRadioItem value="all">
                    All languages
                  </DropdownMenuRadioItem>
                  {locales.map((l) => (
                    <DropdownMenuRadioItem key={l.code} value={l.code}>
                      {l.native}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              {search.trim()
                ? 'No translations match your search.'
                : 'No translations yet. Add your first one!'}
            </p>
          ) : (
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-32">Key</TableHead>
                    {(viewLocale === 'all' || viewLocale === 'en') && (
                      <TableHead className="min-w-40">English</TableHead>
                    )}
                    {(viewLocale === 'all' || viewLocale === 'hi') && (
                      <TableHead className="min-w-40">Hindi</TableHead>
                    )}
                    {(viewLocale === 'all' || viewLocale === 'gu') && (
                      <TableHead className="min-w-40">Gujarati</TableHead>
                    )}
                    <TableHead className="w-24 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((t) => (
                    <TableRow key={t.key}>
                      <TableCell className="font-mono text-xs">
                        {t.key}
                      </TableCell>
                      {(viewLocale === 'all' || viewLocale === 'en') && (
                        <TableCell className="text-sm">{t.en}</TableCell>
                      )}
                      {(viewLocale === 'all' || viewLocale === 'hi') && (
                        <TableCell className="text-sm">{t.hi}</TableCell>
                      )}
                      {(viewLocale === 'all' || viewLocale === 'gu') && (
                        <TableCell className="text-sm">{t.gu}</TableCell>
                      )}
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label="Edit"
                            onClick={() => openEdit(t)}
                          >
                            <Edit className="size-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label="Delete"
                            onClick={() => setDeletingTranslation(t)}
                          >
                            <Trash2 className="size-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {filtered.length > 0 && (
        <p className="text-xs text-muted-foreground">
          Showing {filtered.length} of {translations.length} translation keys.
          Changes are saved to your browser&apos;s local storage.
        </p>
      )}

      {/* Add / Edit dialog */}
      <TranslationDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        translation={editingTranslation}
      />

      {/* Delete confirmation dialog */}
      <Dialog
        open={!!deletingTranslation}
        onOpenChange={(open) => {
          if (!open) setDeletingTranslation(null)
        }}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete translation</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{' '}
              <span className="font-medium text-foreground">
                {deletingTranslation?.key}
              </span>
              ? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter showCloseButton>
            <Button
              variant="destructive"
              onClick={() => {
                if (deletingTranslation) {
                  deleteTranslation(deletingTranslation.key)
                }
                setDeletingTranslation(null)
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
