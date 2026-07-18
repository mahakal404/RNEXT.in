"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useTransform, MotionValue } from 'framer-motion';
import { Laptop } from './Laptop';
import { Tablet } from './Tablet';
import { Phone } from './Phone';
import { HERO_ECOSYSTEMS, TransitionPhase, GlobalEvent } from '../../../lib/hero-ecosystems';

interface HeroVisualProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

export function HeroVisual({ mouseX, mouseY }: HeroVisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const safeMouseX = mouseX || new MotionValue(0);
  const safeMouseY = mouseY || new MotionValue(0);

  // Parallax mappings (Desktop least, Tablet medium, Phone most)
  const desktopX = useTransform(safeMouseX, [-1, 1], [-10, 10]);
  const desktopY = useTransform(safeMouseY, [-1, 1], [-10, 10]);
  
  const tabletX = useTransform(safeMouseX, [-1, 1], [-25, 25]);
  const tabletY = useTransform(safeMouseY, [-1, 1], [-25, 25]);
  
  const phoneX = useTransform(safeMouseX, [-1, 1], [-40, 40]);
  const phoneY = useTransform(safeMouseY, [-1, 1], [-40, 40]);

  // Centralized Engine State
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(true);
  const [ecoIndex, setEcoIndex] = useState(0);
  const [phase, setPhase] = useState<TransitionPhase>('entering');
  const [activeEvent, setActiveEvent] = useState<GlobalEvent | undefined>();
  const containerRef = useRef<HTMLDivElement>(null);

  const ecosystem = HERO_ECOSYSTEMS[ecoIndex];
  const isPaused = !inView;

  // 1. Mount & Observer
  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    // After 2.5s initial enter, go idle
    const initTimer = setTimeout(() => setPhase('idle'), 2500);

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.1 });
    
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      clearTimeout(initTimer);
      observer.disconnect();
    };
  }, []);

  // 2. The Ecosystem Transition Engine
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let timeout3: NodeJS.Timeout;
    let timeout4: NodeJS.Timeout;

    // Cycle every 18 seconds for maximum appreciation
    const interval = setInterval(() => {
      // 1. Reflection Sweep
      setPhase('sweep');
      
      // 2. Fade out current UI
      timeout1 = setTimeout(() => setPhase('fading'), 1500);

      // 3. Show Skeleton & Swap Data
      timeout2 = setTimeout(() => {
        setEcoIndex(prev => (prev + 1) % HERO_ECOSYSTEMS.length);
        setPhase('skeleton');
      }, 2000);

      // 4. Enter new UI
      timeout3 = setTimeout(() => setPhase('entering'), 2800);

      // 5. Back to idle
      timeout4 = setTimeout(() => setPhase('idle'), 4500);

    }, 18000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, [isPaused, shouldReduceMotion]);

  // 3. The Random Event Engine
  useEffect(() => {
    // Only fire events when idle and visible
    if (isPaused || shouldReduceMotion || phase !== 'idle' || activeEvent) return;

    const timeout = setTimeout(() => {
      const events: GlobalEvent[] = [
        { id: Date.now().toString(), type: 'NEW_LEAD', message: 'New Lead Acquired' }
      ];
      setActiveEvent(events[0]);
      
      setTimeout(() => setActiveEvent(undefined), 3000);
    }, 8000 + Math.random() * 4000);

    return () => clearTimeout(timeout);
  }, [isPaused, shouldReduceMotion, phase, activeEvent]);

  const premiumEase: number[] = [0.16, 1, 0.3, 1];

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full lg:w-[50%] mx-auto mt-12 lg:mt-16 flex items-center justify-center"
      whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      
      {/* Ambient Breathing Glow (Dynamic based on ecosystem) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[100px] rounded-full pointer-events-none z-0 transition-colors duration-1000"
        style={{ backgroundColor: ecosystem.theme.primary }}
        animate={isPaused || shouldReduceMotion ? {} : { opacity: [0.15, 0.3, 0.15], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] blur-[100px] rounded-full pointer-events-none z-0 transition-colors duration-1000"
        style={{ backgroundColor: ecosystem.theme.secondary }}
        animate={isPaused || shouldReduceMotion ? {} : { opacity: [0.1, 0.25, 0.1], scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Tiny Background Particles */}
      {mounted && !shouldReduceMotion && !isPaused && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[
            { top: '35%', left: '25%', yEnd: -25, dur: 5.5, del: 1.2 },
            { top: '65%', left: '75%', yEnd: -35, dur: 7.0, del: 3.4 },
            { top: '45%', left: '55%', yEnd: -20, dur: 4.8, del: 0.5 },
            { top: '75%', left: '35%', yEnd: -40, dur: 6.2, del: 2.1 },
            { top: '25%', left: '65%', yEnd: -30, dur: 5.9, del: 4.0 },
            { top: '55%', left: '45%', yEnd: -22, dur: 4.5, del: 1.8 }
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full blur-[1px]"
              style={{ top: p.top, left: p.left }}
              animate={{
                y: [0, p.yEnd, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.del
              }}
            />
          ))}
        </div>
      )}

      {/* Container to handle proportional scaling */}
      <div className="relative w-full max-w-[800px] aspect-[2/1] flex items-center justify-center">
        
        {/* Desktop (Center, Base Layer) */}
        <motion.div 
          className="absolute z-10 w-[75%] top-[10%] left-1/2 ml-[-37.5%]"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Parallax Wrapper */}
          <motion.div style={{ x: desktopX, y: desktopY }} className="w-full h-full relative">
            {/* Floating Wrapper */}
            <motion.div
              animate={isPaused || shouldReduceMotion ? {} : { y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* Dynamic Shadow */}
              <motion.div 
                className="absolute inset-0 rounded-2xl pointer-events-none transition-colors duration-1000"
                style={{ boxShadow: `0 0 80px ${ecosystem.theme.primaryGlow}` }}
                animate={isPaused || shouldReduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <Laptop 
                ecosystem={ecosystem} 
                phase={phase} 
                activeEvent={activeEvent}
                isPaused={isPaused}
                shouldReduceMotion={!!shouldReduceMotion}
              />
              {/* Center Vertical Decorative Line */}
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[1px] h-[300px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none -z-10"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tablet (Left, Overlapping) */}
        <motion.div 
          className="absolute z-20 w-[32%] bottom-[-5%] left-[5%]"
          initial={{ opacity: 0, y: 40, x: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Parallax Wrapper */}
          <motion.div style={{ x: tabletX, y: tabletY }} className="w-full h-full relative">
            {/* Floating + Horizontal Drift Wrapper */}
            <motion.div
              animate={isPaused || shouldReduceMotion ? {} : { y: [8, -8, 8], x: [-3, 3, -3] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* Dynamic Shadow */}
              <motion.div 
                className="absolute inset-0 shadow-[-15px_15px_40px_rgba(0,0,0,0.5)] rounded-2xl pointer-events-none"
                animate={isPaused || shouldReduceMotion ? {} : { opacity: [1, 0.6, 1] }} 
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <Tablet 
                ecosystem={ecosystem} 
                phase={phase} 
                activeEvent={activeEvent}
                isPaused={isPaused}
                shouldReduceMotion={!!shouldReduceMotion}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Phone (Right, Overlapping) */}
        <motion.div 
          className="absolute z-30 w-[14%] bottom-[-10%] right-[12%]"
          initial={{ opacity: 0, y: 40, x: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Parallax Wrapper */}
          <motion.div style={{ x: phoneX, y: phoneY }} className="w-full h-full relative">
            {/* Floating + Attention Rotation Wrapper */}
            <motion.div
              animate={isPaused || shouldReduceMotion ? {} : { 
                y: [-12, 12, -12],
                rotate: [0, 0, 0, 0, 2, -1, 0, 0] 
              }}
              transition={{ 
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-full h-full relative origin-bottom"
            >
              {/* Dynamic Shadow */}
              <motion.div 
                className="absolute inset-0 shadow-[15px_15px_40px_rgba(0,0,0,0.5)] rounded-xl pointer-events-none"
                animate={isPaused || shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <Phone 
                ecosystem={ecosystem} 
                phase={phase} 
                activeEvent={activeEvent}
                isPaused={isPaused}
                shouldReduceMotion={!!shouldReduceMotion}
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
