"use client";

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, useTransform, MotionValue } from 'framer-motion';
import { Laptop } from './Laptop';
import { Tablet } from './Tablet';
import { Phone } from './Phone';

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

  // Premium Entrance Easing
  const premiumEase = [0.16, 1, 0.3, 1];

  // We only render particles on client to avoid hydration mismatches
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div 
      className="relative w-full lg:w-[50%] mx-auto mt-12 lg:mt-16 flex items-center justify-center"
      whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      
      {/* Ambient Breathing Glow (Cyan & Purple) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none z-0"
        animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none z-0"
        animate={shouldReduceMotion ? {} : { opacity: [0.3, 0.6, 0.3], scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Tiny Background Particles */}
      {mounted && !shouldReduceMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full blur-[1px]"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20 - Math.random() * 20, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
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
          transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
        >
          {/* Parallax Wrapper */}
          <motion.div style={{ x: desktopX, y: desktopY }} className="w-full h-full relative">
            {/* Floating Wrapper */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* Dynamic Shadow */}
              <motion.div 
                className="absolute inset-0 shadow-[0_0_80px_rgba(0,212,255,0.15)] rounded-2xl pointer-events-none"
                animate={shouldReduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <Laptop />
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
          transition={{ duration: 1.2, delay: 0.4, ease: premiumEase }}
        >
          {/* Parallax Wrapper */}
          <motion.div style={{ x: tabletX, y: tabletY }} className="w-full h-full relative">
            {/* Floating + Horizontal Drift Wrapper */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [8, -8, 8], x: [-3, 3, -3] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* Dynamic Shadow */}
              <motion.div 
                className="absolute inset-0 shadow-[-15px_15px_40px_rgba(0,0,0,0.5)] rounded-2xl pointer-events-none"
                animate={shouldReduceMotion ? {} : { opacity: [1, 0.6, 1] }} // Opposite to match opposite float
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <Tablet />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Phone (Right, Overlapping) */}
        <motion.div 
          className="absolute z-30 w-[14%] bottom-[-10%] right-[12%]"
          initial={{ opacity: 0, y: 40, x: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: premiumEase }}
        >
          {/* Parallax Wrapper */}
          <motion.div style={{ x: phoneX, y: phoneY }} className="w-full h-full relative">
            {/* Floating + Attention Rotation Wrapper */}
            <motion.div
              animate={shouldReduceMotion ? {} : { 
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
                animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <Phone />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
