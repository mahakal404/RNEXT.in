"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { ArrowRight, Check, Phone, MessageCircle, Monitor, Smartphone, Layout, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Staggered reveal for text and buttons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  const trustVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" as const } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-bg-primary pt-32 pb-24 border-t border-white/5 z-10"
      style={{
        willChange: "transform, opacity"
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft animated radial glow / Cyan ambient lighting */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-screen"
        />
        
        {/* Subtle moving gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-brand-primary/5 opacity-80" />
        
        {/* Fine grid visibility */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center"
        >
          
          {/* Left Side: Content & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Header & Typography */}
            <div className="flex flex-col gap-6 relative">
              {/* Light bloom behind content */}
              <div className="absolute -inset-10 bg-brand-primary/5 blur-[60px] rounded-full z-[-1]" />
              
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 w-fit">
                <Sparkles size={14} className="text-brand-primary" />
                <span className="text-xs font-medium text-brand-primary uppercase tracking-wider">Ready When You Are</span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-display-md md:text-display-lg text-white font-semibold leading-[1.05] tracking-tight"
              >
                Your next digital product <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">starts here.</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-body-xl text-text-secondary max-w-lg font-medium leading-relaxed"
              >
                We engineer high-performance digital infrastructure for brands that refuse to blend in. Let's build something unforgettable.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              
              {/* Primary Button */}
              <Link href="/#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-primary text-bg-primary font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(0,255,255,0.4)] w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Moving highlight / button ripple effect inside */}
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>

              {/* Secondary Button */}
              <Link href="/#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto">
                <Phone size={18} className="text-text-muted group-hover:text-brand-primary transition-colors" />
                Book a Free Discovery Call
              </Link>
              
            </motion.div>
            
            {/* Tertiary Action */}
            <motion.div variants={itemVariants} className="pt-2">
               <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors group">
                 <MessageCircle size={16} className="group-hover:text-green-400 transition-colors" />
                 Chat on WhatsApp
               </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/5"
            >
              {['Free Consultation', 'Fast Response', 'Transparent Pricing', 'Long-Term Support'].map((trust, idx) => (
                <motion.div 
                  key={idx}
                  variants={trustVariants}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-brand-primary" />
                  </div>
                  <span className="text-xs text-text-muted font-medium">{trust}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Right Side: Product Preview */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative lg:h-[400px] flex items-center justify-center mt-12 lg:mt-0"
          >
             {/* Floating glow behind devices */}
             <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] rounded-full animate-pulse" />
             
             <div className="relative w-full max-w-[400px] aspect-square">
                {/* Website Preview */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[10%] right-[10%] w-[280px] h-[180px] bg-bg-secondary rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md flex flex-col z-10"
                >
                  <div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02]">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col gap-3 opacity-70">
                    <div className="w-1/3 h-4 bg-brand-primary/20 rounded-md" />
                    <div className="w-full h-16 bg-white/5 rounded-md" />
                    <div className="flex gap-2">
                       <div className="w-1/2 h-8 bg-white/5 rounded-md" />
                       <div className="w-1/2 h-8 bg-white/5 rounded-md" />
                    </div>
                  </div>
                  <Monitor className="absolute bottom-3 right-3 text-white/10" size={48} />
                </motion.div>

                {/* Mobile App Preview */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[5%] left-[5%] w-[140px] h-[280px] bg-bg-secondary rounded-[24px] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md p-2 z-30"
                >
                  <div className="w-full h-full border border-white/5 rounded-[16px] overflow-hidden flex flex-col bg-white/[0.01]">
                    <div className="h-4 flex justify-center items-center pt-1">
                      <div className="w-1/3 h-1 bg-white/20 rounded-full" />
                    </div>
                    <div className="p-3 flex-1 flex flex-col gap-3 opacity-70 mt-2">
                      <div className="w-3/4 h-3 bg-brand-primary/30 rounded-md" />
                      <div className="flex gap-2">
                         <div className="w-8 h-8 rounded-full bg-white/10" />
                         <div className="flex-1 h-8 bg-white/5 rounded-md" />
                      </div>
                      <div className="w-full flex-1 bg-white/5 rounded-md" />
                    </div>
                  </div>
                  <Smartphone className="absolute bottom-6 right-1/2 translate-x-1/2 text-white/10" size={32} />
                </motion.div>

                {/* Web App Dash Preview */}
                <motion.div 
                  animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-[40%] left-[25%] w-[220px] h-[160px] bg-bg-secondary rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md flex z-20"
                >
                  <div className="w-12 border-r border-white/5 bg-white/[0.02] p-2 flex flex-col gap-2">
                    <div className="w-full aspect-square rounded bg-brand-primary/20 mb-2" />
                    <div className="w-full h-2 rounded bg-white/10" />
                    <div className="w-full h-2 rounded bg-white/10" />
                    <div className="w-full h-2 rounded bg-white/10" />
                  </div>
                  <div className="flex-1 p-3 flex flex-col gap-2 opacity-70">
                    <div className="w-1/2 h-3 bg-white/20 rounded" />
                    <div className="w-full flex-1 bg-white/5 rounded border border-white/5" />
                  </div>
                  <Layout className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5" size={64} />
                </motion.div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
