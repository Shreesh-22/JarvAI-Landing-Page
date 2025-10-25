'use client'

import { motion } from 'framer-motion'

interface TumbleweedProps {
  className?: string
}

export function Tumbleweed({ className = '' }: TumbleweedProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        x: [0, 100, 0],
        rotate: [0, 360, 720],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" className="drop-shadow-lg">
        {/* Tumbleweed body */}
        <circle cx="20" cy="20" r="18" fill="#8B6E53" opacity="0.8" />
        
        {/* Branches */}
        <path d="M20,2 Q15,10 20,18 Q25,10 20,2" stroke="#654321" strokeWidth="2" fill="none" />
        <path d="M38,20 Q30,15 22,20 Q30,25 38,20" stroke="#654321" strokeWidth="2" fill="none" />
        <path d="M20,38 Q15,30 20,22 Q25,30 20,38" stroke="#654321" strokeWidth="2" fill="none" />
        <path d="M2,20 Q10,15 18,20 Q10,25 2,20" stroke="#654321" strokeWidth="2" fill="none" />
        
        {/* Diagonal branches */}
        <path d="M5,5 Q12,12 19,19 Q12,26 5,33" stroke="#654321" strokeWidth="1.5" fill="none" />
        <path d="M35,5 Q28,12 21,19 Q28,26 35,33" stroke="#654321" strokeWidth="1.5" fill="none" />
        <path d="M5,35 Q12,28 19,21 Q12,14 5,7" stroke="#654321" strokeWidth="1.5" fill="none" />
        <path d="M35,35 Q28,28 21,21 Q28,14 35,7" stroke="#654321" strokeWidth="1.5" fill="none" />
      </svg>
    </motion.div>
  )
}
