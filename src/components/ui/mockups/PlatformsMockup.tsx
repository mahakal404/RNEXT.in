"use client";
import React from 'react';

export const PlatformsMockup = () => (
  <div className="w-full h-full bg-bg-secondary flex relative overflow-hidden">
    {/* Sidebar */}
    <div className="w-1/4 max-w-[120px] md:max-w-[180px] h-full border-r border-white/5 p-4 flex flex-col gap-6 relative z-10 bg-black/20">
      <div className="w-12 h-4 bg-white/20 rounded-sm mb-4" />
      <div className="flex flex-col gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`w-full h-3 rounded-sm ${i === 1 ? 'bg-brand-primary/40' : 'bg-white/5'}`} />
        ))}
      </div>
    </div>
    {/* Main Content Area */}
    <div className="flex-1 p-6 md:p-10 flex flex-col gap-8 relative z-10">
      <div className="w-full flex justify-between items-center">
        <div className="w-32 md:w-48 h-6 md:h-8 bg-white/10 rounded-md" />
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-primary/20 border border-brand-primary/30" />
      </div>
      {/* Data Grid Abstraction */}
      <div className="w-full flex-1 border border-white/5 rounded-xl bg-white/[0.02] p-4 flex flex-col gap-4">
        <div className="w-full h-8 border-b border-white/5 flex gap-4 pb-3">
          <div className="w-1/3 h-full bg-white/10 rounded-sm" />
          <div className="w-1/4 h-full bg-white/10 rounded-sm hidden sm:block" />
          <div className="w-1/4 h-full bg-white/10 rounded-sm" />
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-full h-8 flex gap-4 items-center">
            <div className="w-1/3 h-2 bg-white/5 rounded-sm" />
            <div className="w-1/4 h-2 bg-white/5 rounded-sm hidden sm:block" />
            <div className="w-1/4 h-2 bg-brand-primary/30 rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  </div>
);
