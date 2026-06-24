import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface BaseFieldProps {
  label: string
  name: string
  required?: boolean
  error?: string
  description?: string
  className?: string
}

interface InputFieldProps extends BaseFieldProps {
  type?: 'text' | 'email' | 'tel' | 'url'
  placeholder?: string
  defaultValue?: string
}

export function InputField({
  label,
  name,
  type = 'text',
  required,
  error,
  description,
  placeholder,
  defaultValue,
  className,
}: InputFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <Label htmlFor={name}>
        {label}
        {required ? <span className="ml-0.5 text-destructive">*</span> : null}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="h-10"
      />
      {description && !error ? (
        <p className="text-xs text-muted-foreground">{description}</p>
      ) : null}
      {error ? (
        <p id={`${name}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}

interface TextareaFieldProps extends BaseFieldProps {
  placeholder?: string
  defaultValue?: string
  rows?: number
}

export function TextareaField({
  label,
  name,
  required,
  error,
  description,
  placeholder,
  defaultValue,
  rows = 5,
  className,
}: TextareaFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <Label htmlFor={name}>
        {label}
        {required ? <span className="ml-0.5 text-destructive">*</span> : null}
      </Label>
      <Textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {description && !error ? (
        <p className="text-xs text-muted-foreground">{description}</p>
      ) : null}
      {error ? (
        <p id={`${name}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}