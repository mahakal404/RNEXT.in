"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface RNextLogoProps {
  /** Size of the logo (width and height). If not provided, it will fill its container. */
  size?: number | string;
  /** Additional Tailwind classes for the wrapper */
  className?: string;
  /** Color of the primary 'R' shape. Defaults to #FFFFFF */
  color?: string;
  /** Enable premium animations and hover effects */
  animated?: boolean;
}

export function RNextLogo({
  size,
  className = "",
  color = "#FFFFFF",
  animated = false
}: RNextLogoProps) {
  // If size is provided, we set inline width and height, else we rely on className
  const style = size ? { width: size, height: size } : undefined;

  // Premium, subtle entrance and hover animations
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
    hover: { 
      scale: 1.02,
      filter: 'brightness(1.05) drop-shadow(0px 4px 12px rgba(0,212,255,0.15))',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Pulse effect specifically for the Cyan N
  const pulseVariants: Variants = {
    initial: { filter: 'drop-shadow(0px 0px 0px rgba(0, 212, 255, 0))' },
    animate: {
      filter: [
        'drop-shadow(0px 0px 0px rgba(0, 212, 255, 0))',
        'drop-shadow(0px 0px 8px rgba(0, 212, 255, 0.4))',
        'drop-shadow(0px 0px 0px rgba(0, 212, 255, 0))'
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 3.5,
        ease: "easeInOut"
      }
    }
  };

  // Mathematically perfect geometric SVG paths
  // Designed on a strict 180x180 grid for absolute symmetry and proportion
  const R_PATH = "M 20 150 V 50 L 40 30 H 80 L 100 50 V 90 H 40 V 150 Z M 40 50 H 80 V 70 H 40 Z";
  const N_PATH = "M 80 90 L 140 150 H 160 V 50 L 140 30 V 130 L 100 90 Z";

  const content = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
      role="img"
      aria-label="RNEXT Logo"
    >
      <path 
        d={R_PATH} 
        fill={color} 
        fillRule="evenodd" 
        clipRule="evenodd" 
      />
      {animated ? (
        <motion.path 
          d={N_PATH} 
          fill="#00D4FF" 
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        />
      ) : (
        <path 
          d={N_PATH} 
          fill="#00D4FF" 
        />
      )}
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        className={`relative inline-flex items-center justify-center ${className}`}
        style={style}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={style}
    >
      {content}
    </div>
  );
}
