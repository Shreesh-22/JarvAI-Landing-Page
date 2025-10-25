'use client'

import { useParallax } from '@/lib/useParallax'

interface DesertLayersProps {
  className?: string
}

export function DesertLayers({ className = '' }: DesertLayersProps) {
  const slowOffset = useParallax(0.1)
  const mediumOffset = useParallax(0.3)
  const fastOffset = useParallax(0.5)
  const fastestOffset = useParallax(0.7)

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Back layer - furthest dunes */}
      <div 
        className="absolute bottom-0 w-full h-32"
        style={{ transform: `translateY(${slowOffset}px)` }}
      >
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <path
            d="M0,120 Q200,80 400,100 T800,90 T1200,110 L1200,200 L0,200 Z"
            fill="#6E2019"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Mid-back layer */}
      <div 
        className="absolute bottom-0 w-full h-40"
        style={{ transform: `translateY(${mediumOffset}px)` }}
      >
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <path
            d="M0,140 Q300,100 600,120 T1200,110 L1200,200 L0,200 Z"
            fill="#A94222"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Mid-front layer */}
      <div 
        className="absolute bottom-0 w-full h-48"
        style={{ transform: `translateY(${fastOffset}px)` }}
      >
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <path
            d="M0,160 Q400,120 800,140 T1200,130 L1200,200 L0,200 Z"
            fill="#D87424"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Front layer - closest dunes */}
      <div 
        className="absolute bottom-0 w-full h-56"
        style={{ transform: `translateY(${fastestOffset}px)` }}
      >
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <path
            d="M0,180 Q500,140 1000,160 T1200,150 L1200,200 L0,200 Z"
            fill="#F5A623"
            opacity="1"
          />
        </svg>
      </div>
    </div>
  )
}
