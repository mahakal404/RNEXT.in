import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EcosystemData, TransitionPhase, GlobalEvent } from '../../../lib/hero-ecosystems';

interface LaptopProps {
  className?: string;
  ecosystem: EcosystemData;
  phase: TransitionPhase;
  activeEvent?: GlobalEvent;
  isPaused: boolean;
  shouldReduceMotion: boolean;
}

export function Laptop({ 
  className = "", 
  ecosystem, 
  phase, 
  activeEvent, 
  isPaused, 
  shouldReduceMotion 
}: LaptopProps) {
  
  // Track previous ecosystem for fading out cleanly if needed, though simple variants usually suffice.
  const isSkeleton = phase === 'skeleton' || phase === 'fading';

  // Animation variants for entering elements
  const staggerVariants = {
    entering: { transition: { staggerChildren: 0.1 } },
    idle: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    skeleton: { opacity: 0, y: 10 },
    fading: { opacity: 0, y: 10 },
    entering: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 20 } },
    idle: { opacity: 1, y: 0 }
  };

  // Local state to simulate counter increase on events
  const [eventTriggered, setEventTriggered] = useState(false);
  
  useEffect(() => {
    if (activeEvent && activeEvent.type === 'NEW_LEAD') {
      const initTimer = setTimeout(() => setEventTriggered(true), 0);
      const t = setTimeout(() => setEventTriggered(false), 2000);
      return () => {
        clearTimeout(initTimer);
        clearTimeout(t);
      };
    }
  }, [activeEvent]);

  return (
    <div className={`relative w-full aspect-[16/10] mx-auto ${className}`}>
      {/* Screen */}
      <div 
        className="absolute inset-0 rounded-[4%] border-[4px] md:border-[8px] lg:border-[12px] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10 transition-colors duration-1000"
        style={{ backgroundColor: ecosystem.theme.background, borderColor: '#151C2F' }}
      >
        
        {/* Browser / Mac Window Bar */}
        <div className="h-[8%] min-h-[16px] max-h-[32px] bg-black/40 w-full flex items-center px-[2%] gap-[1%] border-b border-white/5 relative z-20">
          <div className="w-[1.5%] aspect-square rounded-full bg-[#FF5F56]"></div>
          <div className="w-[1.5%] aspect-square rounded-full bg-[#FFBD2E]"></div>
          <div className="w-[1.5%] aspect-square rounded-full bg-[#27C93F]"></div>
        </div>
        
        {/* Dynamic UI Content */}
        <motion.div 
          className="flex-1 p-[5%] flex flex-col relative overflow-hidden"
          animate={isSkeleton ? 'skeleton' : (phase === 'entering' ? 'entering' : 'idle')}
          variants={staggerVariants}
        >
          {/* Ambient Screen Glow based on Ecosystem */}
          <div 
            className="absolute top-0 right-0 w-[50%] aspect-square blur-[80px] rounded-full pointer-events-none transition-colors duration-1000 opacity-20"
            style={{ backgroundColor: ecosystem.theme.primary }}
          />

          <AnimatePresence mode="wait">
            {isSkeleton ? (
              <motion.div 
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col"
              >
                {/* Skeleton Header */}
                <div className="w-[30%] h-4 bg-white/5 rounded-full mb-[6%] animate-pulse" />
                <div className="grid grid-cols-2 gap-[4%] mb-[6%]">
                   <div className="h-16 bg-white/5 rounded-xl animate-pulse" />
                   <div className="h-16 bg-white/5 rounded-xl animate-pulse" />
                </div>
                <div className="flex-1 flex items-end gap-[2%]">
                  {[25, 60, 45, 80, 30, 75, 40, 55, 70].map((height, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-sm animate-pulse" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="content"
                initial="skeleton"
                animate={phase === 'entering' ? 'entering' : 'idle'}
                variants={staggerVariants}
                className="w-full h-full flex flex-col"
              >
                {/* Header */}
                <motion.div variants={itemVariants} className="flex justify-between items-center mb-[6%] relative z-10">
                   <div className="text-white font-bold text-[8px] md:text-sm lg:text-lg tracking-wider transition-colors">
                     {ecosystem.laptop.header}
                   </div>
                   <div 
                     className="h-1 lg:h-[3px] w-[15%] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-colors duration-700"
                     style={{ backgroundColor: ecosystem.theme.primary, boxShadow: `0 0 10px ${ecosystem.theme.primaryGlow}` }}
                   />
                </motion.div>
                
                {/* Metric Cards Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-[4%] mb-[6%] relative z-10">
                  {ecosystem.laptop.metrics.map((metric, idx) => (
                    <div 
                      key={idx} 
                      className="rounded-xl p-[8%] border border-white/5 flex flex-col justify-center transition-colors duration-700 relative overflow-hidden"
                      style={{ backgroundColor: ecosystem.theme.cardBg }}
                    >
                      {/* Subtle breathing background on idle */}
                      <motion.div 
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{ backgroundColor: ecosystem.theme.primary }}
                        animate={isPaused || shouldReduceMotion ? {} : { opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx }}
                      />
                      <span className="text-[6px] md:text-[10px] lg:text-xs text-text-muted font-bold uppercase tracking-wider mb-1 relative z-10">
                        {metric.label}
                      </span>
                      <motion.span 
                        className={`text-sm md:text-2xl lg:text-3xl text-white font-bold tracking-tight relative z-10 ${eventTriggered && idx === 0 ? 'text-green-400' : ''}`}
                        animate={eventTriggered && idx === 0 && !shouldReduceMotion ? { scale: [1, 1.1, 1] } : {}}
                      >
                        {metric.value}
                      </motion.span>
                    </div>
                  ))}
                </motion.div>
                
                {/* Bar Chart Section */}
                <motion.div variants={itemVariants} className="flex-1 relative z-10 w-full overflow-hidden flex items-end justify-between gap-[2%] sm:gap-[3%] pb-[2%]">
                  {ecosystem.laptop.chartBars.map((bar, i) => (
                    <div key={i} className="relative flex-1 flex flex-col justify-end h-full group">
                      <motion.div 
                        className={`w-full rounded-t-[1px] md:rounded-t-sm transition-colors duration-700 relative`}
                        style={{ 
                          height: bar.height, 
                          backgroundColor: bar.active ? ecosystem.theme.primary : 'rgba(255,255,255,0.1)',
                          boxShadow: bar.active ? `0 0 10px ${ecosystem.theme.primaryGlow}` : 'none'
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: bar.height }}
                        transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                      >
                        {bar.active && (
                          <div className="absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-white/50 rounded-t-sm" />
                        )}
                      </motion.div>
                    </div>
                  ))}
                  
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.05]">
                    <div className="border-t border-white w-full h-0"></div>
                    <div className="border-t border-white w-full h-0"></div>
                    <div className="border-t border-white w-full h-0"></div>
                    <div className="border-t border-white w-full h-0"></div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Fade Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"></div>
          
          {/* Animated Light Sweep (Screen level) */}
          {(!isPaused && !shouldReduceMotion) && (
            <motion.div 
              className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] z-50 pointer-events-none mix-blend-overlay"
              initial={{ left: "-100%" }}
              animate={phase === 'sweep' ? { left: ["-100%", "250%"] } : { left: "-100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      </div>
      
      {/* Base/Keyboard Area */}
      <div className="absolute -bottom-[2%] left-[-2%] right-[-2%] h-[4%] bg-[#151C2F] rounded-b-xl md:rounded-b-2xl border-t border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 flex justify-center">
         <div className="w-[20%] h-[50%] bg-[#060816] rounded-b-md"></div>
      </div>
    </div>
  );
}
