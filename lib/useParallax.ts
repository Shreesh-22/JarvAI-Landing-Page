'use client'

import { useEffect, useState } from 'react'

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])

  return offset
}

export function useParallaxElement(speed: number = 0.5) {
  const [element, setElement] = useState<HTMLElement | null>(null)
  const offset = useParallax(speed)

  useEffect(() => {
    if (element) {
      element.style.setProperty('--parallax-offset', `${offset}px`)
    }
  }, [element, offset])

  return setElement
}
