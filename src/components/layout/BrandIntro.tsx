"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from '../ui/BrandLogo';
import { useIntroStore, introStore } from '../../store/introStore';
import { useMotionUtilities } from '../../lib/motion';

export function BrandIntro() {
  const introState = useIntroStore();
  const { shouldReduceMotion } = useMotionUtilities();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    introStore.initialize();
    setTimeout(() => setMounted(true), 0);
  }, []);

  // Only render if we are mounted and not completed
  if (!mounted || introState === 'COMPLETED' || shouldReduceMotion) {
    return null;
  }

  const handleSequenceComplete = () => {
    // 1. Logo construction and pulse finished.
    // 2. Start moving the logo to the Navbar (triggers layoutId morph)
    introStore.setState('TRANSITIONING');

    // 3. After the logo is ~70-80% of the way to the navbar (e.g. 500ms into a 700ms transition), reveal the Hero.
    setTimeout(() => {
      introStore.setState('REVEALING_HERO');
    }, 500);

    // 4. Finally, mark as fully completed so the overlay unmounts entirely and user can interact
    setTimeout(() => {
      introStore.markAsPlayed();
    }, 800);
  };

  const isTransitioning = introState === 'TRANSITIONING' || introState === 'REVEALING_HERO';

  return (
    <AnimatePresence>
      {introState === 'PENDING' && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12, ease: "linear" }}
          className="fixed inset-0 z-[100] flex flex-col items-center pointer-events-auto"
          // We don't want a solid background. The user requested the Hero background to be visible.
          // We just prevent clicks during the intro (pointer-events-auto on a transparent overlay).
        >
          {/* Logo container at 45% viewport height */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            {!isTransitioning && (
              <BrandLogo
                size="md" // 36px, exactly 1.5x the Navbar logo (24px)
                layoutId="rnext-brand-logo"
                animateSequence={true}
                onSequenceComplete={handleSequenceComplete}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
