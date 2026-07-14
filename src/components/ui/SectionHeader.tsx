"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  label: string;
  alignment?: 'left' | 'center';
}

const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export function SectionHeader({ number, label, alignment = "left" }: SectionHeaderProps) {
  return (
    <div className={`relative flex flex-col mb-6 ${alignment === 'center' ? 'items-center' : 'items-start'}`}>
      {/* Soft Radial Cyan Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-brand-primary/10 blur-[40px] rounded-full pointer-events-none -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.8, 0] }}
        viewport={{ once: true, margin: "-35% 0px" }}
        transition={{ duration: 1.5, ease }}
      />

      {/* Thin Cyan Divider Line */}
      <motion.div
        className="h-[1px] bg-brand-primary/60 mb-4"
        initial={{ scaleX: 0, opacity: 0, filter: "drop-shadow(0 0 0px rgba(0,212,255,0))" }}
        whileInView={{ scaleX: 1, opacity: 1, filter: "drop-shadow(0 0 6px rgba(0,212,255,0.4))" }}
        viewport={{ once: true, margin: "-35%" }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        style={{ transformOrigin: alignment === 'center' ? 'center' : 'left', width: '48px' }}
      />

      {/* Number and Label */}
      <div className="flex items-center gap-2 text-brand-primary text-caption font-bold uppercase tracking-widest overflow-hidden py-1">
        <motion.span
          initial={{ x: -12, opacity: 0, filter: "drop-shadow(0 0 0px rgba(0,212,255,0))" }}
          whileInView={{ x: 0, opacity: 1, filter: "drop-shadow(0 0 4px rgba(0,212,255,0.3))" }}
          viewport={{ once: true, margin: "-35%" }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          {number}
        </motion.span>
        
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-35%" }}
          transition={{ duration: 0.4, delay: 0.35, ease }}
        >
          —
        </motion.span>
        
        <motion.span
          initial={{ y: 18, opacity: 0, filter: "blur(6px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-35%" }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="inline-block"
        >
          {label}
        </motion.span>
      </div>
    </div>
  );
}
