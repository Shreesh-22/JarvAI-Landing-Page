'use client'

import { motion } from 'framer-motion'

interface LassoProps {
  className?: string
}

export function Lasso({ className = '' }: LassoProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <svg width="200" height="100" viewBox="0 0 200 100" className="drop-shadow-lg">
        <defs>
          <pattern id="rope" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill="#E6C089" />
            <rect width="2" height="2" fill="#D2B48C" />
          </pattern>
        </defs>
        
        {/* Rope path */}
        <motion.path
          d="M20,80 Q40,60 60,70 Q80,80 100,75 Q120,70 140,75 Q160,80 180,75"
          stroke="url(#rope)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Lasso loop */}
        <motion.ellipse
          cx="100"
          cy="75"
          rx="25"
          ry="15"
          stroke="url(#rope)"
          strokeWidth="6"
          fill="none"
          strokeDasharray="8,4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  )
}
