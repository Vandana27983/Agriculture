'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'

const AUTH_KEY = 'verdant-fields-auth'

// Sample credentials — displayed on the login page
export const SAMPLE_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
}

interface User {
  username: string
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

function loadInitialUser(): User | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(AUTH_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (parsed?.username === SAMPLE_CREDENTIALS.username) {
        return { username: parsed.username }
      }
    }
  } catch { /* corrupted */ }
  return null
}

const AuthContext = createContext<AuthStore | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser(loadInitialUser())
    setLoading(false)
  }, [])

  const login = useCallback((username: string, password: string): boolean => {
    if (
      username === SAMPLE_CREDENTIALS.username &&
      password === SAMPLE_CREDENTIALS.password
    ) {
      const u = { username }
      setUser(u)
      try {
        localStorage.setItem(AUTH_KEY, JSON.stringify(u))
      } catch { /* ignore */ }
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    try {
      localStorage.removeItem(AUTH_KEY)
    } catch { /* ignore */ }
  }, [])

  const value = useMemo<AuthStore>(
    () => ({
      user,
      isAuthenticated: !!user,
      loading,
      login,
      logout,
    }),
    [user, loading, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthStore {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an <AuthProvider>')
  return ctx
}
