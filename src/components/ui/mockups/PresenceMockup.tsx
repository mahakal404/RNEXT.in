"use client";
import React from 'react';

export const PresenceMockup = () => (
  <div className="w-full h-full p-8 flex flex-col items-center justify-center relative overflow-hidden bg-bg-secondary">
    <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
    
    {/* Abstract Navbar */}
    <div className="w-[90%] md:w-[70%] h-10 border-b border-white/10 flex justify-between items-center mb-10 relative z-10 px-4">
      <div className="w-16 h-3 bg-white/20 rounded-sm" />
      <div className="flex gap-4">
        <div className="w-10 h-2 bg-white/10 rounded-sm hidden sm:block" />
        <div className="w-10 h-2 bg-white/10 rounded-sm hidden sm:block" />
        <div className="w-20 h-5 bg-brand-primary/20 border border-brand-primary/30 rounded-sm" />
      </div>
    </div>
    
    {/* Abstract Hero */}
    <div className="w-full max-w-md text-center flex flex-col items-center gap-5 relative z-10">
      <div className="w-[85%] h-8 md:h-12 bg-white/20 rounded-md" />
      <div className="w-[60%] h-8 md:h-12 bg-white/20 rounded-md mb-2" />
      <div className="w-[75%] h-3 md:h-4 bg-white/5 rounded-sm" />
      <div className="w-[50%] h-3 md:h-4 bg-white/5 rounded-sm mb-6" />
      <div className="w-32 h-10 md:h-12 bg-brand-primary rounded-md shadow-[0_0_20px_rgba(0,212,255,0.3)]" />
    </div>
  </div>
);
