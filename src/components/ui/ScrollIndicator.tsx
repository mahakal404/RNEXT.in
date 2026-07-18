"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useMotionUtilities } from '../../lib/motion';

const sections = [
  { id: 'home', num: '01', label: 'HOME' },
  { id: 'capabilities', num: '02', label: 'CAPABILITIES' },
  { id: 'services', num: '03', label: 'SERVICES' },
  { id: 'projects', num: '04', label: 'PROJECTS' },
  { id: 'about', num: '05', label: 'ABOUT' },
  { id: 'contact', num: '06', label: 'CONTACT' }
];

export function ScrollIndicator() {
  const activeId = useScrollSpy(sections.map(s => s.id), "-30% 0px -55% 0px");
  const { withReducedMotion } = useMotionUtilities();
  const [isTimelineHovered, setIsTimelineHovered] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${id}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScrollTo(id);
    }
  };

  const activeIndex = sections.findIndex(s => s.id === activeId) !== -1 
    ? sections.findIndex(s => s.id === activeId) 
    : 0;

  return (
    <div 
      className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-[100] flex-col items-start gap-6 pointer-events-auto pl-2"
      onMouseEnter={() => setIsTimelineHovered(true)}
      onMouseLeave={() => setIsTimelineHovered(false)}
    >
      {sections.map((section, index) => {
        const isActive = index === activeIndex;
        const isCompleted = index < activeIndex;
        
        // Determine label animation state
        let labelVariant = "hidden";
        if (isActive) labelVariant = "active";
        else if (isTimelineHovered) labelVariant = "hovered";

        return (
          <button
            key={section.id}
            onClick={() => handleScrollTo(section.id)}
            onKeyDown={(e) => handleKeyDown(e, section.id)}
            className="group/item relative flex items-center justify-start h-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* The Dot */}
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
              <motion.div 
                initial={false}
                animate={isActive ? { 
                  scale: [1, 1.4, 1.2],
                  boxShadow: ["0 0 0px rgba(0,212,255,0)", "0 0 12px rgba(0,212,255,0.8)", "0 0 6px rgba(0,212,255,0.6)"],
                  backgroundColor: "#00d4ff"
                } : isCompleted ? {
                  scale: 1,
                  boxShadow: "0 0 6px rgba(0,212,255,0.4)",
                  backgroundColor: "#00d4ff"
                } : {
                  scale: 1,
                  boxShadow: "0 0 0px rgba(0,0,0,0)",
                  backgroundColor: "rgba(255,255,255,0.2)"
                }}
                transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="w-1.5 h-1.5 rounded-full group-hover/item:bg-white/80 transition-colors"
              />
            </div>

            {/* The Label */}
            <div className="relative flex items-center overflow-hidden h-full pr-4">
              <motion.div
                initial="hidden"
                animate={labelVariant}
                // @ts-ignore - framer motion type generic conflict
                variants={withReducedMotion({
                  active: { x: 0, opacity: 1, filter: "blur(0px)" },
                  hovered: { x: 0, opacity: 0.5, filter: "blur(0px)" },
                  hidden: { x: -10, opacity: 0, filter: "blur(2px)" }
                })}
                whileHover={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`text-[10px] font-bold tracking-widest whitespace-nowrap transition-colors duration-300 ${
                  isActive || isCompleted ? 'text-brand-primary' : 'text-text-muted group-hover/item:text-white'
                } ${isActive ? 'drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]' : ''}`}
              >
                {section.num} &mdash; {section.label}
              </motion.div>
            </div>
          </button>
        );
      })}

      {/* Connecting Line Track */}
      <div className="absolute top-4 bottom-4 left-6 w-[1px] bg-white/10 -z-10" />

      {/* Animated Glowing Indicator Line */}
      <motion.div 
        className="absolute top-4 left-6 w-[1px] bg-brand-primary shadow-[0_0_15px_rgba(0,212,255,0.8)] -z-10"
        animate={{
          height: `${(activeIndex / (sections.length - 1)) * 100}%`
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
