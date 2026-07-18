"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code, Rocket, TrendingUp, Zap, Target, Wrench } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useMotionUtilities, variants, stagger, hover, transitions } from '../../lib/motion';

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
  const { withReducedMotion } = useMotionUtilities();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <section id="about" className="py-24 md:py-32 relative z-20 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <motion.div className="overflow-hidden" {...withReducedMotion(variants.maskReveal)}>
            <SectionHeader number="05" label="ABOUT" />
          </motion.div>
          <motion.h2 
            className="text-display-md md:text-display-lg text-white font-semibold leading-tight overflow-hidden"
            {...withReducedMotion(variants.maskReveal)}
            transition={{ ...variants.maskReveal.transition, delay: 0.1 }}
          >
            Craftsmanship, quality, and <br className="hidden md:block" />
            <span className="text-text-muted">long-term partnership.</span>
          </motion.h2>
        </div>

        {/* Two Column Layout for Metrics & Timeline on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Metrics (Cards) */}
          <motion.div 
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
            {...withReducedMotion(stagger.base)}
          >
             {/* Background glow for metrics area - organic reveal */}
             <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10"
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeOut" }}
             />
             
             {metrics.map((metric) => (
                <motion.div 
                  key={metric.title}
                  variants={variants.fade}
                  {...hover.card}
                  className="card-standard p-8 bg-white/[0.02] border border-white/5 transition-colors duration-500 ease-out flex flex-col gap-4 group hover:border-white/10 hover:bg-white/[0.04]"
                >
                   <motion.div 
                     className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-2"
                     transition={transitions.springStiff}
                     whileHover={{ scale: 1.1, backgroundColor: "rgba(0,212,255,0.2)" }}
                   >
                     {metric.icon}
                   </motion.div>
                   <h3 className="text-heading-sm text-white font-semibold">{metric.title}</h3>
                   <p className="text-body-base text-text-muted leading-relaxed transition-colors duration-500 group-hover:text-white/80">{metric.desc}</p>
                </motion.div>
             ))}
          </motion.div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-5 flex flex-col relative" ref={timelineRef}>
             <motion.div 
               className="text-[11px] text-white font-bold uppercase tracking-[0.2em] mb-12"
               {...withReducedMotion(variants.fade)}
             >
               Our Process
             </motion.div>

             <motion.div 
               className="flex flex-col relative"
               {...withReducedMotion(stagger.base)}
             >
                {/* Vertical connecting line - Animated Tween */}
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-white/5">
                  <motion.div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-primary via-white/10 to-transparent"
                    style={{ height: timelineHeight }}
                  />
                </div>

                {timeline.map((item) => (
                   <motion.div 
                     key={item.id}
                     variants={variants.fade}
                     className="relative flex gap-8 mb-12 last:mb-0 group cursor-default"
                   >
                      {/* Node */}
                      <motion.div 
                        className="relative z-10 w-12 h-12 rounded-full bg-bg-elevated border-2 border-white/10 flex items-center justify-center shrink-0 transition-colors duration-500 ease-out group-hover:border-brand-primary group-hover:bg-brand-primary/10"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}
                        transition={transitions.springStiff}
                      >
                         <div className="text-text-muted group-hover:text-brand-primary transition-colors duration-500">
                           {item.icon}
                         </div>
                      </motion.div>

                      {/* Content */}
                      <motion.div 
                        className="flex flex-col pt-2"
                        whileHover={{ x: 8 }}
                        transition={transitions.springStiff}
                      >
                         <h4 className="text-heading-sm text-white font-semibold mb-2 transition-colors duration-500 group-hover:text-brand-primary">{item.title}</h4>
                         <p className="text-body-base text-text-muted leading-relaxed transition-colors duration-500 group-hover:text-white/80">{item.description}</p>
                      </motion.div>
                   </motion.div>
                ))}
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
