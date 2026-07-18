import React from 'react';
import { motion, useReducedMotion, useTransform, MotionValue } from 'framer-motion';
import { getHeroAnimations } from '../../lib/animations';

interface HeroBackgroundProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

export function HeroBackground({ mouseX, mouseY }: HeroBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();
  const animations = getHeroAnimations(shouldReduceMotion);

  // Perspective shifts mapped from mouse (-1 to 1) -> small pixel shifts
  // We use optional chaining and a fallback of 0 if mouseX/Y aren't provided yet
  const gridX = useTransform(mouseX || new MotionValue(0), [-1, 1], [-20, 20]);
  const gridY = useTransform(mouseY || new MotionValue(0), [-1, 1], [-20, 20]);

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-bg-primary"
      initial="initial"
      animate="animate"
      variants={animations.background}
      aria-hidden="true"
    >
      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.05); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.03); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 30px) scale(1.08); }
        }
        @keyframes mesh {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes grid-drift {
          0% { transform: translateY(0); }
          100% { transform: translateY(100px); }
        }
        .animate-float-1 { animation: float-1 35s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 40s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 30s ease-in-out infinite; }
        .animate-mesh { animation: mesh 40s linear infinite alternate; }
        .animate-grid { animation: grid-drift 40s linear infinite; }
      `}</style>

      {/* Layer 2: Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_80%)]" />

      {/* Layer 3: Aurora Effect */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-brand-primary/20 blur-[120px] rounded-full mix-blend-screen will-change-transform transform-gpu" />
        <div className="absolute top-1/3 right-1/4 w-[40%] h-[40%] bg-brand-secondary/20 blur-[120px] rounded-full mix-blend-screen will-change-transform transform-gpu" />
        <div className="absolute bottom-1/4 left-1/3 w-[40%] h-[40%] bg-brand-accent/20 blur-[120px] rounded-full mix-blend-screen will-change-transform transform-gpu" />
      </div>

      {/* Layer 4: Mesh Gradient */}
      <div 
        className="absolute inset-0 opacity-[0.08] animate-mesh will-change-transform transform-gpu"
        style={{
          backgroundImage: 'radial-gradient(at 80% 0%, hsla(189,100%,56%,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(255,100%,76%,0.2) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(240,100%,70%,0.2) 0px, transparent 50%)',
          backgroundSize: '200% 200%'
        }}
      />

      {/* Layer 5: Large Blur Orbs */}
      <div className="absolute inset-0">
        {/* Blue Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brand-secondary/10 blur-[100px] md:blur-[140px] rounded-full animate-float-1 will-change-transform transform-gpu" />
        
        {/* Cyan Top Right */}
        <div className="absolute top-[10%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-brand-primary/10 blur-[100px] md:blur-[140px] rounded-full animate-float-2 will-change-transform transform-gpu" />
        
        {/* Purple Bottom Right */}
        <div className="absolute bottom-[-10%] right-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-brand-accent/10 blur-[100px] md:blur-[150px] rounded-full animate-float-3 will-change-transform transform-gpu" />
      </div>

      {/* Layer 7: Ultra-light Grid (Interactive) */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]"
        style={{ x: gridX, y: gridY }}
      >
        {/* We make it slightly taller on Y to allow continuous drifting and snapping cleanly */}
        <div 
          className="absolute inset-[-10%] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
        {/* Grid Fade Masks to make it disappear naturally into the hero content */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060816]/10 via-transparent to-[#060816] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#060816_100%)] pointer-events-none" />
      </motion.div>

      {/* Layer 6: Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }}
      />

      {/* Layer 8: Future Mouse Spotlight Support */}
      <div id="hero-spotlight" className="absolute inset-0 pointer-events-none z-10 hidden" aria-hidden="true" />
      
    </motion.div>
  );
}
