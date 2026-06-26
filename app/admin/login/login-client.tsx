'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Leaf, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth, SAMPLE_CREDENTIALS } from '@/lib/auth-store'

export function LoginClient() {
  const router = useRouter()
  const { login, isAuthenticated, loading } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // If already authenticated, redirect to admin dashboard
  if (!loading && isAuthenticated) {
    router.replace('/admin')
    return null
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.')
      return
    }

    const success = login(username.trim(), password)
    if (success) {
      router.replace('/admin')
    } else {
      setError('Invalid username or password. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="text-sm text-muted-foreground">Loading…</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Brand */}
        <div className="text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Leaf className="size-7" />
          </div>
          <h1 className="mt-4 font-heading text-xl font-semibold tracking-tight">
            Verdant Fields
          </h1>
          <p className="text-sm text-muted-foreground">Admin panel</p>
        </div>

        {/* Login card */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Sign in</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="login-username">Username</Label>
                <Input
                  id="login-username"
                  type="text"
                  value={username}
                  onChange={(e) => { setUsername(e.target.value); setError('') }}
                  placeholder="Enter username"
                  autoComplete="username"
                  autoFocus
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError('') }}
                    placeholder="Enter password"
                    autoComplete="current-password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          </CardContent>

          {/* Sample credentials display */}
          <CardFooter className="flex-col items-center rounded-b-xl bg-secondary/60 pt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Sample credentials
            </p>
            <div className="mt-2 flex w-full gap-3">
              <div className="flex-1 rounded-md bg-background px-3 py-2 text-center">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  Username
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold">
                  {SAMPLE_CREDENTIALS.username}
                </p>
              </div>
              <div className="flex-1 rounded-md bg-background px-3 py-2 text-center">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  Password
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold">
                  {SAMPLE_CREDENTIALS.password}
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          <a href="/" className="underline underline-offset-4 hover:text-foreground">
            Back to site
          </a>
        </p>
      </div>
    </div>
  )
}
