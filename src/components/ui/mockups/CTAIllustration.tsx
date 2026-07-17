"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, ChevronRight, LayoutTemplate, MousePointer2, Sparkles, 
  Settings2, Smartphone, Monitor, Code2, Copy, FileText, Layers, 
  Box, Puzzle, Database, Zap, ArrowRight, Eye, Globe, ChevronDown, AlignLeft, Search, RefreshCw, Send, Lock
} from 'lucide-react';

const DesktopWorkspace = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="hidden lg:flex w-full h-[520px] bg-[#0c0c11] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,255,255,0.1)] overflow-hidden flex-col relative z-10 text-white font-sans select-none">
      {/* Top Nav */}
      <div className="h-10 bg-[#12121a] border-b border-white/5 flex items-center justify-between px-4 flex-shrink-0 z-20">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          </div>
          <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-white/60">
            <span className="text-brand-primary">RNEXT Studio</span>
            <ChevronRight size={12} className="text-white/20" />
            <span>Workspace</span>
            <ChevronRight size={12} className="text-white/20" />
            <span className="text-white/90">Client-Product-Final</span>
            <div className="ml-2 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">v2.4</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-[8px] text-purple-400">AM</div>
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-[8px] text-emerald-400">RJ</div>
          </div>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 text-white/70 text-[10px] font-semibold cursor-pointer hover:bg-white/10 transition-colors border border-white/5">
            <Eye size={12} /> Preview
          </div>
          <motion.div 
            className="flex items-center gap-1.5 px-3 py-1 bg-brand-primary text-bg-primary rounded text-[10px] font-bold relative overflow-hidden cursor-pointer"
            animate={{ scale: shouldReduceMotion ? 1 : [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          >
            <Globe size={12} />
            Publish
            <motion.div 
              className="absolute inset-0 bg-white/30"
              animate={{ x: shouldReduceMotion ? '100%' : ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden bg-[#0c0c11]">
        
        {/* Left Sidebar (Explorer) */}
        <div className="w-[200px] bg-[#0a0a0f] border-r border-white/5 flex flex-col flex-shrink-0">
          <div className="p-3 border-b border-white/5">
            <div className="relative">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input type="text" placeholder="Search assets..." className="w-full bg-[#12121a] border border-white/5 rounded pl-7 pr-2 py-1.5 text-[10px] text-white outline-none placeholder:text-white/30" readOnly />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
            {/* Pages Section */}
            <div className="flex flex-col border-b border-white/5">
              <div className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold text-white/50 uppercase tracking-wider cursor-pointer hover:bg-white/5">
                <ChevronDown size={12} /> Pages
              </div>
              <div className="flex flex-col pb-2">
                {[
                  { name: "Home", active: true },
                  { name: "Features", active: false },
                  { name: "Pricing", active: false },
                  { name: "Contact", active: false }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 px-6 py-1.5 text-[11px] cursor-pointer ${item.active ? 'bg-brand-primary/10 text-brand-primary border-r-2 border-brand-primary' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                    <FileText size={12} /> {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Layers Section */}
            <div className="flex flex-col border-b border-white/5">
              <div className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold text-white/50 uppercase tracking-wider cursor-pointer hover:bg-white/5">
                <ChevronDown size={12} /> Layers
              </div>
              <div className="flex flex-col pb-2">
                {[
                  { name: "Hero Section", depth: 0, icon: <LayoutTemplate size={10} /> },
                  { name: "Background Glow", depth: 1, icon: <Box size={10} /> },
                  { name: "Main Container", depth: 1, icon: <Layers size={10} /> },
                  { name: "Headline Typography", depth: 2, icon: <AlignLeft size={10} /> },
                  { name: "CTA Group", depth: 2, icon: <Copy size={10} /> },
                  { name: "Feature Grid", depth: 0, icon: <LayoutTemplate size={10} /> }
                ].map((layer, i) => (
                  <div key={i} className="flex items-center gap-1.5 py-1 text-[10px] text-white/60 hover:text-white hover:bg-white/5 cursor-pointer" style={{ paddingLeft: `${16 + layer.depth * 12}px` }}>
                    <ChevronRight size={10} className="text-white/30" />
                    <div className="text-white/40">{layer.icon}</div>
                    {layer.name}
                  </div>
                ))}
              </div>
            </div>

            {/* CMS / Database */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold text-white/50 uppercase tracking-wider cursor-pointer hover:bg-white/5">
                <ChevronDown size={12} /> Data Collections
              </div>
              <div className="flex flex-col pb-2">
                <div className="flex items-center gap-2 px-6 py-1.5 text-[11px] text-white/60 hover:text-white hover:bg-white/5 cursor-pointer">
                  <Database size={12} className="text-purple-400" /> Testimonials <span className="ml-auto text-[8px] bg-white/10 px-1 rounded">12</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-1.5 text-[11px] text-white/60 hover:text-white hover:bg-white/5 cursor-pointer">
                  <Puzzle size={12} className="text-emerald-400" /> Integrations <span className="ml-auto text-[8px] bg-white/10 px-1 rounded">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 bg-[#0c0c11] relative overflow-hidden flex flex-col items-center justify-center p-6">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* Canvas Wrapper */}
          <div className="w-[420px] h-[340px] bg-[#12121a] rounded-lg border border-brand-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.05)] relative overflow-hidden flex flex-col transform-gpu">
            {/* Mock Webpage Header */}
            <div className="h-10 border-b border-white/5 flex items-center justify-between px-4">
              <div className="w-16 h-3 bg-white/20 rounded"></div>
              <div className="flex gap-3">
                <div className="w-8 h-2 bg-white/10 rounded"></div>
                <div className="w-8 h-2 bg-white/10 rounded"></div>
                <div className="w-8 h-2 bg-white/10 rounded"></div>
                <div className="w-12 h-4 bg-brand-primary/20 rounded ml-2"></div>
              </div>
            </div>
            
            {/* Mock Webpage Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col relative p-4">
              {/* Highlight Box around active element */}
              <motion.div 
                className="absolute border border-brand-primary bg-brand-primary/5 rounded z-10 pointer-events-none flex flex-col"
                initial={{ top: 12, left: 12, width: 380, height: 160 }}
                animate={{ top: 12, left: 12, width: 380, height: 160 }}
              >
                <div className="absolute -top-4 -left-[1px] bg-brand-primary text-bg-primary text-[8px] font-bold px-1 rounded-t border border-brand-primary">Hero Section</div>
                <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border border-brand-primary rounded-sm shadow"></div>
                <div className="absolute bottom-[-1.5px] left-1/2 w-3 h-3 bg-white border border-brand-primary rounded-sm shadow"></div>
              </motion.div>

              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center py-6 text-center z-0">
                <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center mb-3">
                  <Sparkles size={14} className="text-brand-primary" />
                </div>
                <div className="w-48 h-6 bg-white/20 rounded mb-2"></div>
                <div className="w-32 h-6 bg-white/20 rounded mb-4"></div>
                <div className="w-64 h-2 bg-white/10 rounded mb-1.5"></div>
                <div className="w-56 h-2 bg-white/10 rounded mb-5"></div>
                
                <div className="flex gap-2">
                  <div className="w-24 h-7 bg-brand-primary rounded-full"></div>
                  <div className="w-24 h-7 bg-white/10 rounded-full"></div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-white/5 rounded-md p-3 border border-white/5">
                    <div className="w-6 h-6 rounded bg-brand-primary/10 mb-2"></div>
                    <div className="w-20 h-2 bg-white/20 rounded mb-1.5"></div>
                    <div className="w-full h-1.5 bg-white/10 rounded mb-1"></div>
                    <div className="w-3/4 h-1.5 bg-white/10 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Floating Controls */}
          <div className="absolute bottom-6 flex items-center gap-2 bg-[#12121a] border border-white/10 rounded-full px-3 py-1.5 shadow-xl">
            <Monitor size={12} className="text-brand-primary" />
            <div className="h-3 w-[1px] bg-white/20"></div>
            <Smartphone size={12} className="text-white/40 hover:text-white cursor-pointer" />
            <div className="h-3 w-[1px] bg-white/20"></div>
            <span className="text-[10px] text-white/70 font-mono">100%</span>
          </div>

          {/* Animated Cursor */}
          <motion.div 
            className="absolute z-50 text-white pointer-events-none"
            initial={{ x: 100, y: 150 }}
            animate={shouldReduceMotion ? {} : {
              x: [100, 180, 200, 100],
              y: [150, 100, 120, 150]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <MousePointer2 size={16} className="fill-brand-primary text-white drop-shadow-md" />
          </motion.div>
        </div>

        {/* Right Sidebar (Inspector) */}
        <div className="w-[220px] bg-[#0a0a0f] border-l border-white/5 flex flex-col flex-shrink-0">
          <div className="h-10 border-b border-white/5 flex items-center justify-between px-3">
            <span className="text-[11px] font-bold">Design Inspector</span>
            <Code2 size={12} className="text-brand-primary cursor-pointer" />
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 flex flex-col gap-4">
            
            {/* Layout */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-white/50 uppercase">Layout</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-white/10 rounded flex items-center justify-center text-white text-[8px] cursor-pointer">W</div>
                  <div className="w-4 h-4 bg-brand-primary/20 border border-brand-primary/50 rounded flex items-center justify-center text-brand-primary text-[8px] cursor-pointer">F</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center bg-[#12121a] border border-white/5 rounded px-2 py-1">
                  <span className="text-[9px] text-white/40 w-4">W</span>
                  <span className="text-[10px]">100%</span>
                </div>
                <div className="flex items-center bg-[#12121a] border border-white/5 rounded px-2 py-1">
                  <span className="text-[9px] text-white/40 w-4">H</span>
                  <span className="text-[10px]">Auto</span>
                </div>
              </div>
            </div>

            {/* Spacing */}
            <div className="flex flex-col gap-2 border-t border-white/5 pt-3">
              <span className="text-[10px] font-bold text-white/50 uppercase">Spacing</span>
              <div className="relative w-full aspect-[2/1] border border-white/10 border-dashed rounded flex items-center justify-center bg-[#12121a]">
                 <span className="absolute top-1 text-[8px] text-white/40">Margin</span>
                 <div className="w-[60%] h-[50%] border border-brand-primary/30 bg-brand-primary/10 rounded flex items-center justify-center relative">
                   <span className="absolute top-0.5 text-[8px] text-brand-primary">Padding</span>
                   <div className="w-[40%] h-[40%] border border-white/20 bg-white/5 rounded"></div>
                   {/* Interactive Paddings */}
                   <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[8px] text-white">24</span>
                   <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[8px] text-white">24</span>
                   <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] text-white">48</span>
                   <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-white">48</span>
                 </div>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col gap-2 border-t border-white/5 pt-3">
              <span className="text-[10px] font-bold text-white/50 uppercase">Typography</span>
              <div className="flex items-center justify-between bg-[#12121a] border border-white/5 rounded px-2 py-1">
                <span className="text-[10px] font-mono">Inter</span>
                <ChevronDown size={10} className="text-white/40" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center bg-[#12121a] border border-white/5 rounded px-2 py-1">
                  <span className="text-[9px] text-white/40 w-6">Size</span>
                  <span className="text-[10px]">48px</span>
                </div>
                <div className="flex items-center bg-[#12121a] border border-white/5 rounded px-2 py-1">
                  <span className="text-[9px] text-white/40 w-6">Wgt</span>
                  <span className="text-[10px]">700</span>
                </div>
              </div>
            </div>

            {/* Effects / Tokens */}
            <div className="flex flex-col gap-2 border-t border-white/5 pt-3">
              <span className="text-[10px] font-bold text-white/50 uppercase">Background & Effects</span>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                  <span className="text-[10px]">Brand Cyan</span>
                </div>
                <span className="text-[9px] text-white/40 font-mono">100%</span>
              </div>
              <div className="flex items-center justify-between px-1 mt-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded shadow-[0_2px_4px_rgba(0,0,0,0.5)] bg-white border border-white/20"></div>
                  <span className="text-[10px]">Drop Shadow</span>
                </div>
                <Settings2 size={10} className="text-white/40 cursor-pointer" />
              </div>
            </div>

            {/* Animations */}
            <div className="flex flex-col gap-2 border-t border-white/5 pt-3 pb-2">
               <div className="flex items-center justify-between">
                 <span className="text-[10px] font-bold text-white/50 uppercase">Micro Animations</span>
                 <div className="w-6 h-3 bg-brand-primary rounded-full relative cursor-pointer">
                   <div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div>
                 </div>
               </div>
               <div className="flex items-center bg-[#12121a] border border-brand-primary/30 rounded px-2 py-1 gap-2 cursor-pointer mt-1 text-brand-primary">
                 <Sparkles size={10} />
                 <span className="text-[10px]">Fade In Up</span>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="h-6 bg-[#08080c] border-t border-white/5 flex items-center justify-between px-4 flex-shrink-0 z-20">
        <div className="flex items-center gap-4 text-[9px] font-medium text-white/40">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 size={10} /> Auto Saved
          </div>
          <div className="flex items-center gap-1.5">
            <RefreshCw size={10} className="text-white/30" /> Synced with cloud
          </div>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-medium text-white/40">
          <div className="flex items-center gap-1.5">
            Performance Score: <span className="text-emerald-400 font-bold">100</span>
          </div>
          <div className="h-3 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-1.5 text-brand-primary cursor-pointer hover:text-white transition-colors">
            Deploy Ready <ArrowRight size={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TabletTimeline = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="hidden md:flex lg:hidden w-full h-[450px] bg-[#0c0c11] rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.15)] flex-col p-6 gap-6 relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Project Dashboard</h3>
          <p className="text-sm text-white/50 mt-1 flex items-center gap-2">
            <Lock size={12} /> Secure Client Portal
          </p>
        </div>
        <div className="px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-sm font-bold flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          Build In Progress
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex gap-6">
        
        {/* Kanban Board */}
        <div className="flex-1 flex gap-4 h-full">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20"></div> Backlog
            </div>
            <div className="bg-[#12121a] p-4 rounded-xl border border-white/5 text-sm font-medium text-white/50 opacity-70">
              Integrate Payment Gateway
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-primary"></div> Active Sprint
            </div>
            <motion.div 
              className="bg-[#12121a] p-4 rounded-xl border border-brand-primary/30 shadow-[0_0_15px_rgba(0,255,255,0.1)] relative overflow-hidden flex flex-col gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-white leading-tight">Design System Implementation</span>
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-[10px] text-purple-400 flex-shrink-0">RJ</div>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-white/40 font-medium">
                <span>Task Progress</span>
                <span className="text-brand-primary">75%</span>
              </div>
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div> Client Approval
            </div>
            <div className="bg-[#12121a] p-4 rounded-xl border border-emerald-500/20 shadow-lg flex flex-col gap-3">
              <div className="flex items-start gap-2">
                 <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                 <span className="text-sm font-bold text-white leading-tight">Homepage Wireframes</span>
              </div>
              <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded inline-flex w-fit">Approved by Client</div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Ambient tablet glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] pointer-events-none z-0"></div>
    </div>
  );
};

const MobileClientApp = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex md:hidden w-full max-w-[320px] mx-auto h-[550px] bg-[#0c0c11] rounded-[40px] border-[8px] border-[#1a1a24] shadow-2xl flex-col overflow-hidden relative">
      {/* Top Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a24] rounded-b-2xl z-30"></div>
      
      {/* Header */}
      <div className="pt-10 pb-4 px-6 border-b border-white/5 bg-[#12121a] relative z-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30 text-brand-primary">
            <Smartphone size={18} />
          </div>
          <div>
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Client Portal</p>
            <p className="text-sm font-bold text-white">Your Project</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer">
          <Settings2 size={16} className="text-white/60" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col relative z-10 bg-[#0c0c11]">
        {/* Progress Ring Card */}
        <div className="m-4 bg-[#12121a] border border-white/5 rounded-2xl p-6 flex flex-col items-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[40px]"></div>
          
          <h3 className="text-sm font-bold text-white w-full text-left mb-6">Deployment Status</h3>
          
          <div className="relative w-36 h-36 flex items-center justify-center">
             <svg className="w-full h-full -rotate-90 transform drop-shadow-lg" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="45" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
               <motion.circle 
                 cx="50" cy="50" r="45" 
                 fill="transparent" 
                 stroke="#06b6d4" 
                 strokeWidth="6" 
                 strokeDasharray="283" 
                 strokeLinecap="round"
                 initial={{ strokeDashoffset: 283 }}
                 animate={{ strokeDashoffset: 283 - (283 * 0.92) }}
                 transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
               />
             </svg>
             <div className="absolute flex flex-col items-center">
               <span className="text-3xl font-black text-white">92%</span>
               <span className="text-[10px] text-brand-primary font-bold tracking-widest uppercase mt-1">Complete</span>
             </div>
          </div>
          
          <div className="w-full mt-6 bg-brand-primary hover:bg-brand-secondary cursor-pointer transition-colors text-bg-primary font-bold text-sm py-3 rounded-xl flex justify-center items-center gap-2">
            <Eye size={16} /> View Live Preview
          </div>
        </div>

        {/* Timeline Updates */}
        <div className="px-4 pb-20 flex flex-col gap-4">
          <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-wider pl-2">Recent Milestones</h4>
          
          <div className="flex flex-col gap-3">
            <motion.div 
              className="bg-[#12121a] p-4 rounded-xl border border-white/5 flex gap-3 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent skew-x-12"
                animate={shouldReduceMotion ? {} : { x: ['-200%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
              />
              <div className="mt-0.5 relative z-10"><Zap size={16} className="text-emerald-400" /></div>
              <div className="flex flex-col relative z-10">
                <span className="text-[13px] font-bold text-white">Website Live on Staging</span>
                <span className="text-[11px] text-white/40 mt-1">Build #492 deployed successfully.</span>
                <span className="text-[9px] text-white/30 font-mono mt-2">Just now</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#12121a] p-4 rounded-xl border border-white/5 flex gap-3 shadow-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="mt-0.5"><CheckCircle2 size={16} className="text-brand-primary" /></div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-white">Feedback Implemented</span>
                <span className="text-[11px] text-white/40 mt-1">"Updated primary color to cyan."</span>
                <span className="text-[9px] text-white/30 font-mono mt-2">2 hours ago</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom App Navigation */}
      <div className="absolute bottom-0 w-full h-16 bg-[#12121a]/90 backdrop-blur-md border-t border-white/5 z-20 flex justify-around items-center px-2 pb-2">
        <div className="flex flex-col items-center gap-1 text-brand-primary">
          <LayoutTemplate size={20} />
          <div className="w-1 h-1 rounded-full bg-brand-primary"></div>
        </div>
        <div className="flex flex-col items-center gap-1 text-white/30">
          <Database size={20} />
        </div>
        <div className="flex flex-col items-center gap-1 text-white/30 relative">
          <Send size={20} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">2</div>
        </div>
        <div className="flex flex-col items-center gap-1 text-white/30">
          <Settings2 size={20} />
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30"></div>
    </div>
  );
};

export function CTAIllustration() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <DesktopWorkspace />
      <TabletTimeline />
      <MobileClientApp />
    </div>
  );
}
