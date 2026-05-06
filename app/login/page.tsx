'use client'

import { LoginForm } from './components/LoginForm'
import './styles/login.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    const user = getCurrentUser()
    if (user) router.replace('/')
  }, [router])

  return (
    <div className="auth-layout flex items-center justify-center relative overflow-hidden font-sans min-h-screen">
      <div className="login-background-layer" aria-hidden="true" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md px-4">
        <LoginForm />
        
        <div className="mt-8 text-center text-sm text-slate-400">
          <p className="mt-2 text-xs">Click the gears to activate form fields!</p>
        </div>
      </div>
    </div>
  )
}
