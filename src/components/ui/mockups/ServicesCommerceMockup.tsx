"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const ServicesCommerceMockup = () => (
  <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group font-sans">
    {/* Background & Lighting */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none" />

    {/* Floating Sales Notification (Enhanced) */}
    <motion.div 
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 left-4 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-xl p-2.5 rounded-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30 hidden md:flex"
    >
      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
        <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-400 rotate-45 transform -translate-y-[2px]" />
      </div>
      <div>
        <div className="w-12 h-1.5 bg-emerald-400/90 rounded-full mb-1" />
        <div className="w-8 h-1 bg-emerald-400/50 rounded-full" />
      </div>
    </motion.div>

    {/* Commerce Container (Original Structure, Enhanced UI) */}
    <div className="w-full max-w-[440px] h-full max-h-[320px] relative z-10 flex gap-4">
      
      {/* Products & Revenue Column */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Nav & Cart Badge */}
        <div className="h-10 bg-[#111]/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between px-4 shadow-lg">
          <div className="w-16 h-2 bg-white/40 rounded-full" />
          <div className="relative p-1.5 bg-white/5 rounded-md border border-white/10">
            <div className="w-4 h-4 rounded bg-white/40" />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            />
          </div>
        </div>

        {/* Product Cards */}
        <div className="flex gap-3">
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex-1 bg-gradient-to-b from-emerald-500/10 to-[#111] rounded-xl border border-emerald-500/30 p-2 pb-3 shadow-xl backdrop-blur-sm cursor-pointer group/card"
          >
            <div className="w-full h-20 bg-emerald-950/40 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center border border-emerald-500/20">
              <motion.div 
                animate={{ rotateY: 360, rotateX: 20 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-emerald-500/20 border border-emerald-400/50 rounded-lg shadow-xl"
              />
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </div>
            <div className="w-3/4 h-2 bg-white/80 rounded-full mb-2" />
            <div className="flex justify-between items-center">
              <div className="w-10 h-2 bg-emerald-400 rounded-sm shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
              <div className="w-4 h-4 bg-white/10 rounded-md flex items-center justify-center">
                <div className="w-2 h-2 bg-white/80 rounded-[2px]" />
              </div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex-1 bg-[#111]/90 rounded-xl border border-white/10 p-2 pb-3 shadow-lg backdrop-blur-sm cursor-pointer"
          >
            <div className="w-full h-20 bg-white/5 rounded-lg mb-2 flex items-center justify-center border border-white/5">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg" />
            </div>
            <div className="w-2/3 h-2 bg-white/40 rounded-full mb-2" />
            <div className="flex justify-between items-center">
              <div className="w-8 h-2 bg-white/60 rounded-sm" />
              <div className="w-4 h-4 bg-white/10 rounded-md flex items-center justify-center">
                <div className="w-2 h-2 bg-white/80 rounded-[2px]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Revenue Graph / Conversion */}
        <div className="flex-1 bg-[#111]/90 rounded-xl border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative shadow-lg backdrop-blur-sm">
          <div className="flex justify-between items-center mb-2 z-10 relative">
            <div>
              <div className="w-12 h-1 bg-white/40 rounded-full mb-1" />
              <div className="w-16 h-3 bg-white/90 rounded-sm" />
            </div>
            <div className="px-1.5 py-0.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center gap-1">
              <div className="text-[8px] text-emerald-400 font-bold">+24%</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 50">
              <defs>
                <linearGradient id="gradient-commerce" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(16,185,129,0.5)" />
                  <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                </linearGradient>
              </defs>
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0,40 Q20,30 40,35 T80,20 T120,25 T160,10 T200,5"
                fill="none" stroke="#10b981" strokeWidth="2.5"
                className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              />
              <motion.path 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M0,40 Q20,30 40,35 T80,20 T120,25 T160,10 T200,5 L200,50 L0,50 Z"
                fill="url(#gradient-commerce)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Checkout Panel */}
      <div className="w-[40%] bg-gradient-to-b from-[#15151a] to-[#0a0a0a] rounded-xl border border-white/10 flex flex-col p-3 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Progress Bar (Stepper) */}
        <div className="flex justify-between items-center mb-5 relative px-1">
          <div className="absolute left-1 right-1 h-[2px] bg-white/10 top-1/2 -translate-y-1/2 z-0" />
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            className="absolute left-1 h-[2px] bg-brand-primary top-1/2 -translate-y-1/2 z-0 shadow-[0_0_8px_rgba(0,212,255,0.8)]"
          />
          {[1, 2, 3].map((step) => (
            <div key={step} className={`w-3 h-3 rounded-full relative z-10 ${step === 1 ? 'bg-brand-primary border-[3px] border-[#15151a]' : step === 2 ? 'bg-[#15151a] border-[2px] border-brand-primary' : 'bg-[#15151a] border-[2px] border-white/20'}`} />
          ))}
        </div>

        <div className="w-16 h-2 bg-white/80 rounded-full mb-4" />

        {/* Order Summary */}
        <div className="flex flex-col gap-2 mb-4 flex-1">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex justify-between items-center bg-white/[0.02] p-1.5 rounded border border-white/5">
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 bg-white/10 rounded" />
                <div className="w-12 h-1.5 bg-white/70 rounded-full" />
              </div>
              <div className="w-8 h-1.5 bg-white/50 rounded-full" />
            </div>
          ))}
          <div className="border-t border-white/10 border-dashed pt-2 mt-1 flex justify-between items-center">
            <div className="w-10 h-1.5 bg-white/40 rounded-full" />
            <div className="w-12 h-2.5 bg-white/90 rounded-full" />
          </div>
        </div>

        {/* Payment Card Simulation */}
        <div className="w-full h-16 bg-gradient-to-tr from-white/15 to-white/5 backdrop-blur-md rounded-lg border border-white/20 p-2.5 relative overflow-hidden mb-3 shadow-lg">
          <div className="absolute right-[-10px] top-[-10px] w-12 h-12 bg-white/10 rounded-full blur-[10px]" />
          <div className="w-5 h-3 bg-yellow-500/80 rounded-[2px] shadow-inner mb-4" />
          <div className="flex justify-between items-end">
            <div className="flex gap-1">
              {[1,2,3,4].map(i => <div key={i} className="w-1 h-1 bg-white/80 rounded-full" />)}
            </div>
            <div className="w-10 h-1.5 bg-white/90 rounded-full" />
          </div>
        </div>

        {/* Checkout Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          className="w-full py-2 bg-white text-black rounded-md flex items-center justify-center gap-1.5 relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <div className="w-2.5 h-2.5 bg-black rounded-full" />
          <div className="w-8 h-1.5 bg-black rounded-full" />
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 mix-blend-difference"
          />
        </motion.button>
      </div>

    </div>
  </div>
);
