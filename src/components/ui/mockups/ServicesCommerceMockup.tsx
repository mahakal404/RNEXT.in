"use client";
import React from 'react';

export const ServicesCommerceMockup = () => (
  <div className="w-full h-full bg-bg-secondary p-6 md:p-10 flex flex-col gap-8 relative overflow-hidden">
    <div className="w-48 h-6 md:h-8 bg-white/20 rounded-sm relative z-10" />
    {/* Product Grid Abstraction */}
    <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`w-full h-full bg-white/[0.03] border border-white/5 rounded-xl p-3 md:p-4 flex flex-col gap-3 md:gap-4 ${i === 2 ? 'hidden md:flex' : 'flex'}`}>
          <div className="w-full flex-1 bg-white/[0.05] rounded-lg" />
          <div className="w-[80%] h-3 bg-white/20 rounded-sm" />
          <div className="w-[40%] h-3 bg-brand-primary/60 rounded-sm" />
          <div className="w-full h-8 md:h-10 bg-white/10 rounded-md mt-auto flex items-center justify-center">
            <div className="w-16 h-2 bg-white/20 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
