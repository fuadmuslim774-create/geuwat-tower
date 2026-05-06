'use client'

import React from 'react'

interface LoginButtonProps {
  isLoading: boolean
  isEnabled: boolean
}

export const LoginButton: React.FC<LoginButtonProps> = ({ isLoading, isEnabled }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        type="submit"
        disabled={!isEnabled || isLoading}
        className={`relative px-8 py-3 font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 transform ${
          isEnabled && !isLoading
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95'
            : 'bg-slate-700 text-slate-400 cursor-not-allowed'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Authenticating...</span>
          </div>
        ) : (
          <span>Secure Login</span>
        )}
      </button>
    </div>
  )
}
