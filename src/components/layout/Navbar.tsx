"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion';
import { getHeroAnimations } from '../../lib/animations';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const shouldReduceMotion = useReducedMotion();
  const animations = getHeroAnimations(shouldReduceMotion);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-colors duration-300 ease-in-out flex justify-center w-full px-4 md:px-8 lg:px-[80px] ${
          isScrolled ? 'top-4' : 'top-0 pt-8 lg:pt-12'
        }`}
        initial="initial"
        animate="animate"
        variants={animations.navbar}
      >
        <div
          className={`flex items-center w-full max-w-[1200px] h-[72px] transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'bg-[#0B1020]/80 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl px-6 lg:px-8'
              : 'bg-transparent border-transparent px-0'
          }`}
        >
          {/* Left: Logo */}
          <div className="flex-1 flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold tracking-tight text-white flex items-center" 
              onClick={() => setActiveLink('Home')}
            >
              RNEXT
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative group py-2"
                aria-current={activeLink === link.name ? 'page' : undefined}
              >
                <span className={`text-sm font-medium transition-colors duration-250 block ${
                  activeLink === link.name ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {link.name}
                </span>
                {/* Underline Glides from left to right on hover, or stays full width if active */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-white rounded-full transition-all duration-250 ease-out ${
                  activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Link 
              href="#contact" 
              className="hidden lg:inline-flex btn-base h-10 px-6 rounded-lg bg-white text-bg-primary text-sm font-medium hover:bg-gray-100 hover:scale-[1.02] hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              Get In Touch
            </Link>
            
            {/* Mobile Nav Toggle */}
            <button
              className="lg:hidden text-gray-300 hover:text-white transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Fullscreen Overlay */}
      <div 
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#060816]/90 backdrop-blur-xl" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Slide-in Menu Panel */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[100%] max-w-[400px] bg-[#0B1020] border-l border-white/5 shadow-2xl flex flex-col p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold text-white">Menu</span>
            <button
              className="text-gray-400 hover:text-white p-2 -mr-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 flex-1 justify-center -mt-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-3xl font-medium tracking-tight transition-colors ${
                  activeLink === link.name ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="mt-8">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center h-14 w-full rounded-xl bg-white text-[#0B1020] text-lg font-medium transition-all hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
