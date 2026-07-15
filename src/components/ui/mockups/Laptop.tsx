import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EcosystemData, LiveEvent } from './hero-ecosystems';

interface LaptopProps {
  className?: string;
  ecosystem: EcosystemData;
  transitionState: 'idle' | 'fading_out' | 'skeleton' | 'fading_in';
  activeEvent: LiveEvent | null;
}

export function Laptop({ className = "", ecosystem, transitionState, activeEvent }: LaptopProps) {
  const shouldReduceMotion = useReducedMotion();
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [clickScale, setClickScale] = useState(1);

  // Simulated Idle Cursor Movement
  useEffect(() => {
    if (transitionState !== 'idle' || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCursorPos({
        x: 30 + Math.random() * 40,
        y: 30 + Math.random() * 40,
      });
      setTimeout(() => {
        setClickScale(0.8);
        setTimeout(() => setClickScale(1), 150);
      }, 500);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [transitionState, shouldReduceMotion]);

  // Local metric counter animation
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (transitionState === 'fading_in' || transitionState === 'idle') {
      const target = ecosystem.desktop.metric1.value;
      let start = target * 0.8;
      const step = (target - start) / 30;
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          setDisplayValue(target);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [ecosystem.desktop.metric1.value, transitionState]);

  // Handle Event Updates (bump metric2)
  const [bumpMetric2, setBumpMetric2] = useState(ecosystem.desktop.metric2.value);
  useEffect(() => {
    if (activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'desktop')) {
      setBumpMetric2(prev => prev + Math.floor(Math.random() * 10) + 1);
    }
  }, [activeEvent]);
  
  useEffect(() => {
    if (transitionState === 'skeleton' || transitionState === 'fading_out') {
      setBumpMetric2(ecosystem.desktop.metric2.value);
    }
  }, [ecosystem, transitionState]);

  const showContent = transitionState === 'idle' || transitionState === 'fading_in';
  const showSkeleton = transitionState === 'skeleton';
  
  // Format numbers (e.g. 12000 -> 12,000)
  const formatNum = (num: number) => num.toLocaleString('en-US');

  return (
    <div className={`relative w-full aspect-[16/10] mx-auto ${className}`}>
      <div className="absolute inset-0 bg-[#0B1020] rounded-[4%] border-[4px] md:border-[8px] lg:border-[12px] border-[#151C2F] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
        
        {/* Browser Bar */}
        <div className="h-[8%] min-h-[16px] max-h-[32px] bg-[#060816] w-full flex items-center px-[2%] gap-[1%] border-b border-white/5 z-20">
          <div className="w-[1.5%] aspect-square rounded-full bg-[#FF5F56]"></div>
          <div className="w-[1.5%] aspect-square rounded-full bg-[#FFBD2E]"></div>
          <div className="w-[1.5%] aspect-square rounded-full bg-[#27C93F]"></div>
        </div>
        
        {/* Fake UI */}
        <div className="flex-1 bg-[#060816] p-[4%] flex flex-col relative overflow-hidden">
          
          {/* Dynamic Background Glow */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] aspect-square rounded-full pointer-events-none"
            style={{ backgroundColor: `${ecosystem.colors.primary}20`, filter: 'blur(60px)' }}
            animate={{ opacity: transitionState === 'idle' ? [0.5, 0.8, 0.5] : 0 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Header */}
          <div className="flex justify-between items-center mb-[6%] relative z-10 h-[10%]">
             <motion.div 
               className="text-white font-bold text-[8px] md:text-xs lg:text-sm tracking-tight"
               animate={{ opacity: showContent ? 1 : 0 }}
             >
               {ecosystem.desktop.headerTitle}
             </motion.div>
             
             {/* Tabs / Menu */}
             <div className="flex gap-[10%] w-[40%] justify-end h-full items-center">
               <motion.div className="h-[20%] w-[25%] bg-white/10 rounded-full" animate={{ opacity: showContent ? 1 : 0 }} />
               <motion.div className="h-[20%] w-[25%] bg-white/10 rounded-full" animate={{ opacity: showContent ? 1 : 0 }} />
               <motion.div 
                 className="h-[20%] w-[35%] rounded-full relative overflow-hidden" 
                 style={{ backgroundColor: ecosystem.colors.primary }}
                 animate={{ opacity: showContent ? 1 : 0, scale: transitionState === 'idle' ? [1, 1.05, 1] : 1 }}
                 transition={{ duration: 3, repeat: Infinity }}
               />
             </div>
          </div>
          
          <div className="flex-1 relative z-10 flex flex-col gap-[6%]">
            <AnimatePresence mode="wait">
              {showSkeleton && (
                <motion.div 
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col gap-[10%]"
                >
                  <div className="flex justify-between h-[30%] gap-[5%]">
                    <div className="flex-1 bg-white/5 rounded-lg animate-pulse" />
                    <div className="flex-1 bg-white/5 rounded-lg animate-pulse" />
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
                  {/* Top Stats Cards */}
                  <div className="flex justify-between h-[35%] gap-[4%]">
                    <motion.div 
                      variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                      className="flex-1 bg-white/5 rounded-lg border border-white/10 p-[4%] flex flex-col justify-center"
                    >
                      <div className="text-[6px] md:text-[8px] lg:text-[10px] text-white/50 uppercase tracking-wider mb-[4%]">{ecosystem.desktop.metric1.label}</div>
                      <div className="text-[10px] md:text-sm lg:text-xl text-white font-semibold">
                        {ecosystem.desktop.metric1.prefix}{formatNum(displayValue)}{ecosystem.desktop.metric1.suffix}
                      </div>
                    </motion.div>
                    <motion.div 
                      variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                      className="flex-1 bg-white/5 rounded-lg border border-white/10 p-[4%] flex flex-col justify-center relative overflow-hidden"
                    >
                      <div className="text-[6px] md:text-[8px] lg:text-[10px] text-white/50 uppercase tracking-wider mb-[4%]">{ecosystem.desktop.metric2.label}</div>
                      <motion.div 
                        key={bumpMetric2}
                        initial={{ scale: 1.1, color: ecosystem.colors.primary }}
                        animate={{ scale: 1, color: '#FFFFFF' }}
                        className="text-[10px] md:text-sm lg:text-xl text-white font-semibold"
                      >
                        {ecosystem.desktop.metric2.prefix}{formatNum(bumpMetric2)}{ecosystem.desktop.metric2.suffix}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Main Chart Area */}
                  <motion.div 
                    variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    className="flex-1 bg-white/5 rounded-lg border border-white/10 p-[4%] relative overflow-hidden flex items-end"
                  >
                    {/* Animated Grid Lines */}
                    <div className="absolute inset-0 opacity-10 flex flex-col justify-between py-[4%]">
                       <div className="w-full h-px bg-white" /><div className="w-full h-px bg-white" /><div className="w-full h-px bg-white" />
                    </div>
                    
                    {/* Fake Bar Chart */}
                    <div className="w-full h-[80%] flex items-end justify-around gap-[2%] relative z-10 px-[2%]">
                      {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.05, type: 'spring' }}
                          className="w-full rounded-t-sm"
                          style={{ backgroundColor: h === 100 ? ecosystem.colors.primary : `${ecosystem.colors.primary}66` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Event Toast */}
          <AnimatePresence>
            {activeEvent && (activeEvent.targetDevice === 'all' || activeEvent.targetDevice === 'desktop') && (
              <motion.div
                initial={{ opacity: 0, y: -20, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: -10, x: '-50%' }}
                className="absolute top-[12%] left-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full z-50 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ecosystem.colors.primary }} />
                <span className="text-[6px] md:text-[8px] text-white whitespace-nowrap font-medium">{activeEvent.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Simulated Cursor */}
          <motion.div 
            className="absolute z-50 pointer-events-none"
            animate={{ left: `${cursorPos.x}%`, top: `${cursorPos.y}%`, scale: clickScale }}
            transition={{ left: { type: 'spring', damping: 20 }, top: { type: 'spring', damping: 20 }, scale: { duration: 0.1 } }}
          >
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
              <path d="M11.6644 11.238L1.62128 0.540103C1.22912 0.122421 0.528435 0.398642 0.528435 0.971661V16.634C0.528435 17.2274 1.27218 17.4831 1.63738 17.015L4.54226 13.2922C4.69766 13.093 4.93574 12.9774 5.1878 12.9774H11.0022C11.595 12.9774 11.8741 12.222 11.4587 11.859L11.6644 11.238Z" fill="white" stroke="#111827" strokeWidth="1"/>
            </svg>
          </motion.div>

        </div>
      </div>
      
      {/* Laptop Base Lip */}
      <div className="absolute -bottom-[2%] left-[-2%] right-[-2%] h-[4%] bg-[#151C2F] rounded-b-xl md:rounded-b-2xl border-t border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 flex justify-center">
         <div className="w-[20%] h-[50%] bg-[#060816] rounded-b-md"></div>
      </div>
    </div>
  );
}
