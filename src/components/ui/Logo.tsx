"use client";

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface LogoProps {
  className?: string;
}

// Custom Geometry Data for the letters
const LETTER_R = "M0 0 H12 C16.4183 0 20 3.58172 20 8 C20 12.4183 16.4183 16 12 16 H4 V24 H0 V0 Z M4 4 V12 H12 C14.2091 12 16 10.2091 16 8 C16 5.79086 14.2091 4 12 4 H4 Z";
const LEG_R = "M9 16 L16 24 H21 L14 16 Z";
const LETTER_N_L = "M26 0 H30 V24 H26 Z";
const LETTER_N_R = "M42 0 H46 V24 H42 Z";
const LETTER_N_D = "M26 0 H32 L46 24 H40 Z";
const LETTER_E_1 = "M54 0 H58 V24 H54 Z";
const LETTER_E_2 = "M58 0 H68 V4 H58 Z";
const LETTER_E_3 = "M58 10 H66 V14 H58 Z";
const LETTER_E_4 = "M58 20 H68 V24 H58 Z";
const LETTER_X_L = "M76 0 H81 L87 12 L81 24 H76 L82 12 Z";
const LETTER_X_R = "M94 0 H89 L83 12 L89 24 H94 L88 12 Z";
const LETTER_T_1 = "M98 0 H114 V4 H98 Z";
const LETTER_T_2 = "M104 4 H108 V24 H104 Z";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const letterVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(4px)', y: 2 },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }
  }
};

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.6 }
  }
};

/**
 * LogoWordmark: The full "RNEXT." premium SVG wordmark.
 */
export function LogoWordmark({ className = "" }: LogoProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      className={`group relative flex items-center cursor-pointer ${className}`}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate="visible"
      variants={containerVariants}
      whileHover={{ filter: 'brightness(1.15)' }}
      transition={{ duration: 0.2 }}
    >
      <svg 
        viewBox="0 0 126 24" 
        className="h-6 w-auto fill-white" 
        role="img" 
        aria-label="RNEXT Logo"
      >
        <title>RNEXT</title>
        
        {/* R */}
        <motion.g variants={letterVariants}>
          <path fillRule="evenodd" clipRule="evenodd" d={LETTER_R} />
          <path d={LEG_R} />
        </motion.g>

        {/* N */}
        <motion.g variants={letterVariants}>
          <path d={LETTER_N_L} />
          <path d={LETTER_N_D} />
          <path d={LETTER_N_R} />
        </motion.g>

        {/* E */}
        <motion.g variants={letterVariants}>
          <path d={LETTER_E_1} />
          <path d={LETTER_E_2} />
          <path d={LETTER_E_3} />
          <path d={LETTER_E_4} />
        </motion.g>

        {/* X */}
        <motion.g variants={letterVariants}>
          <path d={LETTER_X_L} />
          <path d={LETTER_X_R} />
        </motion.g>

        {/* T */}
        <motion.g variants={letterVariants}>
          <path d={LETTER_T_1} />
          <path d={LETTER_T_2} />
        </motion.g>

        {/* Cyan Dot */}
        <motion.circle 
          cx="121" 
          cy="21" 
          r="3" 
          fill="#00D4FF" 
          variants={dotVariants}
          className="transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
        />
      </svg>
    </motion.div>
  );
}

/**
 * LogoMark: A slightly more compact version or just the core brand identity without the full wordmark text if needed.
 * For RNEXT, LogoMark is similar to LogoIcon but styled for inline UI elements.
 */
export function LogoMark({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 24 24" className="h-full w-full fill-white" role="img" aria-label="RNEXT Mark">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 0 H14 C18.4183 0 22 3.58172 22 8 C22 12.4183 18.4183 16 14 16 H6 V24 H2 V0 Z M6 4 V12 H14 C16.2091 12 18 10.2091 18 8 C18 5.79086 16.2091 4 14 4 H6 Z" />
        <path d="M11 16 L18 24 H23 L16 16 Z" />
        <circle cx="21" cy="21" r="3" fill="#00D4FF" />
      </svg>
    </div>
  );
}

/**
 * LogoIcon: Standalone 'R' monogram exactly matching the favicon.
 */
export function LogoIcon({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-full fill-white" role="img" aria-label="RNEXT Icon">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 14H36C42.6274 14 48 19.3726 48 26C48 32.6274 42.6274 38 36 38H24V50H16V14ZM24 22V30H36C38.2091 30 40 28.2091 40 26C40 23.7909 38.2091 22 36 22H24Z" />
        <path d="M33 38L43 50H53L41 38H33Z" />
        <circle cx="58" cy="46" r="4" fill="#00D4FF" />
      </svg>
    </div>
  );
}
