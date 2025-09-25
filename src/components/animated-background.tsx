"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Light Mode Background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-orange-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-300/20 to-teal-400/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-purple-300/30 animate-pulse"></div>
      </div>

      {/* Dark Mode Background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/30 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-teal-600/15 to-cyan-600/15 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 opacity-10">
          {['<>', '{}', '[]', '()', '&&', '||', '=>'].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-blue-400 font-mono text-xl animate-float"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Circuit-like Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L50 50 L50 0" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-500"/>
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-blue-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
    </div>
  )
}