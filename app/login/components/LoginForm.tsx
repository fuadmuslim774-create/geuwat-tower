'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from '@/lib/auth'
import { FormBackground } from './ui/FormBackground'
import { LoginHeader } from './ui/LoginHeader'
import { GearInputRow } from './form/GearInputRow'
import { LoginButton } from './form/LoginButton'

interface LoginFormProps {
  onLogin?: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const router = useRouter()
  
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [errorCode, setErrorCode] = React.useState<string | null>(null)
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  const [activationState, setActivationState] = React.useState({
    emailActive: false,
    passwordActive: false,
  })

  // Computed properties
  const isFullyActive = activationState.emailActive && activationState.passwordActive
  const isPartiallyActive = activationState.emailActive || activationState.passwordActive

  // Handlers
  const toggleEmailGear = () => {
    setActivationState((prev) => ({ ...prev, emailActive: !prev.emailActive }))
  }

  const togglePasswordGear = () => {
    setActivationState((prev) => ({
      ...prev,
      passwordActive: !prev.passwordActive,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errorMessage) {
      setErrorMessage(null)
      setErrorCode(null)
    }
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!isFullyActive) {
      setErrorMessage('Please activate both security gears first!')
      return
    }

    setIsLoading(true)
    setErrorMessage(null)
    setErrorCode(null)

    try {
      const result = await signIn(formData.email, formData.password)
      
      if (!result.success) {
        setErrorMessage(result.error || 'Login failed')
        setErrorCode((result as any).code || null)
        console.error('❌ Login error:', result.error)
        return
      }

      if (result.user) {
        console.log('✅ Login successful')
        onLogin?.()
        window.dispatchEvent(new Event('gt_auth_changed'))
        router.push('/')
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan saat masuk.'
      setErrorMessage(message)
      console.error('❌ Unexpected login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background Ambience */}
      <FormBackground isFullyActive={isFullyActive} />

      {/* Main Content Card */}
      <div className="relative p-2">
        {/* Header & Logo Section */}
        <LoginHeader
          isFullyActive={isFullyActive}
          isPartiallyActive={isPartiallyActive}
        />

        {/* Error Notification */}
        {errorMessage && (
          <div className={`mb-6 p-4 rounded-lg border ${
            errorCode === 'ACCOUNT_IN_USE' 
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-200' 
              : 'bg-red-500/10 border-red-500/30 text-red-200'
          }`}>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-xl mt-0.5">
                {errorCode === 'ACCOUNT_IN_USE' ? 'warning' : 'error'}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium leading-relaxed">{errorMessage}</p>
                {errorCode === 'ACCOUNT_IN_USE' && (
                  <p className="text-xs mt-2 opacity-80">
                    Tunggu beberapa saat atau gunakan akun lain.
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setErrorMessage(null)
                  setErrorCode(null)
                }}
                className="text-white/60 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Field - Right Gear (Pink/Fuchsia Theme) */}
          <GearInputRow
            variant="right"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            isActive={activationState.emailActive}
            onToggle={toggleEmailGear}
            onChange={handleChange}
            // Explicit Styling
            gearColorClass="text-fuchsia-500"
            containerShadowClass="shadow-fuchsia-500/5"
            innerGlowClass="bg-fuchsia-500/5"
          />

          {/* TO Text - Disappears when both gears are active */}
          {!isFullyActive && (
            <div className="flex items-center justify-center pointer-events-none">
              <span className="text-1.5xl font-bold tracking-widest uppercase text-cyan-400">
                TO
              </span>
            </div>
          )}

          {/* Password Field - Left Gear (Purple/Violet Theme) */}
          <GearInputRow
            variant="left"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            isActive={activationState.passwordActive}
            onToggle={togglePasswordGear}
            onChange={handleChange}
            // Explicit Styling
            gearColorClass="text-violet-500"
            containerShadowClass="shadow-violet-500/5"
            innerGlowClass="bg-violet-500/5"
          />

          {/* Submit Action */}
          <LoginButton isLoading={isLoading} isEnabled={isFullyActive} />
        </form>
      </div>
    </div>
  )
}
