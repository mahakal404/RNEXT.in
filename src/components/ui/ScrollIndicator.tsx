"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const sections = [
  { id: 'home', num: '01' },
  { id: 'services', num: '02' },
  { id: 'projects', num: '03' },
  { id: 'about', num: '04' },
  { id: 'contact', num: '05' }
];

export function ScrollIndicator() {
  const activeId = useScrollSpy(sections.map(s => s.id), "-30% 0px -55% 0px");

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${id}`);
    }
  };

  const activeIndex = sections.findIndex(s => s.id === activeId) !== -1 
    ? sections.findIndex(s => s.id === activeId) 
    : 0;

  return (
    <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-[100] flex-col items-center gap-6 pointer-events-auto">
      {sections.map((section, index) => {
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleScrollTo(section.id)}
            className="group relative flex items-center justify-center w-8 h-8 focus:outline-none"
            aria-label={`Scroll to ${section.id}`}
          >
            <span className={`text-[10px] font-bold tracking-widest transition-all duration-500 ease-out absolute right-full mr-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 ${isActive ? 'text-brand-primary' : 'text-text-muted group-hover:text-white'}`}>
              {section.num}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ease-out ${isActive ? 'bg-brand-primary shadow-[0_0_10px_rgba(0,212,255,0.8)] scale-150' : 'bg-white/20 group-hover:bg-white/60'}`} />
          </button>
        );
      })}

      {/* Connecting Line Track */}
      <div className="absolute top-4 bottom-4 w-[1px] bg-white/10 -z-10" />

      {/* Animated Glowing Indicator Line */}
      <motion.div 
        className="absolute top-4 w-[1px] bg-brand-primary shadow-[0_0_15px_rgba(0,212,255,0.8)] -z-10"
        animate={{
          height: `${(activeIndex / (sections.length - 1)) * 100}%`
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
