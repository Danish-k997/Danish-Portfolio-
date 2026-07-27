'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element) // ek baar dikhne ke baad watch band — performance ke liye
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect() // cleanup — component unmount hone pe observer hata do, memory leak se bachne ke liye
  }, [])

  return { ref, isVisible }
}