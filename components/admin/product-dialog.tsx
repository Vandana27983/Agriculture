'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useProducts } from '@/lib/product-store'
import {
  type Product,
  type ProductCategory,
  productCategories,
} from '@/lib/data'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

interface ProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product?: Product | null // null / undefined = add mode
}

export function ProductDialog({ open, onOpenChange, product }: ProductDialogProps) {
  const { addProduct, updateProduct } = useProducts()
  const isEdit = !!product

  const [name, setName] = useState('')
  const [category, setCategory] = useState<ProductCategory>('Seeds')
  const [price, setPrice] = useState('')
  const [unit, setUnit] = useState('')
  const [image, setImage] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [description, setDescription] = useState('')
  const [features, setFeatures] = useState<string[]>([''])
  const [inStock, setInStock] = useState(true)
  const [featured, setFeatured] = useState(false)

  // Reset form when dialog opens
  useEffect(() => {
    if (!open) return
    if (product) {
      setName(product.name)
      setCategory(product.category)
      setPrice(String(product.price))
      setUnit(product.unit)
      setImage(product.image)
      setShortDescription(product.shortDescription)
      setDescription(product.description)
      setFeatures(product.features.length > 0 ? product.features : [''])
      setInStock(product.inStock)
      setFeatured(product.featured ?? false)
    } else {
      setName('')
      setCategory('Seeds')
      setPrice('')
      setUnit('')
      setImage('')
      setShortDescription('')
      setDescription('')
      setFeatures([''])
      setInStock(true)
      setFeatured(false)
    }
  }, [open, product])

  const setFeature = (idx: number, value: string) => {
    setFeatures((prev) => {
      const next = [...prev]
      next[idx] = value
      return next
    })
  }

  const addFeature = () => {
    setFeatures((prev) => [...prev, ''])
  }

  const removeFeature = (idx: number) => {
    setFeatures((prev) => prev.filter((_, i) => i !== idx))
    if (features.length <= 1) setFeatures([''])
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const cleanFeatures = features.filter((f) => f.trim().length > 0)
    const slug = slugify(name)

    const data = {
      slug,
      name: name.trim(),
      category,
      price: parseFloat(price) || 0,
      unit: unit.trim(),
      image: image.trim() || `/images/product-${slugify(category)}.png`,
      shortDescription: shortDescription.trim(),
      description: description.trim(),
      features: cleanFeatures,
      inStock,
      featured,
      rating: product?.rating ?? 0,
    }

    if (isEdit) {
      updateProduct(product.id, data)
    } else {
      addProduct(data)
    }

    onOpenChange(false)
  }

  const isValid = name.trim().length > 0 && (parseFloat(price) || 0) > 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Edit product' : 'Add product'}</DialogTitle>
          <DialogDescription>
            {isEdit
              ? 'Update the product details below.'
              : 'Fill in the details to add a new product to your catalog.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="prod-name">Name *</Label>
            <Input
              id="prod-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Hybrid Corn Seed Z90"
              required
            />
          </div>

          {/* Category + Price row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label>Category</Label>
              <Select value={category} onValueChange={(v) => v && setCategory(v as ProductCategory)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {productCategories.map((cat) => (
                    <SelectItem key={cat.name} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="prod-price">Price *</Label>
              <Input
                id="prod-price"
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="89.00"
                required
              />
            </div>
          </div>

          {/* Unit + Image URL row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="prod-unit">Unit</Label>
              <Input
                id="prod-unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="per 25kg bag"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="prod-image">Image URL</Label>
              <Input
                id="prod-image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="/images/product-seeds.png"
              />
            </div>
          </div>

          {/* Short description */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="prod-short">Short description</Label>
            <Textarea
              id="prod-short"
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Brief summary shown on cards..."
            />
          </div>

          {/* Full description */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="prod-desc">Description</Label>
            <Textarea
              id="prod-desc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed product description..."
            />
          </div>

          {/* Features */}
          <div className="flex flex-col gap-1.5">
            <Label>Features</Label>
            <div className="flex flex-col gap-2">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    value={feat}
                    onChange={(e) => setFeature(i, e.target.value)}
                    placeholder={`Feature ${i + 1}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Remove feature"
                    onClick={() => removeFeature(i)}
                  >
                    <Trash2 className="size-4 text-muted-foreground" />
                  </Button>
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-1 w-fit"
              onClick={addFeature}
            >
              <Plus className="size-4" />
              Add feature
            </Button>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
                className="size-4 rounded border-input accent-primary"
              />
              In stock
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="size-4 rounded border-input accent-primary"
              />
              Featured
            </label>
          </div>

          <DialogFooter showCloseButton>
            <Button type="submit" disabled={!isValid}>
              {isEdit ? 'Save changes' : 'Add product'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
