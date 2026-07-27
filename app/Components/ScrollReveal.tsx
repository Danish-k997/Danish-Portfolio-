'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}