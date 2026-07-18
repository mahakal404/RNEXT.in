"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight, Globe, LayoutDashboard, ShoppingBag, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

import { PresenceMockup } from '../ui/mockups/PresenceMockup';
import { PlatformsMockup } from '../ui/mockups/PlatformsMockup';
import { ServicesCommerceMockup } from '../ui/mockups/ServicesCommerceMockup';
import { AiMockup } from '../ui/mockups/AiMockup';
import { useMotionUtilities, variants, stagger, hover, transitions } from '../../lib/motion';

/* --- DATA --- */

const capabilities = [
  {
    id: "presence",
    label: "DIGITAL PRESENCE",
    headline: "Build Your Digital Presence",
    problem: "Most websites are commodities. They fail to convey authority, struggle to convert, and look exactly like the competition.",
    solution: "We architect immersive, high-performance digital experiences that capture attention and command respect from the first scroll.",
    outcomes: ["Immediate brand authority", "Higher conversion rates", "Seamless mobile experience"],
    tech: ["Next.js", "React", "Tailwind CSS"],
    cta: "Discuss your digital presence",
    visual: <PresenceMockup />,
    animatedLabel: (
      <>
        <Globe size={16} strokeWidth={2} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
        Live Website Preview
      </>
    )
  },
  {
    id: "platforms",
    label: "CUSTOM SOFTWARE",
    headline: "Engineer Custom Platforms",
    problem: "Off-the-shelf software slows you down, forcing your business to adapt to technical limitations instead of scaling with your vision.",
    solution: "We engineer bespoke, secure, and lightning-fast web applications designed to streamline operations and delight your users.",
    outcomes: ["Streamlined operational workflows", "Scalable cloud infrastructure", "Bank-grade security architecture"],
    tech: ["Node.js", "PostgreSQL", "TypeScript"],
    cta: "Discuss your platform needs",
    visual: <PlatformsMockup />,
    animatedLabel: (
      <>
        <LayoutDashboard size={16} strokeWidth={2} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
        Enterprise Dashboard
      </>
    )
  },
  {
    id: "commerce",
    label: "E-COMMERCE",
    headline: "Launch High-Converting Commerce",
    problem: "Clunky checkouts and slow load times create friction, causing you to bleed high-ticket sales to competitors.",
    solution: "We build premium e-commerce engines optimized for speed, trust, and frictionless checkout, turning casual visitors into loyal customers.",
    outcomes: ["Increased Average Order Value (AOV)", "Reduced cart abandonment", "Lightning-fast page loads"],
    tech: ["Shopify Plus", "Next.js Commerce", "Stripe"],
    cta: "Discuss your commerce goals",
    visual: <ServicesCommerceMockup />,
    animatedLabel: (
      <>
        <ShoppingBag size={16} strokeWidth={2} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
        E-commerce Experience
      </>
    )
  },
  {
    id: "ai",
    label: "AI & AUTOMATION",
    headline: "Automate Operations with AI",
    problem: "Manual data entry and repetitive workflows drain resources, preventing your team from focusing on high-leverage growth.",
    solution: "We integrate smart automation and AI-driven solutions that handle repetitive tasks, intelligent routing, and complex data processing.",
    outcomes: ["Lower operational costs", "Intelligent data routing", "24/7 automated workflows"],
    tech: ["OpenAI", "LangChain", "Python"],
    cta: "Discuss AI integration",
    visual: <AiMockup />,
    animatedLabel: (
      <>
        <Cpu size={16} strokeWidth={2} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
        AI Automation Engine
      </>
    )
  }
];

export function Capabilities() {
  const [activeSection, setActiveSection] = useState("presence");
  const { withReducedMotion } = useMotionUtilities();
  const { scrollYProgress } = useScroll();

  const observerTargets = React.useRef(new Map<string, boolean>());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let hasChanges = false;
        entries.forEach((entry) => {
          const current = observerTargets.current.get(entry.target.id);
          if (current !== entry.isIntersecting) {
            observerTargets.current.set(entry.target.id, entry.isIntersecting);
            hasChanges = true;
          }
        });

        if (hasChanges) {
          const visibleIds = capabilities
            .map((cap) => cap.id)
            .filter((id) => observerTargets.current.get(id));

          if (visibleIds.length > 0) {
            setActiveSection(visibleIds[0]);
          }
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px"
      }
    );

    capabilities.forEach((cap) => {
      const el = document.getElementById(cap.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="capabilities" className="py-24 md:py-32 relative z-20 bg-bg-primary overflow-hidden">
      {/* Slower Parallax Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem',
          y: bgY
        }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Left Column: Functional Sticky Sidebar */}
          <div className="lg:col-span-4 flex flex-col relative">
            <div className="lg:sticky lg:top-32">
              <motion.div className="overflow-hidden" {...withReducedMotion(variants.maskReveal)}>
                <SectionHeader number="02" label="CAPABILITIES" alignment="left" />
              </motion.div>
              
              <motion.div className="overflow-hidden mb-6">
                <motion.p 
                  className="text-body-lg text-text-secondary"
                  {...withReducedMotion(variants.maskReveal)}
                  transition={{ ...variants.maskReveal.transition, delay: 0.1 }}
                >
                  We don&apos;t build generic websites. We engineer high-performance digital infrastructure designed to dominate your market.
                </motion.p>
              </motion.div>

              {/* Interactive Table of Contents */}
              <motion.div 
                className="hidden lg:flex flex-col border-l border-white/5 relative"
                {...withReducedMotion(variants.fade)}
                transition={{ ...variants.fade.transition, delay: 0.2 }}
              >
                {/* Active Indicator Line */}
                <motion.div 
                  className="absolute left-[-1px] w-[2px] bg-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                  animate={{
                    top: `${capabilities.findIndex(c => c.id === activeSection) * (100 / capabilities.length)}%`,
                    height: `${100 / capabilities.length}%`
                  }}
                  transition={transitions.springStiff}
                />
                
                {capabilities.map((cap, index) => (
                  <motion.button 
                    key={cap.id} 
                    onClick={() => handleScrollTo(cap.id)}
                    animate={{ 
                      scale: activeSection === cap.id ? 1.02 : 1,
                      backgroundColor: activeSection === cap.id ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0)"
                    }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.04)" }}
                    transition={transitions.springStiff}
                    className={`relative pl-6 py-4 flex items-center text-left w-full cursor-pointer rounded-r-lg border-y border-r border-transparent ${activeSection === cap.id ? 'border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]' : ''} origin-left`}
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${activeSection === cap.id ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-text-disabled'}`}>
                      0{index + 1} — {cap.headline}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Editorial Showcase */}
          <div className="lg:col-span-8 flex flex-col gap-32 md:gap-48">
            {capabilities.map((cap) => (
              <motion.div
                key={cap.id}
                id={cap.id}
                {...withReducedMotion(stagger.base)}
                className="flex flex-col relative"
              >
                {/* Desktop: Anchor offset for sticky nav */}
                <div className="absolute -top-32 h-1 w-1 pointer-events-none" />

                {/* Number Indicator */}
                <motion.div 
                  variants={variants.maskReveal}
                  className="mb-8"
                >
                  <span className="text-display-lg font-bold text-white/[0.03] tracking-tighter block leading-none">
                    0{capabilities.findIndex(c => c.id === cap.id) + 1}
                  </span>
                </motion.div>

                {/* Animated Badge */}
                <motion.div 
                  variants={variants.fade}
                  className="inline-flex items-center gap-2 mb-6"
                >
                  <div className="h-[1px] w-6 bg-brand-primary"></div>
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-primary uppercase">{cap.label}</span>
                </motion.div>

                {/* Headline */}
                <motion.div className="overflow-hidden mb-8" variants={variants.maskReveal}>
                  <h3 className="text-display-sm text-white font-semibold leading-[1.1] tracking-tight">{cap.headline}</h3>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
                  
                  {/* Left: Text & Logic */}
                  <motion.div variants={variants.fade} className="flex flex-col gap-10">
                    
                    {/* Problem/Solution */}
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-wider text-text-muted font-bold">The Problem</span>
                        <p className="text-body-md text-text-secondary leading-relaxed border-l-2 border-white/10 pl-4">{cap.problem}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-wider text-brand-primary font-bold">The RNEXT Solution</span>
                        <p className="text-body-md text-white/90 leading-relaxed border-l-2 border-brand-primary pl-4">{cap.solution}</p>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="flex flex-col gap-4">
                      <span className="text-xs uppercase tracking-wider text-text-muted font-bold">Key Outcomes</span>
                      <ul className="flex flex-col gap-3">
                        {cap.outcomes.map((outcome, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-3"
                            variants={variants.fade}
                          >
                            <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center shrink-0">
                              <Check size={10} className="text-brand-primary" />
                            </div>
                            <span className="text-body-sm text-text-secondary">{outcome}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-col gap-4">
                      <span className="text-xs uppercase tracking-wider text-text-muted font-bold">Tech Stack</span>
                      <div className="flex flex-wrap gap-2">
                        {cap.tech.map((techItem, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/70 font-medium">
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div {...hover.button} className="mt-2 inline-block">
                      <button className="group flex items-center gap-2 text-sm font-bold text-white transition-colors duration-300">
                        <span className="border-b border-transparent group-hover:border-brand-primary pb-0.5">{cap.cta}</span>
                        <ArrowRight size={16} className="text-brand-primary" />
                      </button>
                    </motion.div>

                  </motion.div>

                  {/* Right: Mockup Visual */}
                  <motion.div variants={variants.fade} {...hover.card} className="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[400px] flex items-center justify-center p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden group">
                     {/* Ambient Glow */}
                     <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-50" />
                     
                     <div className="relative z-10 w-full max-w-[320px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                       {cap.visual}
                     </div>

                     {/* Premium Floating Label */}
                     <motion.div 
                        className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-[#0a0a0f]/80 border border-white/10 rounded-xl p-4 flex items-center gap-3 shadow-2xl overflow-hidden"
                        variants={variants.maskReveal}
                     >
                       <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                       <div className="relative z-10 flex items-center gap-3 w-full">
                          {cap.animatedLabel}
                       </div>
                     </motion.div>
                  </motion.div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
