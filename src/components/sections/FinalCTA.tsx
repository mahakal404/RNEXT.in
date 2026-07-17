"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Phone, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { CTAIllustration } from '@/components/ui/mockups/CTAIllustration';
import { useMotionUtilities, variants, stagger, hover, transitions } from '../../lib/motion';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);


export function FinalCTA() {
  const { withReducedMotion, shouldReduceMotion } = useMotionUtilities();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-bg-primary pt-32 pb-24 border-t border-white/5 z-10"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft animated radial glow / Cyan ambient lighting */}
        <motion.div 
          animate={{ 
            opacity: shouldReduceMotion ? 0.3 : [0.2, 0.4, 0.2],
            scale: shouldReduceMotion ? 1 : [1, 1.1, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[140px] mix-blend-screen"
        />
        
        {/* Moving Light */}
        <motion.div 
          animate={{
            x: shouldReduceMotion ? 0 : ['-100%', '200%'],
            opacity: shouldReduceMotion ? 0 : [0, 0.2, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent blur-[2px]"
        />

        {/* Animated Grid Lighting */}
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
          {...withReducedMotion(stagger.base)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center"
        >
          
          {/* Left Side: Content & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Header & Typography */}
            <div className="flex flex-col gap-6 relative">
              {/* Light bloom behind content */}
              <div className="absolute -inset-10 bg-brand-primary/10 blur-[80px] rounded-full z-[-1]" />
              
              <motion.div variants={variants.fade} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 w-fit">
                <Sparkles size={14} className="text-brand-primary animate-pulse" />
                <span className="text-xs font-medium text-brand-primary uppercase tracking-wider">Ready When You Are</span>
              </motion.div>
              
              <motion.h2 
                variants={variants.fade}
                className="text-display-md md:text-display-lg text-white font-semibold leading-[1.05] tracking-tight"
              >
                Your next digital product <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">starts here.</span>
              </motion.h2>
              
              <motion.p 
                variants={variants.fade}
                className="text-body-xl text-text-secondary max-w-lg font-medium leading-relaxed"
              >
                We engineer high-performance digital infrastructure for brands that refuse to blend in. Let's build something unforgettable.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={variants.fade} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
              
              <motion.div {...hover.button} className="w-full sm:w-auto">
                {/* Primary Button */}
                <Link href="/#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-primary text-bg-primary font-semibold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(0,255,255,0.4)] w-full">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
                </Link>
              </motion.div>

              <motion.div {...hover.button} className="w-full sm:w-auto">
                {/* Secondary Button */}
                <Link href="/#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(0,255,255,0.2)] w-full">
                  <Phone size={18} className="text-text-muted group-hover:text-brand-primary transition-colors duration-300 group-hover:rotate-12" />
                  Book a Free Discovery Call
                </Link>
              </motion.div>
              
            </motion.div>
            
            {/* Tertiary Action */}
            <motion.div variants={variants.fade} className="pt-2">
               <a 
                 href="https://wa.me/918347725447" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-[#25D366] transition-all duration-300 group hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]"
               >
                 <WhatsAppIcon className="w-5 h-5 text-text-muted group-hover:text-[#25D366] transition-all duration-300 group-hover:scale-110" />
                 Chat on WhatsApp
               </a>
            </motion.div>
          </div>

          {/* Right Side: CTA Illustration boot sequence */}
          <motion.div 
            className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[500px] w-full flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
              animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
              whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" }
            }}
            transition={transitions.lux}
          >
            <div className="w-[120%] lg:w-[140%] max-w-[800px] relative pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary z-10 w-full h-full pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary z-10 w-full h-full pointer-events-none" />
              
              <div className="relative z-0 scale-90 sm:scale-100 origin-center">
                <CTAIllustration />
              </div>
            </div>
          </motion.div>

        </motion.div>
        
        {/* Trust & Guarantee */}
        <motion.div 
          className="mt-20 pt-8 border-t border-border-primary grid grid-cols-2 md:grid-cols-4 gap-4"
          {...withReducedMotion(stagger.fast)}
        >
          {['100% Satisfaction', 'Fast Delivery', 'Secure Architecture', 'Global Standards'].map((item, i) => (
            <motion.div 
              key={item} 
              variants={variants.fade}
              className="flex items-center gap-2"
            >
              <Check size={16} className="text-brand-primary flex-shrink-0" />
              <span className="text-xs font-medium text-text-secondary">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
