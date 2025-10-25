'use client'

import { motion } from 'framer-motion'

interface SignProps {
  children: React.ReactNode
  className?: string
}

export function Sign({ children, className = '' }: SignProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ rotate: -2, scale: 0.8 }}
      animate={{ rotate: -2, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-xl">
        {/* Sign post */}
        <rect x="95" y="80" width="10" height="40" fill="#8B6E53" />
        
        {/* Sign board */}
        <rect x="20" y="20" width="160" height="80" rx="8" fill="#8B6E53" />
        <rect x="25" y="25" width="150" height="70" rx="6" fill="#A68B5B" />
        
        {/* Wood grain lines */}
        <line x1="30" y1="35" x2="170" y2="35" stroke="#654321" strokeWidth="1" opacity="0.3" />
        <line x1="30" y1="45" x2="170" y2="45" stroke="#654321" strokeWidth="1" opacity="0.3" />
        <line x1="30" y1="55" x2="170" y2="55" stroke="#654321" strokeWidth="1" opacity="0.3" />
        <line x1="30" y1="65" x2="170" y2="65" stroke="#654321" strokeWidth="1" opacity="0.3" />
        <line x1="30" y1="75" x2="170" y2="75" stroke="#654321" strokeWidth="1" opacity="0.3" />
        <line x1="30" y1="85" x2="170" y2="85" stroke="#654321" strokeWidth="1" opacity="0.3" />
        
        {/* Nail holes */}
        <circle cx="40" cy="40" r="1" fill="#654321" opacity="0.5" />
        <circle cx="160" cy="40" r="1" fill="#654321" opacity="0.5" />
        <circle cx="40" cy="80" r="1" fill="#654321" opacity="0.5" />
        <circle cx="160" cy="80" r="1" fill="#654321" opacity="0.5" />
      </svg>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {children}
      </div>
    </motion.div>
  )
}
