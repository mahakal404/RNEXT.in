import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EcosystemData, TransitionPhase, GlobalEvent } from '../../../lib/hero-ecosystems';

interface TabletProps {
  className?: string;
  ecosystem: EcosystemData;
  phase: TransitionPhase;
  activeEvent?: GlobalEvent;
  isPaused: boolean;
  shouldReduceMotion: boolean;
}

export function Tablet({ 
  className = "", 
  ecosystem, 
  phase, 
  activeEvent, 
  isPaused, 
  shouldReduceMotion 
}: TabletProps) {
  
  const isSkeleton = phase === 'skeleton' || phase === 'fading';

  const staggerVariants = {
    entering: { transition: { staggerChildren: 0.1 } },
    idle: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    skeleton: { opacity: 0, x: -10 },
    fading: { opacity: 0, x: -10 },
    entering: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
    idle: { opacity: 1, x: 0 }
  };

  const [eventTriggered, setEventTriggered] = useState(false);
  
  useEffect(() => {
    if (activeEvent) {
      setEventTriggered(true);
      const t = setTimeout(() => setEventTriggered(false), 2000);
      return () => clearTimeout(t);
    }
  }, [activeEvent]);

  return (
    <div className={`relative w-full aspect-[4/3] ${className}`}>
      {/* Tablet Screen */}
      <div 
        className="absolute inset-0 rounded-xl md:rounded-2xl border-[4px] md:border-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-[5%] ring-1 ring-white/10 transition-colors duration-1000"
        style={{ backgroundColor: ecosystem.theme.background, borderColor: '#1A2235' }}
      >
        
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-[8%] relative z-20">
          {/* Fake toggle switch */}
          <div className="w-[20%] h-3 md:h-4 bg-black/40 rounded-full p-[2px] flex items-center shadow-inner">
            <div className="w-[45%] h-full bg-white/20 rounded-full"></div>
          </div>
          {/* Fake menu dots */}
          <div className="flex gap-[4px]">
            <div className="w-1 md:w-1.5 aspect-square rounded-full bg-white/20"></div>
            <div className="w-1 md:w-1.5 aspect-square rounded-full bg-white/20"></div>
          </div>
        </div>

        <motion.div 
          className="flex-1 flex flex-col relative z-10 h-full"
          animate={isSkeleton ? 'skeleton' : (phase === 'entering' ? 'entering' : 'idle')}
          variants={staggerVariants}
        >
          <AnimatePresence mode="wait">
            {isSkeleton ? (
              <motion.div 
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col"
              >
                <div className="w-[40%] h-3 bg-white/5 rounded-full mb-4 animate-pulse" />
                <div className="w-12 h-12 rounded-full border-4 border-white/5 mb-8 animate-pulse" />
                <div className="flex-1 w-full bg-white/5 rounded-xl animate-pulse" />
              </motion.div>
            ) : (
              <motion.div 
                key="content"
                initial="skeleton"
                animate={phase === 'entering' ? 'entering' : 'idle'}
                variants={staggerVariants}
                className="w-full h-full flex flex-col"
              >
                {/* Growth Rate Section */}
                <motion.div variants={itemVariants} className="flex justify-between items-end mb-[8%] relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[6px] md:text-[8px] text-text-muted font-bold tracking-wider mb-1 transition-colors">
                      {ecosystem.tablet.header}
                    </span>
                    {/* Progress ring */}
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
                           strokeLinecap="round"
                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                           fill="none"
                           stroke={ecosystem.theme.primary}
                           strokeWidth="4"
                           strokeDasharray="100, 100"
                           initial={{ strokeDasharray: "0, 100" }}
                           animate={{ strokeDasharray: `${ecosystem.tablet.ringValue}, 100` }}
                           transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                         />
                       </svg>
                       <div className="absolute inset-0 flex items-center justify-center">
                         <motion.span 
                           className="text-white text-[8px] md:text-xs font-bold"
                           animate={eventTriggered && !shouldReduceMotion ? { scale: [1, 1.2, 1], color: ['#fff', ecosystem.theme.primary, '#fff'] } : {}}
                         >
                           {ecosystem.tablet.ringLabel}
                         </motion.span>
                       </div>
                    </div>
                  </div>
                </motion.div>

                {/* Line Chart Section */}
                <motion.div variants={itemVariants} className="flex-1 relative mb-[8%] z-10 w-full overflow-hidden flex items-end">
                  {/* Horizontal Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-t border-white/20 w-full h-0"></div>
                    <div className="border-t border-white/20 w-full h-0"></div>
                    <div className="border-t border-white/20 w-full h-0"></div>
                  </div>
                  
                  <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    {/* Gradient Fill under the line */}
                    <defs>
                      <linearGradient id="chartGradientTablet" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={ecosystem.theme.primary} stopOpacity="0.4"/>
                        <stop offset="100%" stopColor={ecosystem.theme.primary} stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d={`${ecosystem.tablet.chartPath} L 100 60 L 0 60 Z`}
                      fill="url(#chartGradientTablet)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    {/* The line itself */}
                    <motion.path 
                      d={ecosystem.tablet.chartPath}
                      fill="none"
                      stroke={ecosystem.theme.primary}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                      style={{ filter: `drop-shadow(0px 4px 6px ${ecosystem.theme.primaryGlow})` }}
                    />
                  </svg>
                </motion.div>

                {/* Bottom Status Pill */}
                <motion.div variants={itemVariants} className="w-full rounded-full px-[5%] py-[3%] flex items-center gap-[5%] relative z-10 border border-white/5 transition-colors duration-1000" style={{ backgroundColor: ecosystem.theme.cardBg }}>
                   <motion.div 
                     className="w-1.5 h-1.5 rounded-full"
                     style={{ backgroundColor: ecosystem.tablet.statusColor, boxShadow: `0 0 8px ${ecosystem.tablet.statusColor}` }}
                     animate={isPaused || shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   />
                   <span className="text-[6px] md:text-[8px] text-white/80 tracking-wide font-medium">
                     {ecosystem.tablet.statusLabel}
                   </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Decorative Glow Background */}
        <div 
          className="absolute top-[20%] right-[-20%] w-[80%] aspect-square blur-[40px] rounded-full pointer-events-none transition-colors duration-1000 opacity-20"
          style={{ backgroundColor: ecosystem.theme.primary }}
        />

        {/* Animated Light Sweep (Screen level) */}
        {(!isPaused && !shouldReduceMotion) && (
          <motion.div 
            className="absolute top-0 bottom-0 w-[60%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] z-50 pointer-events-none mix-blend-overlay"
            initial={{ left: "-100%" }}
            animate={phase === 'sweep' ? { left: ["-100%", "250%"] } : { left: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}
