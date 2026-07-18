"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const AiMockup = () => (
  <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group font-sans">
    {/* Background Grid & Central Glow */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-600 blur-[80px] rounded-full pointer-events-none"
    />

    {/* Floating Prompt Interface (Enhanced) */}
    <motion.div 
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 left-8 w-36 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-xl p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30 hidden md:block"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded bg-brand-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-brand-primary rotate-45 transform -translate-y-[1px]" />
        </div>
        <div className="w-16 h-1 bg-white/70 rounded-full" />
      </div>
      <div className="bg-black/40 border border-white/10 rounded-md p-1.5 h-8 flex items-center shadow-inner">
        <div className="w-12 h-1 bg-white/40 rounded-full mr-1" />
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-0.5 h-2.5 bg-brand-primary"
        />
      </div>
    </motion.div>

    {/* AI Workflow Container (Original Structure, Enhanced UI) */}
    <div className="w-full max-w-[400px] aspect-[5/4] relative z-10 flex items-center justify-center">
      
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 400 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ai-glow-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.5)" />
          </linearGradient>
          <linearGradient id="ai-glow-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
            <stop offset="100%" stopColor="rgba(0,212,255,0.5)" />
          </linearGradient>
          <filter id="glow-effect-ai">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Lines from Left Nodes to Center */}
        <motion.path d="M 88 104 Q 150 104 200 160" fill="none" stroke="url(#ai-glow-1)" strokeWidth="1.5" />
        <motion.path d="M 88 224 Q 150 224 200 160" fill="none" stroke="url(#ai-glow-1)" strokeWidth="1.5" />
        
        {/* Lines from Center to Right Nodes */}
        <motion.path d="M 200 160 Q 250 104 312 104" fill="none" stroke="url(#ai-glow-2)" strokeWidth="1.5" />
        <motion.path d="M 200 160 Q 250 224 312 224" fill="none" stroke="url(#ai-glow-2)" strokeWidth="1.5" />

        {/* Animated Flow Particles Left to Center */}
        {[
          { path: "M 88 104 Q 150 104 200 160", delay: 0, c: "#fff" },
          { path: "M 88 224 Q 150 224 200 160", delay: 1, c: "#fff" },
          { path: "M 200 160 Q 250 104 312 104", delay: 0.5, c: "#00d4ff" },
          { path: "M 200 160 Q 250 224 312 224", delay: 1.5, c: "#00d4ff" }
        ].map((packet, i) => (
          <motion.circle key={i} r="3" fill={packet.c} filter="url(#glow-effect-ai)"
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: packet.delay }}
            style={{ offsetPath: `path("${packet.path}")` as any }}
          />
        ))}
      </svg>

      {/* Nodes (Original Positioning, converted to percentages for responsive alignment) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* Left Input Node 1 */}
        <motion.div 
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] w-12 h-12 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-lg flex items-center justify-center p-2"
        >
          <div className="w-full h-1.5 bg-white/40 rounded-full" />
        </motion.div>

        {/* Left Input Node 2 */}
        <motion.div 
          animate={{ y: [2, -2, 2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[62.5%] left-[10%] w-12 h-12 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-lg flex items-center justify-center p-2"
        >
          <div className="flex flex-col gap-1 w-full">
            <div className="w-full h-1 bg-white/40 rounded-full" />
            <div className="w-2/3 h-1 bg-white/20 rounded-full" />
          </div>
        </motion.div>

        {/* Center AI Node (Enhanced Neural Core) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[42%] w-16 h-16 rounded-2xl border-2 border-violet-500/50 bg-[#111]/60 backdrop-blur-lg flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4),inset_0_0_15px_rgba(168,85,247,0.4)] relative"
        >
          {/* Rotating Dashed Border */}
          <svg className="absolute inset-[-6px] w-[76px] h-[76px] -rotate-90">
            <circle cx="38" cy="38" r="36" fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
          <motion.div 
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6 bg-gradient-to-br from-brand-primary to-violet-600 rounded-lg shadow-[0_0_20px_#fff]"
          />
        </motion.div>

        {/* Right Output Node 1 (Processing) */}
        <motion.div 
          animate={{ y: [2, -2, 2] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[10%] w-14 h-14 bg-brand-primary/10 backdrop-blur-md border border-brand-primary/30 rounded-xl shadow-[0_0_15px_rgba(0,212,255,0.2)] flex flex-col items-center justify-center gap-1.5 p-2 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent pointer-events-none" />
          <div className="w-full flex items-end gap-0.5 h-6">
            {[1,2,3,4].map(bar => (
              <motion.div key={bar} 
                animate={{ height: ["30%", "100%", "30%"] }}
                transition={{ duration: 1.2 + bar * 0.1, repeat: Infinity, ease: "easeInOut", delay: bar * 0.1 }}
                className="flex-1 bg-brand-primary rounded-t-[1px]"
              />
            ))}
          </div>
        </motion.div>

        {/* Right Output Node 2 (Success) */}
        <motion.div 
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[62.5%] right-[10%] w-14 h-14 bg-violet-500/10 backdrop-blur-md border border-violet-500/30 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.2)] flex flex-col items-center justify-center p-2"
        >
          <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center mb-1">
             <div className="w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-violet-400 rotate-45 transform -translate-y-[1px]" />
          </div>
          <div className="w-8 h-1 bg-violet-400/80 rounded-full" />
        </motion.div>
      </div>

    </div>
  </div>
);
