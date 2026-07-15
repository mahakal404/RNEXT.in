import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EcosystemData, LiveEvent } from './hero-ecosystems';

interface PhoneProps {
  className?: string;
  ecosystem: EcosystemData;
  transitionState: 'idle' | 'fading_out' | 'skeleton' | 'fading_in';
  activeEvent: LiveEvent | null;
}

export function Phone({ className = "", ecosystem, transitionState, activeEvent }: PhoneProps) {
  const shouldReduceMotion = useReducedMotion();
  const showContent = transitionState === 'idle' || transitionState === 'fading_in';
  const showSkeleton = transitionState === 'skeleton';
  
  // Badge logic triggered by events
  const [badgeCount, setBadgeCount] = useState(0);
  useEffect(() => {
    if (activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'mobile')) {
      setBadgeCount(prev => prev + 1);
    }
  }, [activeEvent]);

  useEffect(() => {
    if (transitionState === 'skeleton') setBadgeCount(0);
  }, [transitionState]);

  return (
    <div className={`relative w-full aspect-[9/19.5] mx-auto ${className}`}>
      <div className="absolute inset-0 bg-[#0B1020] rounded-[10%] lg:rounded-[12%] border-[4px] md:border-[6px] lg:border-[8px] border-[#151C2F] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-[3%] left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
           <motion.div 
             className="bg-[#060816] rounded-full flex items-center overflow-hidden"
             animate={{ 
               width: (activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'mobile')) ? '70%' : '35%',
               height: (activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'mobile')) ? '12px' : '4px',
               padding: (activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'mobile')) ? '0 4px' : '0'
             }}
             transition={{ type: "spring", damping: 15 }}
           >
              {activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'mobile') && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 w-full">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ecosystem.colors.primary }} />
                  <div className="text-[4px] text-white flex-1 truncate">{activeEvent.message}</div>
                </motion.div>
              )}
           </motion.div>
        </div>

        <div className="flex-1 bg-[#060816] flex flex-col relative overflow-hidden pt-[15%] px-[6%] pb-[8%] gap-[6%]">
           
           <AnimatePresence mode="wait">
              {showSkeleton && (
                <motion.div 
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pt-[15%] px-[6%] pb-[8%] flex flex-col gap-[6%]"
                >
                   <div className="flex justify-between items-center h-[10%]">
                     <div className="w-[50%] h-[12px] bg-white/5 rounded-md animate-pulse" />
                     <div className="w-[15%] aspect-square bg-white/5 rounded-full animate-pulse" />
                   </div>
                   <div className="w-full h-[25%] bg-white/5 rounded-xl animate-pulse" />
                   <div className="flex-1 flex flex-col gap-[5%]">
                      <div className="h-[30%] bg-white/5 rounded-lg animate-pulse" />
                      <div className="h-[30%] bg-white/5 rounded-lg animate-pulse" />
                   </div>
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
                  className="absolute inset-0 pt-[15%] px-[6%] pb-[8%] flex flex-col gap-[6%]"
                >
                  {/* App Header */}
                  <div className="flex justify-between items-center relative z-10">
                    <motion.div variants={{ hidden: { x: -10, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="flex flex-col gap-[20%] w-[50%] h-[12px] lg:h-[20px]">
                        <div className="text-[8px] md:text-[10px] text-white font-bold leading-none">{ecosystem.mobile.heroTitle}</div>
                        <div className="text-[5px] md:text-[7px] text-white/50">{ecosystem.mobile.heroSubtitle}</div>
                    </motion.div>
                    <motion.div 
                      variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
                      className="w-[15%] aspect-square rounded-full flex items-center justify-center relative"
                      style={{ backgroundColor: `${ecosystem.colors.primary}20` }}
                    >
                      <AnimatePresence>
                        {badgeCount > 0 && (
                          <motion.div 
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full flex items-center justify-center text-[5px] text-white font-bold"
                            style={{ backgroundColor: ecosystem.colors.primary }}
                          >
                            {badgeCount}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Hero Card */}
                  <motion.div 
                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    className="w-full h-[25%] rounded-xl p-[6%] flex flex-col justify-end shadow-lg relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${ecosystem.colors.secondary}, ${ecosystem.colors.accent})` }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 w-[150%] h-[150%] rounded-full opacity-20 pointer-events-none"
                      style={{ backgroundColor: ecosystem.colors.primary }}
                      animate={{ scale: [1, 1.2, 1], x: [0, -10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <div className="relative z-10 flex flex-col gap-1">
                      <div className="text-[12px] md:text-sm text-white font-bold">{ecosystem.mobile.cardItems[0]?.value}</div>
                      <div className="text-[6px] md:text-[8px] text-white/80">{ecosystem.mobile.cardItems[0]?.label}</div>
                    </div>
                  </motion.div>

                  {/* Content List */}
                  <div className="flex-1 flex flex-col gap-[5%]">
                     {[0, 1].map((i) => (
                       <motion.div 
                         key={i}
                         variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                         transition={{ delay: 0.3 + i * 0.1 }}
                         className="flex items-center gap-[5%] p-[4%] bg-white/5 rounded-lg border border-white/5 h-[35%]"
                       >
                          <div className="h-[80%] aspect-square rounded-md bg-white/10 overflow-hidden relative">
                             <motion.div 
                               className="absolute inset-0" 
                               style={{ backgroundColor: `${ecosystem.colors.primary}40` }} 
                               animate={{ y: ['100%', '0%', '100%'] }} 
                               transition={{ duration: 3, repeat: Infinity, delay: i }}
                             />
                          </div>
                          <div className="flex flex-col gap-[15%] flex-1 h-[60%] justify-center">
                             <div className="h-[40%] w-full bg-white/70 rounded-[2px]"></div>
                             <div className="h-[30%] w-[60%] bg-white/30 rounded-[2px]"></div>
                          </div>
                       </motion.div>
                     ))}
                  </div>

                  {/* Bottom Bar */}
                  <motion.div 
                    variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    className="h-[10%] w-full bg-white/5 rounded-full flex items-center justify-around px-[10%] border border-white/10 backdrop-blur-md"
                  >
                     <motion.div 
                       className="w-[15%] h-[30%] rounded-[2px]" 
                       style={{ backgroundColor: ecosystem.colors.primary }}
                       animate={{ scale: transitionState === 'idle' ? [1, 1.2, 1] : 1 }}
                       transition={{ duration: 2, repeat: Infinity }}
                     />
                     <div className="w-[15%] h-[30%] rounded-full bg-white/30"></div>
                     <div className="w-[15%] h-[30%] rounded-[2px] bg-white/30"></div>
                  </motion.div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
