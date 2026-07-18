import React from 'react';
import { motion } from 'framer-motion';

export function Phone({ className = "" }: { className?: string }) {
  const bars = [
    { width: '85%' },
    { width: '60%' },
    { width: '40%' },
  ];

  return (
    <div className={`relative w-full aspect-[1/2] ${className}`}>
      {/* Phone Screen */}
      <div className="absolute inset-0 bg-[#0C1222] rounded-[15%] border-[4px] md:border-[6px] border-[#1A2235] shadow-[15px_15px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-[10%] ring-1 ring-white/10">
        
        {/* Dynamic Island / Notch fake */}
        <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[30%] h-[4%] bg-[#1A2235] rounded-full z-20"></div>

        <div className="flex-1 flex flex-col pt-[12%] relative z-10">
          
          {/* Header */}
          <div className="flex items-center gap-1.5 mb-[15%]">
             <span className="text-white font-bold text-[8px] md:text-xs tracking-wide">
               Live <br/> Overview
             </span>
             <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.8)] animate-pulse"></div>
          </div>

          {/* Large Metric */}
          <div className="mb-[15%] flex flex-col">
             <motion.span 
               className="text-2xl md:text-4xl text-white font-bold tracking-tighter leading-none mb-1"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               45.2K
             </motion.span>
             <span className="text-[7px] md:text-[9px] text-text-muted font-medium tracking-widest uppercase">
               Visits
             </span>
          </div>

          {/* Horizontal Progress Bars */}
          <div className="flex flex-col gap-[8%] mt-auto pb-[10%]">
            {bars.map((bar, idx) => (
              <div key={idx} className="w-full h-1.5 md:h-2 bg-[#151C2F] rounded-full overflow-hidden relative">
                 <motion.div 
                   className="absolute top-0 left-0 h-full bg-[#00D4FF] rounded-full flex justify-end"
                   initial={{ width: 0 }}
                   animate={{ width: bar.width }}
                   transition={{ duration: 1.2, ease: "easeOut", delay: 1 + (idx * 0.2) }}
                 >
                    {/* Glowing indicator head */}
                    <div className="w-[10%] h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
                 </motion.div>
              </div>
            ))}
          </div>

        </div>

        {/* Decorative Glow Background */}
        <div className="absolute bottom-[-10%] right-[-30%] w-[100%] aspect-square bg-[#00D4FF]/15 blur-[30px] rounded-full pointer-events-none"></div>

      </div>
    </div>
  );
}
