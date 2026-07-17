"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useGlobalNavigation } from '../../hooks/useGlobalNavigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useMotionUtilities, variants, stagger, hover, transitions } from '../../lib/motion';

const LightSweep = () => {
  const { shouldReduceMotion } = useMotionUtilities();
  if (shouldReduceMotion) return null;
  return (
    <motion.div
      className="absolute top-0 left-0 w-[300%] h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"
      animate={{ x: ['-100%', '100%'] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 15, ease: 'linear' }}
    />
  );
};

export function Footer() {
  const { withReducedMotion, shouldReduceMotion } = useMotionUtilities();
  const { getHref, handleNavClick } = useGlobalNavigation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const services = [
    'Website Development',
    'Web App Development',
    'Mobile App Development',
    'Resume Websites',
    'Business Software',
    'Hosting & Domain Setup',
    'Maintenance & Support'
  ];

  const navLinks = [
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' }
  ];

  const socialLinks = [
    { label: 'Email', icon: Mail, href: 'mailto:hello@rnext.in' },
    { label: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/918347725447' },
    { label: 'GitHub', icon: FaGithub, href: 'https://github.com/mahakal404' },
    { label: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer ref={containerRef} className="w-full bg-bg-primary relative z-20 pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <LightSweep />
        
        {/* Soft Radial Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] opacity-60" />
        
        {/* Animated Grid Lighting */}
        <motion.div 
          animate={{ opacity: shouldReduceMotion ? 0.05 : [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)] opacity-5" 
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px] relative z-10">
        
        {/* Main Footer Grid */}
        <motion.div 
          variants={stagger.slow.variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8"
        >
          
          {/* Section 1: Brand */}
          <motion.div variants={variants.fade} className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center group cursor-pointer w-fit">
              <BrandLogo size="md" />
              <div className="absolute w-20 h-10 bg-brand-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-body-lg text-white font-medium">Boutique Digital Lab</span>
              <p className="text-body-base text-text-secondary leading-relaxed">
                Crafting premium digital products.
              </p>
              <p className="text-sm text-text-muted mt-1">
                Websites • Web Apps • Mobile Apps
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mt-4 hover:border-brand-primary/30 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
              </span>
              <span className="text-xs font-medium text-text-secondary">Accepting New Projects</span>
            </div>
          </motion.div>

          {/* Section 2: Services */}
          <motion.div variants={variants.fade} className="lg:col-span-3 flex flex-col gap-6 lg:ml-auto">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-disabled">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service, idx) => (
                <li key={idx} className="text-sm text-text-secondary hover:text-white transition-colors duration-300 w-fit cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: Navigation */}
          <motion.div variants={variants.fade} className="lg:col-span-2 flex flex-col gap-6 lg:mx-auto">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-disabled">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map(link => (
                 <Link 
                   key={link.label} 
                   href={getHref(link.label, link.href)} 
                   onClick={(e) => handleNavClick(e, link.label, link.href)}
                   className="group text-sm text-text-secondary hover:text-white transition-colors duration-300 w-fit flex items-center gap-2"
                 >
                   <span className="w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-3" />
                   {link.label}
                 </Link>
              ))}
            </nav>
          </motion.div>

          {/* Section 4: Connect */}
          <motion.div variants={variants.fade} className="lg:col-span-3 flex flex-col gap-6 lg:items-end">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-disabled lg:text-right">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,212,255,0.1)", borderColor: "rgba(0,212,255,0.4)" }}
                  transition={transitions.springStiff}
                >
                  <social.icon size={18} className="text-text-muted group-hover:text-brand-primary transition-colors duration-300" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 border border-white/10 text-white text-[10px] rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-md">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
            
            <a href="mailto:hello@rnext.in" className="group flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors duration-300 mt-2">
              <Mail size={14} className="text-text-muted group-hover:text-brand-primary transition-colors" />
              <span className="relative">
                hello@rnext.in
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </motion.div>

        </motion.div>

        {/* Compact CTA */}
        <motion.div 
          {...withReducedMotion({
            initial: { opacity: 0, y: 20 },
            animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { ...transitions.lux, delay: 0.4 }
          })}
          className="mt-24 mb-12 py-10 border-t border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          {/* Inner Light Sweep for CTA */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
          
          <h3 className="text-heading-sm md:text-heading-md text-white font-medium tracking-tight">
            Let's build something remarkable.
          </h3>
          <motion.div {...hover.button}>
            <Link 
              href="/#contact"
              className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-bg-primary font-semibold rounded-full hover:bg-brand-primary transition-colors duration-300"
            >
              Start Your Project
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Copyright & Location - Appears Last */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-disabled"
          {...withReducedMotion({
            initial: { opacity: 0 },
            animate: isInView ? { opacity: 1 } : { opacity: 0 },
            transition: { duration: 1, delay: 0.8 }
          })}
        >
          <span>© {new Date().getFullYear()} RNEXT. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-brand-primary/60" />
            Serving Clients Worldwide • Based in India
          </span>
        </motion.div>

      </div>
    </footer>
  );
}
