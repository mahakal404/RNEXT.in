import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EcosystemData, LiveEvent } from './hero-ecosystems';

interface TabletProps {
  className?: string;
  ecosystem: EcosystemData;
  transitionState: 'idle' | 'fading_out' | 'skeleton' | 'fading_in';
  activeEvent: LiveEvent | null;
}

export function Tablet({ className = "", ecosystem, transitionState, activeEvent }: TabletProps) {
  const shouldReduceMotion = useReducedMotion();
  
  const showContent = transitionState === 'idle' || transitionState === 'fading_in';
  const showSkeleton = transitionState === 'skeleton';

  // Handle Event Updates (bump progress)
  const [bumpProgress, setBumpProgress] = useState(ecosystem.tablet.progress);
  useEffect(() => {
    if (activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'tablet')) {
      setBumpProgress(prev => Math.min(100, prev + Math.floor(Math.random() * 5) + 1));
    }
  }, [activeEvent]);
  
  useEffect(() => {
    if (transitionState === 'skeleton' || transitionState === 'fading_out') {
      setBumpProgress(ecosystem.tablet.progress);
    }
  }, [ecosystem, transitionState]);

  // Subtle breathing scale for background cards
  const breatheAnimation = shouldReduceMotion ? {} : {
    scale: transitionState === 'idle' ? [1, 1.02, 1] : 1,
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  };

  return (
    <div className={`relative w-full aspect-[4/3] mx-auto ${className}`}>
      <div className="absolute inset-0 bg-[#111827] rounded-[5%] border-[6px] md:border-[10px] lg:border-[14px] border-[#0B1020] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
        
        <div className="flex-1 bg-[#060816] p-[6%] flex flex-col relative overflow-hidden gap-[6%]">
          
          <motion.div 
            className="absolute top-1/2 left-0 w-[50%] aspect-square rounded-full pointer-events-none"
            style={{ backgroundColor: `${ecosystem.colors.secondary}15`, filter: 'blur(50px)' }}
            animate={{ opacity: transitionState === 'idle' ? [0.4, 0.7, 0.4] : 0, scale: transitionState === 'idle' ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Header */}
          <div className="flex justify-between items-center relative z-10">
            <motion.div className="h-2 lg:h-4 w-[35%] bg-white/80 rounded-md" animate={{ opacity: showContent ? 1 : 0 }} />
            <motion.div 
              className="w-[10%] aspect-square rounded-full flex items-center justify-center relative"
              style={{ backgroundColor: `${ecosystem.colors.primary}20` }}
              animate={{ opacity: showContent ? 1 : 0 }}
            >
              {activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'tablet') && (
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: ecosystem.colors.primary }}
                />
              )}
            </motion.div>
          </div>
          
          <div className="flex-1 relative z-10 flex flex-col gap-[6%]">
            <AnimatePresence mode="wait">
              {showSkeleton && (
                <motion.div 
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col gap-[6%]"
                >
                  <div className="grid grid-cols-3 gap-[4%] h-[50%]">
                    <div className="col-span-2 bg-white/5 rounded-lg animate-pulse" />
                    <div className="col-span-1 flex flex-col gap-[8%]">
                      <div className="flex-1 bg-white/5 rounded-lg animate-pulse" />
                      <div className="flex-1 bg-white/5 rounded-lg animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg animate-pulse" />
                </motion.div>
              )}

              {showContent && (
                <motion.div 
                  key="content"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                  className="absolute inset-0 flex flex-col gap-[6%]"
                >
                  {/* Grid Layout */}
                  <div className="grid grid-cols-3 gap-[4%] h-[50%]">
                    <motion.div 
                      variants={{ hidden: { x: -10, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                      animate={breatheAnimation.scale ? { scale: breatheAnimation.scale } : {}}
                      transition={breatheAnimation.transition as any}
                      className="col-span-2 bg-white/5 rounded-lg border border-white/10 p-[4%] flex flex-col justify-between"
                    >
                      <div className="text-[6px] md:text-[8px] text-white/50 uppercase tracking-wider">{ecosystem.tablet.chartLabel}</div>
                      <div className="w-full h-1/2 border-b border-l border-white/20 relative">
                        {/* Fake Chart Line animated drawing */}
                        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full overflow-visible" style={{ color: ecosystem.colors.primary }}>
                           <motion.path 
                             d="M0,50 L20,30 L40,40 L60,10 L80,20 L100,0" 
                             fill="none" 
                             stroke="currentColor" 
                             strokeWidth="3" 
                             vectorEffect="non-scaling-stroke"
                             initial={{ pathLength: 0 }}
                             animate={{ pathLength: transitionState === 'idle' ? 1 : 0 }}
                             transition={{ duration: 1.5, ease: "easeInOut" }}
                           />
                           <motion.path 
                             d="M0,50 L20,30 L40,40 L60,10 L80,20 L100,0 L100,50 L0,50" 
                             fill="currentColor" 
                             fillOpacity="0.2" 
                             stroke="none" 
                             initial={{ opacity: 0 }}
                             animate={{ opacity: transitionState === 'idle' ? 1 : 0 }}
                             transition={{ duration: 1, delay: 1 }}
                           />
                        </svg>
                      </div>
                    </motion.div>
                    
                    <div className="col-span-1 flex flex-col gap-[8%]">
                      <motion.div 
                        variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
                        className="flex-1 rounded-lg border flex items-center justify-center p-[10%] relative overflow-hidden"
                        style={{ backgroundColor: `${ecosystem.colors.secondary}20`, borderColor: `${ecosystem.colors.secondary}30` }}
                      >
                         <motion.div 
                           className="w-[80%] aspect-square rounded-full border-[3px] lg:border-[4px] border-t-transparent"
                           style={{ borderColor: ecosystem.colors.secondary, borderTopColor: 'transparent' }}
                           animate={{ rotate: 360 }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                         />
                         <div className="absolute inset-0 flex items-center justify-center text-[8px] md:text-xs text-white font-bold">{bumpProgress}%</div>
                      </motion.div>
                      
                      <motion.div 
                        variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="flex-1 bg-white/5 rounded-lg border border-white/10 p-[10%] flex flex-col justify-between"
                      >
                         <div className="h-[15%] w-[60%] bg-white/40 rounded-full"></div>
                         <div className="h-[30%] w-[90%] bg-white/90 rounded-[2px] lg:rounded-md"></div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* List items sliding up */}
                  <motion.div 
                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    className="flex-1 bg-white/5 rounded-lg border border-white/10 p-[4%] flex flex-col justify-center gap-[10%]"
                  >
                     {ecosystem.tablet.listItems.map((item, idx) => (
                       <motion.div 
                         key={idx}
                         initial={{ x: -10, opacity: 0 }}
                         animate={{ x: 0, opacity: 1 }}
                         transition={{ delay: 0.5 + idx * 0.1 }}
                         className={`flex justify-between items-center p-[2%] rounded-sm ${item.active ? 'bg-white/10 border border-white/5' : ''}`}
                       >
                         <div className="flex flex-col gap-[2px]">
                           <span className="text-[6px] md:text-[8px] text-white font-medium">{item.title}</span>
                           <span className="text-[4px] md:text-[6px] text-white/50">{item.subtitle}</span>
                         </div>
                         {item.active && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ecosystem.colors.primary }} />}
                       </motion.div>
                     ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </div>
  );
}
