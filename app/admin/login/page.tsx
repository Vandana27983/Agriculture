import type { Metadata } from 'next'
import { LoginClient } from './login-client'

export const metadata: Metadata = {
  title: 'Admin login',
}

export default function LoginPage() {
  return <LoginClient />
}
