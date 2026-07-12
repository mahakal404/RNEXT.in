"use client";
import React from 'react';

export const AiMockup = () => (
  <div className="w-full h-full bg-bg-secondary relative overflow-hidden flex items-center justify-center">
    {/* Glowing Aura */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_60%)] will-change-transform transform-gpu" />
    
    {/* Network Architecture Abstraction */}
    <div className="relative w-full max-w-[300px] h-[300px] flex items-center justify-center">
      {/* Central Node */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-brand-accent/20 border border-brand-accent/50 shadow-[0_0_40px_rgba(124,58,237,0.3)] z-20 flex items-center justify-center relative backdrop-blur-md">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-accent rounded-sm animate-pulse will-change-transform transform-gpu" />
      </div>

      {/* Connecting Lines */}
      <div className="absolute w-[120px] md:w-[150px] h-[1px] bg-brand-accent/40 top-1/2 left-0 -translate-y-1/2" />
      <div className="absolute w-[120px] md:w-[150px] h-[1px] bg-brand-accent/40 top-1/2 right-0 -translate-y-1/2" />
      <div className="absolute h-[120px] md:h-[150px] w-[1px] bg-brand-accent/40 top-0 left-1/2 -translate-x-1/2" />
      <div className="absolute h-[120px] md:h-[150px] w-[1px] bg-brand-accent/40 bottom-0 left-1/2 -translate-x-1/2" />

      {/* Satellite Nodes */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/20 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-white/40 rounded-full" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/20 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-brand-primary/40 rounded-full" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/20 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-white/40 rounded-full" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/20 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-white/40 rounded-full" />
      </div>
    </div>
  </div>
);
