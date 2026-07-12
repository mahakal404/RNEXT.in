"use client";
import React from 'react';

export const ProjectsCommerceMockup = () => (
  <div className="w-full h-full bg-[#070D0B] flex flex-col relative overflow-hidden items-center justify-center p-6 md:p-12 lg:p-20 rounded-[32px]">
    <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none will-change-transform transform-gpu" />
    <div className="w-full max-w-5xl flex gap-10 items-stretch relative z-10 h-full">
       <div className="w-1/4 hidden lg:flex flex-col gap-8 pr-6 border-r border-white/5 pt-4">
         <div className="h-6 w-24 bg-white/20 rounded-md" />
         <div className="flex flex-col gap-4">
           <div className="h-4 w-full bg-white/10 rounded-sm" />
           <div className="h-4 w-3/4 bg-white/10 rounded-sm" />
           <div className="h-4 w-5/6 bg-white/10 rounded-sm" />
           <div className="h-4 w-1/2 bg-white/10 rounded-sm" />
         </div>
       </div>
       <div className="flex-1 grid grid-cols-2 gap-4 md:gap-8 relative">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex flex-col gap-3 md:gap-4">
              <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent" />
              </div>
              <div className="h-3 md:h-4 w-3/4 bg-white/40 rounded-sm" />
              <div className="h-3 md:h-4 w-1/3 bg-brand-primary/80 rounded-sm" />
            </div>
          ))}
       </div>
    </div>
  </div>
);
