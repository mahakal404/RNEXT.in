import React from 'react';
import { MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Laptop({ className = "" }: { className?: string }) {
  // Bar chart data matching the visual rhythm of the image
  const bars = [
    { height: '35%', active: true },
    { height: '25%', active: false },
    { height: '40%', active: false },
    { height: '55%', active: false }, // Hovered bar
    { height: '35%', active: false },
    { height: '45%', active: false },
    { height: '30%', active: false },
    { height: '40%', active: false },
    { height: '65%', active: true },
  ];

  return (
    <div className={`relative w-full aspect-[16/10] mx-auto ${className}`}>
      {/* Screen */}
      <div className="absolute inset-0 bg-[#0B1020] rounded-[4%] border-[4px] md:border-[8px] lg:border-[12px] border-[#151C2F] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
        
        {/* Browser / Mac Window Bar */}
        <div className="h-[8%] min-h-[16px] max-h-[32px] bg-[#060816] w-full flex items-center px-[2%] gap-[1%] border-b border-white/5">
          <div className="w-[1.5%] aspect-square rounded-full bg-[#FF5F56]"></div>
          <div className="w-[1.5%] aspect-square rounded-full bg-[#FFBD2E]"></div>
          <div className="w-[1.5%] aspect-square rounded-full bg-[#27C93F]"></div>
        </div>
        
        {/* Analytics UI */}
        <div className="flex-1 bg-gradient-to-b from-[#060816] to-[#0B1020] p-[5%] flex flex-col relative overflow-hidden">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-[6%] relative z-10">
             <div className="text-white font-bold text-[8px] md:text-sm lg:text-lg tracking-wider">
               ANALYTICS
             </div>
             <div className="h-1 lg:h-[3px] w-[15%] bg-[#00D4FF] rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
          </div>
          
          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 gap-[4%] mb-[6%] relative z-10">
            {/* Revenue Card */}
            <div className="bg-[#0f1525] rounded-xl p-[8%] border border-white/5 flex flex-col justify-center">
              <span className="text-[6px] md:text-[10px] lg:text-xs text-text-muted font-bold uppercase tracking-wider mb-1">
                Total Revenue
              </span>
              <span className="text-sm md:text-2xl lg:text-3xl text-white font-bold tracking-tight">
                $124,500
              </span>
            </div>
            
            {/* Active Users Card */}
            <div className="bg-[#0f1525] rounded-xl p-[8%] border border-white/5 flex flex-col justify-center">
              <span className="text-[6px] md:text-[10px] lg:text-xs text-text-muted font-bold uppercase tracking-wider mb-1">
                Active Users
              </span>
              <span className="text-sm md:text-2xl lg:text-3xl text-white font-bold tracking-tight">
                8,444
              </span>
            </div>
          </div>

          {/* Bar Chart Section */}
          <div className="flex-1 border-t border-white/5 relative z-10 flex items-end justify-between px-[2%] pb-[4%] pt-[8%]">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-t border-white/20 w-full h-0"></div>
              <div className="border-t border-white/20 w-full h-0"></div>
              <div className="border-t border-white/20 w-full h-0"></div>
            </div>

            {/* Bars */}
            {bars.map((bar, idx) => (
              <div key={idx} className="relative w-[8%] h-full flex items-end">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: bar.height }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 + (idx * 0.05) }}
                  className={`w-full rounded-t-sm md:rounded-t-md ${bar.active ? 'bg-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.4)]' : 'bg-[#008B99]/60'}`}
                />
                {/* Mouse Cursor on 4th Bar */}
                {idx === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, x: -10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
                    className="absolute top-[-25px] right-[-15px] z-20 text-white drop-shadow-xl"
                  >
                    <MousePointer2 size={16} fill="white" className="text-[#151C2F]" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Fade Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#060816] to-transparent pointer-events-none z-10">
          </div>
          
          {/* Animated Light Sweep (Screen level) */}
          <motion.div 
            className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] z-50 pointer-events-none mix-blend-overlay"
            initial={{ left: "-100%" }}
            animate={{ left: ["-100%", "250%"] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 7 }}
          />
        </div>
      </div>
      
      {/* Base/Keyboard Area */}
      <div className="absolute -bottom-[2%] left-[-2%] right-[-2%] h-[4%] bg-[#151C2F] rounded-b-xl md:rounded-b-2xl border-t border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 flex justify-center">
         <div className="w-[20%] h-[50%] bg-[#060816] rounded-b-md"></div>
      </div>
    </div>
  );
}
