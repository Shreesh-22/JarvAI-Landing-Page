'use client'

import { motion } from 'framer-motion'

interface CowProps {
  className?: string
}

export function Cow({ className = '' }: CowProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [-8, 8, -8],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="80" height="60" viewBox="0 0 80 60" className="drop-shadow-lg">
        {/* Cow body */}
        <ellipse cx="40" cy="35" rx="25" ry="18" fill="#FFFFFF" />
        
        {/* Cow spots */}
        <ellipse cx="30" cy="30" rx="6" ry="4" fill="#000000" />
        <ellipse cx="50" cy="25" rx="4" ry="3" fill="#000000" />
        <ellipse cx="35" cy="40" rx="5" ry="3" fill="#000000" />
        <ellipse cx="55" cy="35" rx="3" ry="2" fill="#000000" />
        
        {/* Cow head */}
        <ellipse cx="40" cy="20" rx="15" ry="12" fill="#FFFFFF" />
        
        {/* Ears */}
        <ellipse cx="30" cy="15" rx="3" ry="5" fill="#FFFFFF" />
        <ellipse cx="50" cy="15" rx="3" ry="5" fill="#FFFFFF" />
        <ellipse cx="30" cy="15" rx="1.5" ry="2.5" fill="#000000" />
        <ellipse cx="50" cy="15" rx="1.5" ry="2.5" fill="#000000" />
        
        {/* Eyes */}
        <circle cx="35" cy="18" r="2" fill="#000000" />
        <circle cx="45" cy="18" r="2" fill="#000000" />
        <circle cx="35" cy="17" r="1" fill="#FFFFFF" />
        <circle cx="45" cy="17" r="1" fill="#FFFFFF" />
        
        {/* Snout */}
        <ellipse cx="40" cy="25" rx="4" ry="3" fill="#FFB6C1" />
        <ellipse cx="38" cy="25" r="0.5" fill="#000000" />
        <ellipse cx="42" cy="25" r="0.5" fill="#000000" />
        
        {/* Legs */}
        <rect x="32" y="50" width="4" height="8" fill="#FFFFFF" />
        <rect x="38" y="50" width="4" height="8" fill="#FFFFFF" />
        <rect x="44" y="50" width="4" height="8" fill="#FFFFFF" />
        <rect x="50" y="50" width="4" height="8" fill="#FFFFFF" />
        
        {/* Tail */}
        <path d="M60,35 Q70,30 75,25" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="75" cy="25" rx="2" ry="1" fill="#000000" />
      </svg>
    </motion.div>
  )
}
