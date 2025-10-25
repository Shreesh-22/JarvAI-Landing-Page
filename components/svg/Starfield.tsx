'use client'

import { useParallax } from '@/lib/useParallax'

interface StarfieldProps {
  className?: string
}

export function Starfield({ className = '' }: StarfieldProps) {
  const slowOffset = useParallax(0.2)
  const mediumOffset = useParallax(0.5)
  const fastOffset = useParallax(0.8)

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Slow layer - distant stars */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${slowOffset}px)` }}
      >
        <svg width="100%" height="100%" className="animate-twinkle">
          <defs>
            <pattern id="stars-slow" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="30" r="1" fill="#F6C64E" opacity="0.6" />
              <circle cx="80" cy="70" r="0.5" fill="#F6C64E" opacity="0.4" />
              <circle cx="50" cy="20" r="1.5" fill="#F6C64E" opacity="0.8" />
              <circle cx="90" cy="40" r="0.8" fill="#F6C64E" opacity="0.5" />
              <circle cx="30" cy="80" r="1" fill="#F6C64E" opacity="0.7" />
              <circle cx="70" cy="10" r="0.6" fill="#F6C64E" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars-slow)" />
        </svg>
      </div>

      {/* Medium layer - mid-distance stars */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ transform: `translateY(${mediumOffset}px)` }}
      >
        <svg width="100%" height="100%" className="animate-twinkle" style={{ animationDelay: '1s' }}>
          <defs>
            <pattern id="stars-medium" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="25" r="1.2" fill="#F6C64E" opacity="0.8" />
              <circle cx="65" cy="45" r="0.8" fill="#F6C64E" opacity="0.6" />
              <circle cx="40" cy="15" r="1.8" fill="#F6C64E" opacity="0.9" />
              <circle cx="75" cy="65" r="1" fill="#F6C64E" opacity="0.7" />
              <circle cx="25" cy="70" r="1.3" fill="#F6C64E" opacity="0.8" />
              <circle cx="55" cy="35" r="0.9" fill="#F6C64E" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars-medium)" />
        </svg>
      </div>

      {/* Fast layer - close stars */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{ transform: `translateY(${fastOffset}px)` }}
      >
        <svg width="100%" height="100%" className="animate-twinkle" style={{ animationDelay: '2s' }}>
          <defs>
            <pattern id="stars-fast" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="20" r="1.5" fill="#F6C64E" opacity="0.9" />
              <circle cx="50" cy="35" r="1" fill="#F6C64E" opacity="0.8" />
              <circle cx="30" cy="10" r="2" fill="#F6C64E" opacity="1" />
              <circle cx="45" cy="55" r="1.2" fill="#F6C64E" opacity="0.7" />
              <circle cx="20" cy="45" r="1.8" fill="#F6C64E" opacity="0.9" />
              <circle cx="40" cy="25" r="1.1" fill="#F6C64E" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars-fast)" />
        </svg>
      </div>
    </div>
  )
}
