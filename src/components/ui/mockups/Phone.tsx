import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EcosystemData, TransitionPhase, GlobalEvent } from '../../../lib/hero-ecosystems';

interface PhoneProps {
  className?: string;
  ecosystem: EcosystemData;
  phase: TransitionPhase;
  activeEvent?: GlobalEvent;
  isPaused: boolean;
  shouldReduceMotion: boolean;
}

export function Phone({ 
  className = "", 
  ecosystem, 
  phase, 
  activeEvent, 
  isPaused, 
  shouldReduceMotion 
}: PhoneProps) {
  
  const isSkeleton = phase === 'skeleton' || phase === 'fading';

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

  const [eventTriggered, setEventTriggered] = useState(false);
  
  useEffect(() => {
    if (activeEvent) {
      const initTimer = setTimeout(() => setEventTriggered(true), 0);
      const t = setTimeout(() => setEventTriggered(false), 2000);
      return () => {
        clearTimeout(initTimer);
        clearTimeout(t);
      };
    }
  }, [activeEvent]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return ecosystem.theme.primary;
      case 'success': return '#27C93F';
      case 'warning': return '#FFBD2E';
      default: return 'rgba(255,255,255,0.2)';
    }
  };

  // Generate random widths for the list item bars (in the original UI they were bars)
  // We will map ecosystem.phone.list to visual horizontal bars
  const randomWidths = ['85%', '60%', '40%'];

  return (
    <div className={`relative w-full aspect-[1/2] ${className}`}>
      {/* Phone Screen */}
      <div 
        className="absolute inset-0 rounded-[15%] border-[4px] md:border-[6px] shadow-[15px_15px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-[10%] ring-1 ring-white/10 transition-colors duration-1000"
        style={{ backgroundColor: ecosystem.theme.background, borderColor: '#1A2235' }}
      >
        
        {/* Dynamic Island / Notch fake */}
        <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[30%] h-[4%] bg-[#1A2235] rounded-full z-20 transition-colors duration-1000"></div>

        <motion.div 
          className="flex-1 flex flex-col pt-[12%] relative z-10"
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
                <div className="w-[60%] h-4 bg-white/5 rounded-full mb-8 animate-pulse" />
                <div className="w-[80%] h-8 bg-white/5 rounded-md mb-2 animate-pulse" />
                <div className="w-[40%] h-2 bg-white/5 rounded-full mb-12 animate-pulse" />
                
                <div className="flex-1 flex flex-col gap-4 mt-auto">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-full h-3 bg-white/5 rounded-full animate-pulse" />
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
                <motion.div variants={itemVariants} className="flex items-center gap-1.5 mb-[15%]">
                   <div 
                     className="px-2 py-0.5 rounded-full text-[6px] md:text-[8px] font-bold transition-colors duration-700 text-white"
                     style={{ backgroundColor: ecosystem.theme.primary }}
                   >
                     {ecosystem.phone.badge}
                   </div>
                   <div 
                     className="w-1.5 h-1.5 rounded-full transition-colors duration-700"
                     style={{ backgroundColor: ecosystem.theme.primary, boxShadow: `0 0 8px ${ecosystem.theme.primaryGlow}` }}
                   />
                </motion.div>

                {/* Main Titles */}
                <motion.div variants={itemVariants} className="mb-[15%] flex flex-col">
                   <motion.span 
                     className="text-lg md:text-2xl text-white font-bold tracking-tighter leading-none mb-1 transition-colors"
                     animate={eventTriggered && !shouldReduceMotion ? { scale: [1, 1.05, 1], x: [0, 5, 0] } : {}}
                   >
                     {ecosystem.phone.title}
                   </motion.span>
                   <span className="text-[7px] md:text-[9px] text-text-muted font-medium tracking-widest uppercase transition-colors">
                     {ecosystem.phone.subtitle}
                   </span>
                </motion.div>

                {/* Data List (Visual Bars + Labels) */}
                <motion.div variants={itemVariants} className="flex flex-col gap-[8%] mt-auto pb-[10%]">
                  {ecosystem.phone.list.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1 relative z-10">
                      <div className="flex justify-between items-center">
                        <span className="text-[6px] md:text-[8px] text-white/80 font-medium">
                          {item.label}
                        </span>
                        {/* Status dot */}
                        <div 
                          className="w-1 h-1 rounded-full transition-colors duration-700" 
                          style={{ backgroundColor: getStatusColor(item.status) }}
                        />
                      </div>
                      <div className="w-full h-1.5 md:h-2 bg-black/40 rounded-full overflow-hidden relative">
                         <motion.div 
                           className="absolute top-0 left-0 h-full rounded-full flex justify-end transition-colors duration-700"
                           style={{ backgroundColor: getStatusColor(item.status) }}
                           initial={{ width: 0 }}
                           animate={{ width: randomWidths[idx] }}
                           transition={{ duration: 1.2, ease: "easeOut", delay: 1 + (idx * 0.2) }}
                         >
                            <div className="w-[10%] h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
                         </motion.div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Decorative Glow Background */}
        <div 
          className="absolute bottom-[-10%] right-[-30%] w-[100%] aspect-square blur-[30px] rounded-full pointer-events-none transition-colors duration-1000 opacity-15"
          style={{ backgroundColor: ecosystem.theme.primary }}
        />

        {/* Animated Light Sweep (Screen level) */}
        {(!isPaused && !shouldReduceMotion) && (
          <motion.div 
            className="absolute top-0 bottom-0 w-[80%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] z-50 pointer-events-none mix-blend-overlay"
            initial={{ left: "-100%" }}
            animate={phase === 'sweep' ? { left: ["-100%", "250%"] } : { left: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}
