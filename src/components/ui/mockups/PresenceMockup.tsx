"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const PresenceMockup = () => (
  <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
    {/* Background glow & Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    <motion.div 
      animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none"
    />

    {/* Floating Mobile Preview (Enhanced) */}
    <motion.div 
      animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-4 right-4 w-28 h-40 bg-[#111]/90 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] p-2 flex flex-col gap-2 z-20 hidden md:flex"
    >
      <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-1" />
      <div className="w-full h-10 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-lg border border-brand-primary/30" />
      <div className="w-3/4 h-1.5 bg-white/60 rounded-full" />
      <div className="w-1/2 h-1.5 bg-white/30 rounded-full" />
    </motion.div>

    {/* Floating SEO Badge (Enhanced) */}
    <motion.div 
      animate={{ y: [5, -5, 5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 left-4 bg-green-500/10 border border-green-500/30 backdrop-blur-xl p-2 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 z-20 hidden md:flex"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(34,197,94,0.2)" strokeWidth="2" />
          <motion.circle cx="12" cy="12" r="10" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="62" strokeDashoffset="6" />
        </svg>
        <div className="absolute text-[6px] font-bold text-green-400">99</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-10 h-1 bg-green-400/80 rounded-full" />
        <div className="w-6 h-1 bg-green-400/40 rounded-full" />
      </div>
    </motion.div>

    {/* Browser Window (Original Structure, Enhanced UI) */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-[400px] h-full max-h-[300px] bg-[#111]/80 backdrop-blur-2xl rounded-xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative z-10"
    >
      {/* Loading Progress Bar */}
      <motion.div 
        animate={{ width: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-[2px] bg-brand-primary shadow-[0_0_10px_rgba(0,212,255,0.8)] z-30"
      />

      {/* Browser Header */}
      <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-[#1a1a1a]/80 backdrop-blur-md">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>
        <div className="mx-auto w-32 h-3 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
           <div className="w-20 h-1 bg-white/20 rounded-full" />
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 p-5 flex flex-col gap-6 relative overflow-hidden">
        
        {/* Animated Custom Cursor */}
        <motion.div 
          animate={{ 
            x: [50, 180, 180, 50], 
            y: [50, 100, 60, 50],
            scale: [1, 0.9, 1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-4 h-4 z-50 mix-blend-difference pointer-events-none"
        >
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[10px] border-t-white border-r-[6px] border-r-transparent -rotate-12 shadow-lg" />
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded-lg border border-white/5">
          <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-blue-500 rounded-md shadow-[0_0_10px_rgba(0,212,255,0.3)]" />
          <div className="flex gap-3">
            <div className="w-6 h-1 bg-white/40 rounded-full" />
            <div className="w-6 h-1 bg-white/40 rounded-full" />
            <div className="w-8 h-2 bg-brand-primary/50 rounded-full" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-5 bg-gradient-to-r from-white to-white/60 rounded-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-4 bg-gradient-to-r from-white/60 to-white/20 rounded-md"
          />
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-4/5 h-1.5 bg-white/30 rounded-full mt-2"
          />
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-3/5 h-1.5 bg-white/30 rounded-full"
          />
          
          {/* CTA Button */}
          <motion.div 
            animate={{ boxShadow: ["0 0 0px 0px rgba(0,212,255,0)", "0 0 15px 2px rgba(0,212,255,0.4)", "0 0 0px 0px rgba(0,212,255,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-4 px-6 py-2.5 bg-brand-primary/20 border border-brand-primary/50 rounded-full flex items-center justify-center gap-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent skew-x-12 animate-[shimmer_2s_infinite]" />
            <div className="w-12 h-2 bg-brand-primary rounded-sm relative z-10" />
          </motion.div>
        </div>

        {/* Floating Content Blocks */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-4">
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex-1 h-16 bg-white/5 border border-white/10 rounded-lg p-3 backdrop-blur-md shadow-lg"
          >
             <div className="flex justify-between items-center mb-2">
               <div className="w-6 h-6 bg-white/10 rounded-md" />
               <div className="w-4 h-4 bg-green-500/20 text-[6px] text-green-400 flex items-center justify-center rounded">↑</div>
             </div>
             <div className="w-full h-1.5 bg-white/30 rounded-full" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="flex-1 h-16 bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-3 backdrop-blur-md shadow-lg"
          >
             <div className="flex gap-1 mb-2">
               {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_2px_rgba(234,179,8,0.5)]" />)}
             </div>
             <div className="w-4/5 h-1 bg-white/60 rounded-full mb-1" />
             <div className="w-3/5 h-1 bg-white/30 rounded-full" />
          </motion.div>
        </div>

      </div>
    </motion.div>

    <style>{`
      @keyframes shimmer {
        0% { transform: translateX(-100%) skewX(-12deg); }
        100% { transform: translateX(200%) skewX(-12deg); }
      }
    `}</style>
  </div>
);
