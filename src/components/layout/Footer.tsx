"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useGlobalNavigation } from '../../hooks/useGlobalNavigation';

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const { getHref, handleNavClick } = useGlobalNavigation();

  // Subtle Motion Strategy
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  return (
    <footer className="w-full bg-bg-primary relative border-t border-white/5 z-20 pt-32 md:pt-48 pb-12 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Top Grid: Statement & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32 md:mb-48">
          
          {/* Section 1: Editorial Statement */}
          <motion.div 
            className="lg:col-span-8 flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeUp}
          >
            <h2 className="text-display-lg md:text-display-xl text-white font-semibold leading-[1.05] tracking-tight">
              Ready to build something<br />
              <span className="text-text-muted">undeniable.</span>
            </h2>
            <p className="text-body-xl text-text-secondary max-w-lg font-medium leading-relaxed">
              We engineer high-performance digital infrastructure for brands that refuse to blend in.
            </p>
          </motion.div>
          
          {/* Section 2: Premium CTA */}
          <motion.div 
            className="lg:col-span-4 flex items-end lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeUp}
          >
            <Link 
              href={getHref('Contact', '/#contact')}
              onClick={(e) => handleNavClick(e, 'Contact')}
              className="group flex items-center justify-between w-full lg:w-auto gap-12 border-b border-border-primary pb-6 transition-colors duration-500 hover:border-brand-primary"
            >
              <span className="text-heading-sm text-white font-medium group-hover:text-brand-primary transition-colors duration-500">
                Start Your Project
              </span>
              <div className="w-12 h-12 rounded-full border border-border-primary flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 group-hover:-rotate-45">
                <ArrowRight size={20} className="text-text-secondary group-hover:text-brand-primary transition-colors duration-500" strokeWidth={1.5} />
              </div>
            </Link>
          </motion.div>
          
        </div>

        {/* Soft Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 md:mb-24" />

        {/* Bottom Grid: Navigation, Signature, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Section 4: Brand Signature */}
          <motion.div 
            className="md:col-span-6 lg:col-span-5 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={fadeUp}
          >
            <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
              RNEXT<span className="text-brand-primary">.</span>
            </div>
            <div className="text-body-base text-text-muted flex flex-col gap-1 font-medium">
              <span>Digital Architecture for ambitious businesses.</span>
              <span>Made with precision.</span>
            </div>
          </motion.div>

          {/* Section 3: Essential Navigation */}
          <motion.div 
            className="md:col-span-3 lg:col-span-4 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={fadeUp}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">Navigation</div>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'Capabilities', href: '/#capabilities' },
                { label: 'Services', href: '/#services' },
                { label: 'Work', href: '/#projects' },
                { label: 'About', href: '/#about' },
                { label: 'Contact', href: '/#contact' }
              ].map(link => (
                 <Link 
                   key={link.label} 
                   href={getHref(link.label, link.href)} 
                   onClick={(e) => handleNavClick(e, link.label, link.href)}
                   className="text-body-lg text-text-secondary hover:text-white transition-colors duration-300 w-fit"
                 >
                   {link.label}
                 </Link>
              ))}
            </nav>
          </motion.div>

          {/* Connect & Socials */}
          <motion.div 
            className="md:col-span-3 lg:col-span-3 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={fadeUp}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">Connect</div>
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@rnext.in" className="text-body-lg text-text-secondary hover:text-white transition-colors duration-300 w-fit">
                hello@rnext.in
              </a>
              <div className="flex gap-6">
                <a href="https://github.com/mahakal404" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <FaGithub size={22} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-32 flex justify-between items-center text-xs text-text-disabled"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span>© {new Date().getFullYear()} RNEXT. All rights reserved.</span>
          <span>India</span>
        </motion.div>

      </div>
    </footer>
  );
}
