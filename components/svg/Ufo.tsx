'use client'

import { motion } from 'framer-motion'

interface UfoProps {
  className?: string
}

export function Ufo({ className = '' }: UfoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [-5, 5, -5],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="120" height="80" viewBox="0 0 120 80" className="drop-shadow-lg">
        {/* UFO Body */}
        <ellipse cx="60" cy="45" rx="50" ry="20" fill="#8B6E53" />
        <ellipse cx="60" cy="40" rx="45" ry="15" fill="#A68B5B" />
        
        {/* Dome */}
        <ellipse cx="60" cy="35" rx="25" ry="12" fill="#F4E2A3" opacity="0.8" />
        <ellipse cx="60" cy="32" rx="20" ry="8" fill="#FCEFD0" opacity="0.9" />
        
        {/* Lights */}
        <circle cx="45" cy="35" r="2" fill="#F6C64E" className="animate-twinkle" />
        <circle cx="60" cy="35" r="2" fill="#F6C64E" className="animate-twinkle" style={{ animationDelay: '0.5s' }} />
        <circle cx="75" cy="35" r="2" fill="#F6C64E" className="animate-twinkle" style={{ animationDelay: '1s' }} />
        
        {/* Tractor beam */}
        <defs>
          <linearGradient id="beam" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4E2A3" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F6C64E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F6C64E" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="55" y="50" width="10" height="200" fill="url(#beam)" opacity="0.6" />
      </svg>
    </motion.div>
  )
}
