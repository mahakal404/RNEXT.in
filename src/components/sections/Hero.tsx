"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useVelocity, useSpring, useAnimation, useMotionValue } from 'framer-motion';
import { HeroBackground } from '../ui/HeroBackground';
import { HeroVisual } from '../ui/mockups/HeroVisual';
import { SectionHeader } from '../ui/SectionHeader';
import { useCinematicScroll, variants, floating, useMotionUtilities, stagger, hover } from '../../lib/motion';
import { useIntroStore } from '../../store/introStore';

export function Hero() {
  const introState = useIntroStore();
  const shouldReveal = introState === 'REVEALING_HERO' || introState === 'COMPLETED';
  
  const scrollFX = useCinematicScroll();
  const { withReducedMotion, shouldReduceMotion } = useMotionUtilities();

  // Mouse Parallax MotionValues
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Premium ultra-smooth easing for the parallax
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20, mass: 1.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 30, damping: 20, mass: 1.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    // Normalize to -1 to 1 based on viewport
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });

  // Word Reveal variants for the main heading
  const wordReveal = {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: variants.blurReveal.transition }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <HeroBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />

      {/* Background Soft Glows for Premium Vibe */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <motion.div 
          {...withReducedMotion({
            animate: floating.breathingScale.animate,
            transition: floating.breathingScale.transition
          })}
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px]"
        />
        <motion.div 
          {...withReducedMotion({
            animate: floating.breathingScale.animate,
            transition: { ...floating.breathingScale.transition, delay: 1 }
          })}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] py-20 relative z-10">
        
        {/* Text Container (Animated on Scroll via Parallax) */}
        <motion.div 
          className="w-full flex flex-col items-center text-center mt-[-40px]"
          style={{ opacity: scrollFX.textOpacity, scale: scrollFX.textScale, y: scrollFX.textY }}
        >
          {/* Section Header */}
          <motion.div 
            className="mb-8 relative z-50 overflow-hidden"
            {...withReducedMotion(variants.maskReveal)}
          >
             <SectionHeader number="01" label="HOME" alignment="center" />
          </motion.div>

          {/* Heading - Word Reveal Stagger */}
          <motion.h1 
            className="text-display-xl text-white mb-10 w-full max-w-3xl mx-auto leading-[1.2] md:leading-[1.25]"
            variants={stagger.slow.variants}
            initial="initial"
            animate={shouldReveal ? "animate" : "initial"}
          >
            <span className="inline-block pb-1 overflow-hidden">
              <motion.span className="inline-block" variants={wordReveal}>We </motion.span>
              <motion.span className="inline-block" variants={wordReveal}>Build </motion.span>
            </span>
            <br className="hidden md:block" />
            <span className="inline-block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-300 overflow-hidden">
              <motion.span className="inline-block" variants={wordReveal}>Smart </motion.span>
              <motion.span className="inline-block" variants={wordReveal}>Digital </motion.span>
            </span>
            <br className="hidden md:block" />
            <span className="inline-block pb-1 overflow-hidden">
              <motion.span className="inline-block" variants={wordReveal}>Experiences</motion.span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-text-secondary mb-12 w-full max-w-[550px] mx-auto leading-relaxed md:leading-loose font-medium"
            variants={shouldReduceMotion ? undefined : variants.blurReveal}
            initial="initial"
            animate={shouldReveal ? "animate" : "initial"}
            transition={{ ...variants.blurReveal.transition, delay: 0.6 }}
          >
            Websites, Web Apps & AI Solutions for Modern Businesses. We transform complex problems into elegant digital products.
          </motion.p>

          {/* CTA Buttons - Premium Hover Springs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-[12px] lg:gap-[16px] w-full sm:w-auto"
            variants={shouldReduceMotion ? undefined : variants.fade}
            initial="initial"
            animate={shouldReveal ? "animate" : "initial"}
            transition={{ ...variants.fade.transition, delay: 0.9 }}
          >
            <motion.div {...hover.button}>
              <Link href="#projects" className="btn-base btn-primary w-full sm:w-auto h-[52px] px-8 text-btn focus-visible:outline-none transition-shadow duration-300 ease-out hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                View Projects
              </Link>
            </motion.div>
            <motion.div {...hover.button}>
              <Link href="#contact" className="btn-base btn-secondary w-full sm:w-auto h-[52px] px-8 text-btn focus-visible:outline-none transition-colors duration-300 ease-out hover:bg-white/5">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Hero Visual Showcase (Premium Parallax + Inner Interactions) */}
        <motion.div
          className="w-full flex justify-center mt-8"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
          animate={shouldReveal ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          style={{ scale: scrollFX.deviceScale, y: scrollFX.deviceY }}
        >
          {/* We pass the motion values down for precise parallax */}
          <HeroVisual mouseX={smoothMouseX} mouseY={smoothMouseY} />
        </motion.div>
        
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-text-muted cursor-default"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={shouldReveal ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-[40px] bg-border-active"></div>
      </motion.div>

    </section>
  );
}
