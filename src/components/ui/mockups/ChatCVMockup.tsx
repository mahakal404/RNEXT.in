"use client";
import React from 'react';

export const ChatCVMockup = () => (
  <div className="w-full h-full bg-[#0D0B14] p-6 md:p-12 lg:p-20 flex relative overflow-hidden items-center justify-center rounded-[32px]">
     <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none will-change-transform transform-gpu" />
     <div className="w-full max-w-4xl bg-[#130E1F] rounded-[32px] border border-white/5 flex flex-col overflow-hidden shadow-2xl relative z-10 aspect-[4/3] md:aspect-[16/10]">
       <div className="h-12 md:h-16 w-full border-b border-white/5 flex items-center px-4 md:px-6 gap-4">
         <div className="h-6 md:h-8 w-6 md:h-8 rounded-full bg-brand-accent/30" />
         <div className="h-3 md:h-4 w-24 md:w-32 bg-white/20 rounded-md" />
       </div>
       <div className="flex-1 p-4 md:p-8 flex flex-col gap-6 relative">
          <div className="w-5/6 md:w-3/4 bg-white/5 p-4 md:p-6 rounded-2xl rounded-tl-sm self-start border border-white/5 flex flex-col gap-3 md:gap-4">
             <div className="h-3 md:h-4 w-full bg-white/40 rounded-sm" />
             <div className="h-3 md:h-4 w-5/6 bg-white/40 rounded-sm" />
             <div className="h-3 md:h-4 w-1/2 bg-white/20 rounded-sm" />
          </div>
          <div className="w-4/5 md:w-2/3 bg-brand-accent/20 p-4 md:p-6 rounded-2xl rounded-tr-sm self-end border border-brand-accent/30 flex flex-col gap-3 md:gap-4">
             <div className="h-3 md:h-4 w-full bg-white/90 rounded-sm" />
             <div className="h-3 md:h-4 w-3/4 bg-white/90 rounded-sm" />
          </div>
       </div>
       <div className="p-4 md:p-6 border-t border-white/5 bg-[#130E1F]">
         <div className="h-12 md:h-14 w-full bg-[#0A0710] rounded-full border border-white/10 flex items-center px-4 md:px-6 justify-between">
            <div className="h-3 md:h-4 w-24 md:w-32 bg-white/20 rounded-md" />
            <div className="h-8 md:h-10 w-8 md:h-10 rounded-full bg-brand-accent flex items-center justify-center" />
         </div>
       </div>
     </div>
  </div>
);
