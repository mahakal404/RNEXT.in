"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const PlatformsMockup = () => (
  <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group font-sans">
    {/* Soft pulse glow & Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    <motion.div 
      animate={{ opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-1/4 top-1/4 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none"
    />
    <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

    {/* Floating Notification (Enhanced) */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      className="absolute top-6 right-6 bg-purple-500/20 border border-purple-500/30 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2 shadow-[0_5px_15px_rgba(168,85,247,0.2)] z-30 hidden md:flex"
    >
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(168,85,247,1)]" />
      <div className="w-16 h-1.5 bg-purple-300/80 rounded-full" />
    </motion.div>

    {/* Dashboard Container (Original Structure, Enhanced UI) */}
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-[440px] h-full max-h-[320px] bg-[#111]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex overflow-hidden relative z-10"
    >
      <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />

      {/* Sidebar */}
      <div className="w-16 md:w-20 border-r border-white/10 bg-[#151515]/80 p-3 flex flex-col items-center gap-4 relative z-20">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-purple-500 border border-brand-primary/40 mb-4 shadow-[0_0_10px_rgba(0,212,255,0.3)] flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-sm" />
        </div>
        {[1,2,3,4].map((_, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${i===0 ? 'bg-white/10' : ''}`}
          >
            <div className={`w-4 h-4 rounded-sm ${i===0 ? 'bg-white' : 'bg-white/30'}`} />
          </motion.div>
        ))}
        <div className="mt-auto relative w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 border border-white/20">
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-[#151515] rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-5 flex flex-col gap-4 relative">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1.5">
            <div className="w-24 h-4 bg-white/90 rounded-md" />
            <div className="w-12 h-1.5 bg-white/40 rounded-full" />
          </div>
          <div className="w-16 h-6 bg-brand-primary/20 rounded-md border border-brand-primary/40 flex items-center justify-center shadow-[0_0_10px_rgba(0,212,255,0.2)]">
             <div className="w-8 h-1 bg-brand-primary rounded-full" />
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div 
            whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.05)" }}
            className="bg-white/[0.03] border border-white/10 rounded-lg p-3 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="w-16 h-1.5 bg-white/40 rounded-full mb-3" />
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-4 bg-white/90 rounded-sm mb-2"
            />
            <div className="w-8 h-1.5 bg-green-400/80 rounded-full" />
          </motion.div>
          <motion.div 
            whileHover={{ y: -2, backgroundColor: "rgba(0,212,255,0.05)" }}
            className="bg-gradient-to-br from-brand-primary/10 to-transparent border border-brand-primary/30 rounded-lg p-3 relative overflow-hidden backdrop-blur-sm shadow-[0_5px_15px_rgba(0,212,255,0.1)]"
          >
            <div className="w-16 h-1.5 bg-brand-primary/60 rounded-full mb-3" />
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-4 bg-brand-primary rounded-sm mb-2 shadow-[0_0_10px_rgba(0,212,255,0.5)]"
            />
            <div className="w-10 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </div>

        {/* Analytics Widget (Graph) */}
        <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-lg p-3 flex flex-col relative overflow-hidden backdrop-blur-sm">
          <div className="w-20 h-2 bg-white/40 rounded-full mb-4" />
          <div className="flex-1 flex items-end justify-between gap-1 sm:gap-2 px-1 relative z-10">
            {/* Horizontal Grid lines */}
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5" />
            <div className="absolute top-2/4 left-0 w-full h-[1px] bg-white/5" />
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/5" />
            
            {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className={`w-full rounded-t-sm relative ${i === 5 ? 'bg-brand-primary shadow-[0_0_10px_rgba(0,212,255,0.5)]' : 'bg-white/20'}`}
              >
                {i === 5 && <div className="absolute top-0 w-full h-1 bg-white/60 rounded-t-sm" />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white/[0.03] border border-white/10 rounded-lg p-2 flex flex-col gap-1 backdrop-blur-sm">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex justify-between items-center p-1.5 hover:bg-white/5 rounded transition-colors border border-transparent hover:border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                   <div className="w-2.5 h-2.5 bg-white/40 rounded-sm" />
                </div>
                <div>
                  <div className="w-16 h-1.5 bg-white/80 rounded-full mb-1" />
                  <div className="w-10 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-12 h-1 bg-white/20 rounded-full" />
                <div className={`px-1.5 py-0.5 rounded text-[7px] font-bold ${i===0 ? 'bg-brand-primary/20 text-brand-primary' : 'bg-white/10 text-white/50'}`}>
                  {i===0 ? 'ACTIVE' : 'IDLE'}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  </div>
);
