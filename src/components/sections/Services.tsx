"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Globe, Laptop, Smartphone, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useGlobalNavigation } from '../../hooks/useGlobalNavigation';
import { SectionHeader } from '../ui/SectionHeader';

const servicesList = [
  {
    title: "Website Development",
    icon: <Globe size={24} className="text-brand-primary group-hover:scale-110 transition-transform duration-500" />,
    description: "High-performance, beautifully designed business websites that capture attention, build trust, and convert visitors into long-term clients."
  },
  {
    title: "Web App Development",
    icon: <Laptop size={24} className="text-brand-primary group-hover:scale-110 transition-transform duration-500" />,
    description: "Bespoke, secure, and scalable web applications engineered to streamline operations and deliver immersive user experiences."
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone size={24} className="text-brand-primary group-hover:scale-110 transition-transform duration-500" />,
    description: "Native and cross-platform mobile experiences that put your brand directly in the hands of your audience with flawless performance."
  },
  {
    title: "AI Solutions",
    icon: <Cpu size={24} className="text-brand-primary group-hover:scale-110 transition-transform duration-500" />,
    description: "Intelligent automation and AI integrations designed to eliminate repetitive workflows, route data efficiently, and reduce costs."
  }
];

export function Services() {
  const shouldReduceMotion = useReducedMotion();
  const { getHref, handleNavClick } = useGlobalNavigation();

  return (
    <section id="services" className="py-24 md:py-32 relative z-20 bg-bg-primary overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-2xl mx-auto flex flex-col items-center text-center">
          <SectionHeader number="03" label="SERVICES" alignment="center" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-display-md md:text-display-lg text-white font-semibold leading-tight"
          >
            How we can help you <br className="hidden md:block" />
            <span className="text-text-muted">scale your business.</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24 md:mb-32 relative">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
              transition={{ duration: 0.6, delay: 0.62 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="card-standard p-10 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 ease-out flex flex-col group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.1)_0%,transparent_70%)]" />

              <div className="w-14 h-14 rounded-2xl bg-bg-elevated border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-brand-primary/30 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-heading-md text-white font-semibold mb-4 relative z-10 transition-colors duration-500 group-hover:text-brand-primary">{service.title}</h3>
              <p className="text-body-lg text-text-secondary leading-relaxed relative z-10 transition-colors duration-500 group-hover:text-white/90">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
          transition={{ duration: 0.8, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Link 
            href={getHref('Contact', '/#contact')}
            onClick={(e) => handleNavClick(e, 'Contact')}
            className="group relative flex items-center gap-4 px-10 py-5 rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] active:scale-[0.98]"
          >
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.15)_0%,transparent_70%)]" />
             <span className="relative z-10 text-body-lg font-semibold text-white transition-colors duration-500 group-hover:text-brand-primary">Discuss Your Project</span>
             <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white text-bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <ArrowRight size={18} />
             </div>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
