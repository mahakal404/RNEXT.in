"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { HeroBackground } from '../ui/HeroBackground';
import { HeroVisual } from '../ui/mockups/HeroVisual';
import { getHeroAnimations, useCinematicScroll } from '../../lib/animations';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const animations = getHeroAnimations(shouldReduceMotion);
  const scrollFX = useCinematicScroll();

  return (
    <section className="relative w-full min-h-screen flex flex-col text-white overflow-hidden">
      <HeroBackground />

      {/* Background Soft Glows for Premium Vibe */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] py-20 relative z-10">
        
        {/* Text Container (Animated on Scroll) */}
        <motion.div 
          className="w-full flex flex-col items-center text-center mt-[-40px]"
          style={{ opacity: scrollFX.textOpacity, scale: scrollFX.textScale, y: scrollFX.textY }}
        >
          
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-1.5 mb-12 rounded-full border border-border-hover bg-bg-elevated text-caption text-text-secondary uppercase tracking-widest"
            initial="initial"
            animate="animate"
            variants={animations.badge}
            aria-hidden="true"
          >
            Welcome to RNEXT
          </motion.div>

          {/* Heading */}
          <h1 className="text-display-xl text-white mb-10 w-full max-w-3xl mx-auto leading-[1.2] md:leading-[1.25]">
            <motion.span initial="initial" animate="animate" variants={animations.headingLine(0)} className="inline-block pb-1">We Build </motion.span>
            <br className="hidden md:block" />
            <motion.span initial="initial" animate="animate" variants={animations.headingLine(1)} className="inline-block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-300">Smart Digital </motion.span>
            <br className="hidden md:block" />
            <motion.span initial="initial" animate="animate" variants={animations.headingLine(2)} className="inline-block pb-1">Experiences</motion.span>
          </h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-text-secondary mb-12 w-full max-w-[550px] mx-auto leading-relaxed md:leading-loose font-medium"
            initial="initial"
            animate="animate"
            variants={animations.description}
          >
            Websites, Web Apps & AI Solutions for Modern Businesses. We transform complex problems into elegant digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-[12px] lg:gap-[16px] w-full sm:w-auto"
            initial="initial"
            animate="animate"
            variants={animations.buttons}
          >
            <Link href="#projects" className="btn-base btn-primary w-full sm:w-auto h-[52px] px-8 text-btn focus-visible:outline-none hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all duration-300 ease-out">
              View Projects
            </Link>
            <Link href="#contact" className="btn-base btn-secondary w-full sm:w-auto h-[52px] px-8 text-btn focus-visible:outline-none hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300 ease-out">
              Get In Touch
            </Link>
          </motion.div>

        </motion.div>

        {/* Hero Visual Showcase (Animated on Scroll Independently for Parallax) */}
        <motion.div
          className="w-full flex justify-center"
          initial="initial"
          animate="animate"
          variants={animations.deviceShowcase}
          style={{ scale: scrollFX.deviceScale, y: scrollFX.deviceY }}
        >
          <HeroVisual />
        </motion.div>
        
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-text-muted transition-all duration-300 hover:text-white hover:-translate-y-1 cursor-default"
        initial="initial"
        animate="animate"
        variants={animations.scrollIndicator}
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-[40px] bg-border-active"></div>
      </motion.div>

    </section>
  );
}
