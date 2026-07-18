import React from 'react';
import { motion } from 'framer-motion';

export function Tablet({ className = "" }: { className?: string }) {
  // SVG points for a smooth upward curve
  const linePath = "M 0 50 C 20 45, 40 55, 60 30 C 80 5, 90 20, 100 0";

  return (
    <div className={`relative w-full aspect-[4/3] ${className}`}>
      {/* Tablet Screen */}
      <div className="absolute inset-0 bg-[#0C1222] rounded-xl md:rounded-2xl border-[4px] md:border-[6px] border-[#1A2235] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-[5%] ring-1 ring-white/10">
        
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-[8%] relative z-10">
          {/* Fake toggle switch */}
          <div className="w-[20%] h-3 md:h-4 bg-[#151C2F] rounded-full p-[2px] flex items-center shadow-inner">
            <div className="w-[45%] h-full bg-white/20 rounded-full"></div>
          </div>
          {/* Fake menu dots */}
          <div className="flex gap-[4px]">
            <div className="w-1 md:w-1.5 aspect-square rounded-full bg-white/20"></div>
            <div className="w-1 md:w-1.5 aspect-square rounded-full bg-white/20"></div>
          </div>
        </div>

        {/* Growth Rate Section */}
        <div className="flex justify-between items-end mb-[8%] relative z-10">
          <div className="flex flex-col">
            <span className="text-[6px] md:text-[8px] text-text-muted font-bold tracking-wider mb-1">
              GROWTH RATE
            </span>
            {/* Fake progress ring representing 89% */}
            <div className="relative w-8 h-8 md:w-12 md:h-12 mt-1">
               <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                 <path
                   className="text-white/10"
                   d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="4"
                 />
                 <motion.path
                   className="text-[#00D4FF]"
                   strokeLinecap="round"
                   d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="4"
                   strokeDasharray="100, 100"
                   initial={{ strokeDasharray: "0, 100" }}
                   animate={{ strokeDasharray: "89, 100" }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                 />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white text-[8px] md:text-xs font-bold">89%</span>
               </div>
            </div>
          </div>
        </div>

        {/* Line Chart Section */}
        <div className="flex-1 relative mb-[8%] z-10 w-full overflow-hidden flex items-end">
          {/* Horizontal Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="border-t border-white/20 w-full h-0"></div>
            <div className="border-t border-white/20 w-full h-0"></div>
            <div className="border-t border-white/20 w-full h-0"></div>
          </div>
          
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            {/* Gradient Fill under the line */}
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#00D4FF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <motion.path 
              d={`M 0 60 L 0 50 C 20 45, 40 55, 60 30 C 80 5, 90 20, 100 0 L 100 60 Z`}
              fill="url(#chartGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            {/* The line itself */}
            <motion.path 
              d={linePath}
              fill="none"
              stroke="#00D4FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
              style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 212, 255, 0.4))" }}
            />
          </svg>
        </div>

        {/* Bottom Status Pill */}
        <div className="w-full bg-[#151C2F] rounded-full px-[5%] py-[3%] flex items-center gap-[5%] relative z-10 border border-white/5">
           <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.8)]"></div>
           <span className="text-[6px] md:text-[8px] text-white/80 tracking-wide font-medium">
             Server Region US-East
           </span>
        </div>

        {/* Decorative Glow Background */}
        <div className="absolute top-[20%] right-[-20%] w-[80%] aspect-square bg-[#00D4FF]/10 blur-[40px] rounded-full pointer-events-none"></div>

      </div>
    </div>
  );
}
