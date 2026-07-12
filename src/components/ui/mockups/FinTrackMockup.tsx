"use client";
import React from 'react';

export const FinTrackMockup = () => (
  <div className="w-full h-full bg-[#060812] p-6 md:p-12 lg:p-20 flex flex-col relative overflow-hidden rounded-[32px]">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
    
    <div className="flex justify-between items-center relative z-10 mb-8 md:mb-12">
      <div className="h-6 md:h-8 w-24 md:w-32 bg-white/10 rounded-md" />
      <div className="flex gap-4">
        <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-brand-primary/20" />
        <div className="h-8 md:h-10 w-24 md:w-32 bg-white/5 rounded-full hidden sm:block" />
      </div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mb-8 md:mb-12">
       <div className="h-24 md:h-32 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col justify-end"><div className="h-3 md:h-4 w-1/2 bg-white/20 rounded-sm mb-2" /><div className="h-6 md:h-8 w-3/4 bg-white/80 rounded-sm" /></div>
       <div className="h-24 md:h-32 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col justify-end"><div className="h-3 md:h-4 w-1/2 bg-white/20 rounded-sm mb-2" /><div className="h-6 md:h-8 w-2/3 bg-white/80 rounded-sm" /></div>
       <div className="h-24 md:h-32 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-4 md:p-6 flex flex-col justify-end hidden lg:flex"><div className="h-4 w-1/2 bg-brand-primary/40 rounded-sm mb-2" /><div className="h-8 w-5/6 bg-brand-primary rounded-sm" /></div>
    </div>

    <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden z-10">
       <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent" />
       <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[80%] text-brand-primary opacity-50">
          <path d="M0,40 L10,30 L20,35 L30,20 L40,25 L50,10 L60,15 L70,5 L80,10 L90,2 L100,8 L100,40 Z" fill="currentColor" opacity="0.2" />
          <path d="M0,40 L10,30 L20,35 L30,20 L40,25 L50,10 L60,15 L70,5 L80,10 L90,2 L100,8" fill="none" stroke="currentColor" strokeWidth="0.5" />
       </svg>
    </div>
  </div>
);
