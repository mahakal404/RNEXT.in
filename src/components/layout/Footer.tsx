"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useGlobalNavigation } from '../../hooks/useGlobalNavigation';
import { BrandLogo } from '@/components/ui/BrandLogo';

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
    <footer className="w-full bg-bg-primary relative z-20 pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
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
            <div className="flex items-center">
              <BrandLogo size="md" />
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
                { label: 'Projects', href: '/#projects' },
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
