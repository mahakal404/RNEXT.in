"use client";

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

import { PresenceMockup } from '../ui/mockups/PresenceMockup';
import { PlatformsMockup } from '../ui/mockups/PlatformsMockup';
import { ServicesCommerceMockup } from '../ui/mockups/ServicesCommerceMockup';
import { AiMockup } from '../ui/mockups/AiMockup';

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
    visual: <PresenceMockup />
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
    visual: <PlatformsMockup />
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
    visual: <ServicesCommerceMockup />
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
    visual: <AiMockup />
  }
];

export function Services() {
  const [activeSection, setActiveSection] = useState("presence");
  const shouldReduceMotion = useReducedMotion();

  // Strict Physical Momentum Animation Rules
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
  const blockVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition }
  };

  return (
    <section id="capabilities" className="py-24 md:py-32 relative z-20 bg-bg-primary">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Left Column: Functional Sticky Sidebar */}
          <div className="lg:col-span-4 flex flex-col relative">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-brand-primary text-caption font-bold uppercase tracking-widest mb-6">
                Capabilities
              </h2>
              <p className="text-body-lg text-text-secondary mb-6">
                We don&apos;t build generic websites. We engineer high-performance digital infrastructure designed to dominate your market.
              </p>
              <div className="text-sm font-medium text-text-muted mb-12">
                Estimated read: 3 mins
              </div>
              
              {/* Interactive Table of Contents */}
              <div className="hidden lg:flex flex-col border-l border-white/5 relative">
                {/* Active Indicator Line */}
                <div 
                  className="absolute left-[-1px] w-[2px] bg-brand-primary transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    top: `${capabilities.findIndex(c => c.id === activeSection) * (100 / capabilities.length)}%`,
                    height: `${100 / capabilities.length}%`
                  }}
                />
                
                {capabilities.map((cap, index) => (
                  <div key={cap.id} className="relative pl-6 py-4 flex items-center">
                    <span className={`text-sm font-medium transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeSection === cap.id ? 'text-white' : 'text-text-disabled'}`}>
                      0{index + 1} — {cap.headline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Showcase */}
          <div className="lg:col-span-8 flex flex-col gap-32 md:gap-48">
            {capabilities.map((cap) => (
              <motion.div
                key={cap.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={blockVariants}
                className="flex flex-col relative"
              >
                {/* Scrollspy trigger layer */}
                <motion.div 
                  onViewportEnter={() => setActiveSection(cap.id)}
                  viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
                  className="absolute inset-0 pointer-events-none"
                />
                
                {/* 1. Category Label */}
                <div className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-4">
                  {cap.label}
                </div>
                
                {/* 2. Headline */}
                <h3 className="text-heading-lg md:text-display-sm text-white font-semibold mb-8 leading-tight">
                  {cap.headline}
                </h3>
                
                {/* 3. Problem Statement */}
                <div className="mb-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-brand-primary block mb-2">The Problem</span>
                  <p className="text-body-lg text-text-muted leading-relaxed">
                    {cap.problem}
                  </p>
                </div>
                
                {/* 4. RNEXT Solution */}
                <div className="mb-10">
                  <span className="text-sm font-bold uppercase tracking-wider text-brand-primary block mb-2">The Solution</span>
                  <p className="text-body-lg text-white leading-relaxed font-medium">
                    {cap.solution}
                  </p>
                </div>
                
                {/* 5. Expected Business Outcomes */}
                <div className="mb-12">
                  <span className="text-sm font-bold uppercase tracking-wider text-white block mb-4">Expected Outcomes</span>
                  <ul className="flex flex-col gap-3">
                    {cap.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-text-secondary">
                        <Check size={16} strokeWidth={1.5} className="text-brand-primary flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* 6. Technology Stack */}
                <div className="mb-12 flex flex-wrap gap-2">
                  {cap.tech.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-bold uppercase tracking-wider text-text-muted px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* 7. Visual Preview (Bespoke CSS Mockups) */}
                <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-[32px] overflow-hidden border border-white/5 mb-10">
                  {cap.visual}
                </div>
                
                {/* 8. Contextual CTA */}
                <div>
                  <button className="btn-base btn-secondary px-8 h-12 text-sm font-medium group flex items-center gap-2">
                    {cap.cta}
                    <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
