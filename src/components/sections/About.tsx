"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, TrendingUp, Cpu, Zap, Target, Wrench } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const timeline = [
  { id: 'discover', title: 'Discover', icon: <Search size={18} />, description: 'Understand your goals, users, competitors, and business requirements.' },
  { id: 'design', title: 'Design', icon: <PenTool size={18} />, description: 'Create modern interfaces focused on usability, trust, and conversion.' },
  { id: 'develop', title: 'Develop', icon: <Code size={18} />, description: 'Build scalable, secure, and high-performance digital products.' },
  { id: 'launch', title: 'Launch', icon: <Rocket size={18} />, description: 'Test thoroughly and deploy with confidence for a smooth production release.' },
  { id: 'support', title: 'Support & Grow', icon: <TrendingUp size={18} />, description: 'Provide maintenance, improvements, optimization, and long-term technical support.' }
];

const metrics = [
  { title: 'Custom Built', icon: <Wrench size={24} className="text-brand-primary" />, desc: 'Every project is designed and developed specifically for your business. No templates, no shortcuts, only tailored digital solutions.' },
  { title: 'Modern Technology', icon: <Code size={24} className="text-brand-primary" />, desc: 'We build using reliable and modern technologies that ensure speed, scalability, security, and long-term maintainability.' },
  { title: 'Performance First', icon: <Zap size={24} className="text-brand-primary" />, desc: 'Every product is optimized for fast loading, responsive design, accessibility, and an excellent user experience.' },
  { title: 'Long-Term Partnership', icon: <Target size={24} className="text-brand-primary" />, desc: "Our relationship doesn't end after deployment. We continue supporting, improving, and growing your digital product." }
];

export function About() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="about" className="py-24 md:py-32 relative z-20 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <SectionHeader number="05" label="ABOUT" />
          <motion.h2 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-display-md md:text-display-lg text-white font-semibold leading-tight"
          >
            Craftsmanship, quality, and <br className="hidden md:block" />
            <span className="text-text-muted">long-term partnership.</span>
          </motion.h2>
        </div>

        {/* Two Column Layout for Metrics & Timeline on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Metrics */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
             {/* Background glow for metrics area */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
             
             {metrics.map((metric, i) => (
                <motion.div 
                  key={metric.title}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
                  transition={{ duration: 0.6, delay: 0.62 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="card-standard p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 ease-out flex flex-col gap-4 group"
                >
                   <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-primary/20">
                     {metric.icon}
                   </div>
                   <h3 className="text-heading-sm text-white font-semibold">{metric.title}</h3>
                   <p className="text-body-base text-text-muted leading-relaxed transition-colors duration-500 group-hover:text-white/80">{metric.desc}</p>
                </motion.div>
             ))}
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-5 flex flex-col relative">
             <div className="text-[11px] text-white font-bold uppercase tracking-[0.2em] mb-12">
               Our Process
             </div>

             <div className="flex flex-col relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-primary/50 via-white/10 to-transparent" />

                {timeline.map((item, i) => (
                   <motion.div 
                     key={item.id}
                     initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
                     transition={{ duration: 0.6, delay: 0.72 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
                     className="relative flex gap-8 mb-12 last:mb-0 group cursor-default"
                   >
                      {/* Node */}
                      <div className="relative z-10 w-12 h-12 rounded-full bg-bg-elevated border-2 border-white/10 flex items-center justify-center shrink-0 transition-all duration-500 ease-out group-hover:border-brand-primary group-hover:bg-brand-primary/10 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] group-hover:scale-110">
                         <div className="text-text-muted group-hover:text-brand-primary transition-colors duration-500">
                           {item.icon}
                         </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col pt-2 transition-transform duration-500 group-hover:translate-x-2">
                         <h4 className="text-heading-sm text-white font-semibold mb-2 transition-colors duration-500 group-hover:text-brand-primary">{item.title}</h4>
                         <p className="text-body-base text-text-muted leading-relaxed transition-colors duration-500 group-hover:text-white/80">{item.description}</p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
