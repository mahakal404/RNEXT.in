"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Laptop } from './Laptop';
import { Tablet } from './Tablet';
import { Phone } from './Phone';
import { ecosystems, getRandomEvent, LiveEvent } from './hero-ecosystems';

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Intersection Observer
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Central Hero Engine State
  const [ecoIndex, setEcoIndex] = useState(0);
  const [transitionState, setTransitionState] = useState<'idle' | 'fading_out' | 'skeleton' | 'fading_in'>('fading_in');
  const [activeEvent, setActiveEvent] = useState<LiveEvent | null>(null);

  const currentEcosystem = ecosystems[ecoIndex];

  // Ecosystem Rotation Engine
  useEffect(() => {
    if (!isVisible || shouldReduceMotion) return;
    let timeoutId: NodeJS.Timeout;
    
    const runTransition = async () => {
       setTransitionState('fading_out');
       await new Promise(r => setTimeout(r, 600));
       
       setTransitionState('skeleton');
       setEcoIndex(prev => (prev + 1) % ecosystems.length);
       await new Promise(r => setTimeout(r, 1500)); // Skeleton loading phase
       
       setTransitionState('fading_in');
       await new Promise(r => setTimeout(r, 1200)); // Entrance animations
       
       setTransitionState('idle');
       
       // Schedule next
       const nextDelay = 20000 + Math.random() * 10000;
       timeoutId = setTimeout(runTransition, nextDelay);
    };

    // First idle entry
    if (transitionState === 'fading_in') {
      setTimeout(() => setTransitionState('idle'), 1500);
      timeoutId = setTimeout(runTransition, 20000 + Math.random() * 10000);
    }
    
    return () => clearTimeout(timeoutId);
  }, [isVisible, shouldReduceMotion, transitionState]);

  // Event Engine
  useEffect(() => {
    if (!isVisible || shouldReduceMotion || transitionState !== 'idle') return;
    const interval = setInterval(() => {
       const newEvent = getRandomEvent(ecosystems[ecoIndex].id);
       setActiveEvent(newEvent);
       setTimeout(() => setActiveEvent(null), 5000);
    }, 8000 + Math.random() * 7000);
    
    return () => clearInterval(interval);
  }, [isVisible, shouldReduceMotion, transitionState, ecoIndex]);

  // Mouse Parallax Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (shouldReduceMotion || !isVisible) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion, isVisible]);

  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // Parallax Multipliers
  const deskX = useTransform(mouseX, [-1, 1], [-5, 5]);
  const deskY = useTransform(mouseY, [-1, 1], [-5, 5]);
  const tabX = useTransform(mouseX, [-1, 1], [-12, 12]);
  const tabY = useTransform(mouseY, [-1, 1], [-10, 10]);
  const phoneX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const phoneY = useTransform(mouseY, [-1, 1], [-15, 15]);

  const deskTransformX = useTransform(deskX, x => `calc(-50% + ${x}px)`);

  const LightSweep = () => {
    if (shouldReduceMotion || !isVisible) return null;
    return (
      <motion.div 
        className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay overflow-hidden rounded-[4%]"
        initial={{ x: '-150%', opacity: 0 }}
        animate={{ x: '150%', opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: Math.random() * 4 + 4, ease: "easeInOut" }}
      >
        <div className="w-[100%] h-[200%] bg-gradient-to-r from-transparent via-white to-transparent -rotate-45 transform origin-center translate-y-[-25%] opacity-40 blur-[4px]" />
      </motion.div>
    );
  };

  const Particles = () => {
    if (shouldReduceMotion || !isVisible) return null;
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: currentEcosystem.colors.primary
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    );
  };

  const cinematicEasing = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full lg:w-[60%] mx-auto mt-12 lg:mt-16 flex items-center justify-center cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ scale: isHovered ? 1.02 : 1 }}
      transition={{ duration: 0.8, ease: cinematicEasing }}
    >
      {/* Ambient Breathing Glow */}
      {isVisible && (
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full blur-[100px] pointer-events-none z-0"
          style={{ background: `linear-gradient(to top right, ${currentEcosystem.colors.primary}20, ${currentEcosystem.colors.accent}20)` }}
          animate={{ 
            opacity: isHovered ? (shouldReduceMotion ? 0.6 : [0.4, 0.6, 0.4]) : (shouldReduceMotion ? 0.2 : [0.2, 0.4, 0.2]),
            scale: isHovered ? (shouldReduceMotion ? 1.05 : [1.05, 1.1, 1.05]) : (shouldReduceMotion ? 1 : [1, 1.05, 1])
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <Particles />

      {/* Container to handle proportional scaling */}
      <div className="relative w-full max-w-[900px] aspect-[2/1] flex items-center justify-center">
        
        {/* Laptop (Center, Base Layer) */}
        <motion.div 
          className="absolute z-10 w-[75%] top-[10%] left-[50%]"
          style={{ x: deskTransformX, y: deskY }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          >
            <motion.div
              animate={{ 
                y: shouldReduceMotion || !isVisible ? 0 : [-4, 4, -4],
                boxShadow: shouldReduceMotion || !isVisible
                  ? `0px 0px 80px ${currentEcosystem.colors.primary}20` 
                  : [`0px 0px 80px ${currentEcosystem.colors.primary}20`, `0px 20px 100px ${currentEcosystem.colors.primary}40`, `0px 0px 80px ${currentEcosystem.colors.primary}20`]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative rounded-2xl"
            >
              <Laptop ecosystem={currentEcosystem} transitionState={transitionState} activeEvent={activeEvent} />
              <LightSweep />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tablet (Left, Overlapping) */}
        <motion.div 
          className="absolute z-20 w-[30%] bottom-[-5%] left-[2%]"
          style={{ x: tabX, y: tabY }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              x: isHovered ? -15 : 0
            }}
            transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.25 }}
          >
            <motion.div
              animate={{ 
                y: shouldReduceMotion || !isVisible ? 0 : [-6, 6, -6],
                x: shouldReduceMotion || !isVisible ? 0 : [-2, 2, -2],
                boxShadow: shouldReduceMotion || !isVisible
                  ? '-15px 15px 40px rgba(0,0,0,0.5)' 
                  : ['-15px 15px 40px rgba(0,0,0,0.5)', '-20px 25px 60px rgba(0,0,0,0.7)', '-15px 15px 40px rgba(0,0,0,0.5)']
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-full h-full relative rounded-2xl"
            >
              <Tablet ecosystem={currentEcosystem} transitionState={transitionState} activeEvent={activeEvent} />
              <LightSweep />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Phone (Right, Overlapping) */}
        <motion.div 
          className="absolute z-30 w-[13%] bottom-[-10%] right-[10%]"
          style={{ x: phoneX, y: phoneY }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              x: isHovered ? 20 : 0
            }}
            transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.4 }}
          >
            <motion.div
              animate={{ 
                y: shouldReduceMotion || !isVisible ? 0 : [-8, 8, -8],
                rotate: shouldReduceMotion || !isVisible ? 0 : [0, 0, 0, 1.5, 1.5, 0, 0],
                boxShadow: shouldReduceMotion || !isVisible
                  ? '15px 15px 40px rgba(0,0,0,0.5)'
                  : ['15px 15px 40px rgba(0,0,0,0.5)', '20px 25px 60px rgba(0,0,0,0.7)', '15px 15px 40px rgba(0,0,0,0.5)']
              }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="w-full h-full relative rounded-xl"
            >
              <Phone ecosystem={currentEcosystem} transitionState={transitionState} activeEvent={activeEvent} />
              <LightSweep />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
