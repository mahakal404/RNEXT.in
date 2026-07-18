import React, { useEffect, useState } from 'react';
import { Orbitron } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import { useMotionUtilities } from '../../lib/motion';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['800'],
});

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  bgColor?: string;
  layoutId?: string;
  animateSequence?: boolean;
  onSequenceComplete?: () => void;
}

const sizeClasses = {
  sm: 'text-2xl',       // 24px
  md: 'text-4xl',       // 36px
  lg: 'text-6xl',       // 60px
  xl: 'text-[100px]',   // 100px
  custom: '',           // Use className to set your own text-[] size
};

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  bgColor = '#030811',
  layoutId,
  animateSequence = false,
  onSequenceComplete
}) => {
  const { shouldReduceMotion } = useMotionUtilities();
  const controls = useAnimation();
  const pulseControls = useAnimation();
  const [sequenceDone, setSequenceDone] = useState(false);

  useEffect(() => {
    if (!animateSequence || shouldReduceMotion) {
      if (onSequenceComplete) onSequenceComplete();
      return;
    }

    const runSequence = async () => {
      // Base delay
      await new Promise(resolve => setTimeout(resolve, 100));

      // Individual letter reveal timings: R(180), N(110), E(90), X(90), T(90)
      await controls.start("r", { duration: 0.18, ease: "easeOut" });
      await controls.start("n", { duration: 0.11, ease: "easeOut" });
      await controls.start("e", { duration: 0.09, ease: "easeOut" });
      await controls.start("x", { duration: 0.09, ease: "easeOut" });
      await controls.start("t", { duration: 0.09, ease: "easeOut" });

      // Subtle cyan pulse and scale spring
      await pulseControls.start("pulse");
      
      setSequenceDone(true);
      if (onSequenceComplete) onSequenceComplete();
    };

    runSequence();
  }, [animateSequence, shouldReduceMotion, controls, pulseControls, onSequenceComplete]);

  // If not animating the sequence, everything is instantly visible
  const letterVariants = {
    hidden: animateSequence && !shouldReduceMotion ? { opacity: 0, y: 5, filter: 'blur(4px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' },
    r: { opacity: 1, y: 0, filter: 'blur(0px)' },
    n: { opacity: 1, y: 0, filter: 'blur(0px)' },
    e: { opacity: 1, y: 0, filter: 'blur(0px)' },
    x: { opacity: 1, y: 0, filter: 'blur(0px)' },
    t: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  return (
    <motion.div
      layoutId={layoutId}
      className={`${orbitron.className} flex items-center tracking-[0.04em] ${sizeClasses[size]} font-extrabold relative ${className}`}
      animate={pulseControls}
      variants={{
        pulse: { 
          scale: [1, 1.03, 1],
          transition: { type: "spring", stiffness: 400, damping: 15 }
        }
      }}
    >
      {/* 
        Single Cyan Glow Pulse.
        Runs once across the letters via background positioning or opacity flash.
      */}
      {animateSequence && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary to-transparent blur-[8px] mix-blend-screen pointer-events-none z-10"
          initial={{ opacity: 0, x: '-100%' }}
          animate={pulseControls}
          variants={{
            pulse: {
              opacity: [0, 0.4, 0],
              x: ['-50%', '150%'],
              transition: { duration: 0.6, ease: "easeInOut" }
            }
          }}
        />
      )}

      <motion.span 
        className="relative text-[#00f3ff] mr-[0.05em] [text-shadow:0_0_10px_rgba(0,243,255,0.8),0_0_30px_rgba(0,243,255,0.4)] inline-block"
        initial="hidden"
        animate={controls}
        variants={letterVariants}
      >
        R
      </motion.span>
      
      <span className="text-white [text-shadow:0_0_10px_rgba(0,243,255,0.6),0_0_30px_rgba(0,243,255,0.3)] flex">
        {['N', 'E', 'X', 'T'].map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: letterVariants.hidden,
              n: letter === 'N' ? letterVariants.n : letterVariants.hidden,
              e: letter === 'E' ? letterVariants.e : (letter === 'N' ? letterVariants.n : letterVariants.hidden),
              x: letter === 'X' ? letterVariants.x : (['N', 'E'].includes(letter) ? letterVariants.n : letterVariants.hidden),
              t: letter === 'T' ? letterVariants.t : (['N', 'E', 'X'].includes(letter) ? letterVariants.n : letterVariants.hidden),
            }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
};
