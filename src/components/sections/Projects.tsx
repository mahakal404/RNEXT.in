"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, Laptop, Smartphone, Database, Cpu, ChevronDown } from 'lucide-react';

import { projectsData } from '../../data/projects';
import { MockupMapper } from '../ui/MockupMapper';
import { SectionHeader } from '../ui/SectionHeader';
import { useMotionUtilities, variants, stagger, hover, transitions } from '../../lib/motion';

const getProjectIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'ai saas': return <Cpu size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
    case 'web application': return <Globe size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
    case 'mobile app': return <Smartphone size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
    case 'finance app': return <Database size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
    default: return <Laptop size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
  }
}

export function Projects() {
  const { withReducedMotion } = useMotionUtilities();

  // Selected top 6 projects
  const topProjectIds = ['chatcv', 'vtry', 'fintrack', 'ai-paisee', 'harini-dental', 'expense-manager'];
  const featuredProjects = topProjectIds.map(id => projectsData.find(p => p.id === id)).filter(Boolean) as typeof projectsData;

  const [activeId, setActiveId] = useState(featuredProjects[0]?.id);
  const [transitioningProject, setTransitioningProject] = useState(featuredProjects[0]);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [isMobileSelectorOpen, setIsMobileSelectorOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  
  const loadingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resolveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleProjectClick = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    
    if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);
    if (resolveTimerRef.current) clearTimeout(resolveTimerRef.current);

    // Simulate load time (sometimes fast, sometimes slow)
    const simulatedLoadTime = Math.random() > 0.5 ? 120 : 320; 

    // Only show skeleton if transition takes > 180ms
    loadingTimerRef.current = setTimeout(() => {
      setShowSkeleton(true);
    }, 180);

    resolveTimerRef.current = setTimeout(() => {
      if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);
      setShowSkeleton(false);
      const nextProj = featuredProjects.find(p => p.id === id);
      if (nextProj) setTransitioningProject(nextProj);
    }, simulatedLoadTime);
  };

  const handleMobileSelect = (id: string) => {
    setIsMobileSelectorOpen(false);
    handleProjectClick(id);
    setTimeout(() => {
      stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="projects" className="py-24 md:py-40 relative z-20 bg-bg-primary overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Statistics Section */}
        <motion.div 
          className="flex flex-wrap gap-8 md:gap-16 items-center border-b border-white/5 pb-12 mb-24 md:mb-32"
          {...withReducedMotion(stagger.fast)}
        >
           <motion.div variants={variants.fade} className="flex flex-col gap-1">
              <span className="text-display-md text-white font-bold tracking-tight">12+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">Projects Built</span>
           </motion.div>
           <motion.div variants={variants.fade} className="w-[1px] h-12 bg-white/5 hidden md:block" />
           <motion.div variants={variants.fade} className="flex flex-col gap-1">
              <span className="text-display-md text-white font-bold tracking-tight">3</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">AI Products</span>
           </motion.div>
           <motion.div variants={variants.fade} className="w-[1px] h-12 bg-white/5 hidden md:block" />
           <motion.div variants={variants.fade} className="flex flex-col gap-1">
              <span className="text-display-md text-white font-bold tracking-tight">6</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">Business Websites</span>
           </motion.div>
           <motion.div variants={variants.fade} className="w-[1px] h-12 bg-white/5 hidden md:block" />
           <motion.div variants={variants.fade} className="flex flex-col gap-1">
              <span className="text-display-md text-white font-bold tracking-tight">2</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">Finance Apps</span>
           </motion.div>
        </motion.div>

        {/* Section Header */}
        <div className="mb-24 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col">
            <motion.div className="overflow-hidden" {...withReducedMotion(variants.maskReveal)}>
              <SectionHeader number="04" label="PROJECTS" />
            </motion.div>
            
            <motion.div 
              className="text-display-md md:text-display-lg text-white font-semibold leading-tight overflow-hidden"
              {...withReducedMotion(variants.maskReveal)}
              transition={{ ...variants.maskReveal.transition, delay: 0.1 }}
            >
              Here is a collection of products,<br />
              <span className="text-text-muted">concept projects, and business websites.</span>
            </motion.div>
          </div>
          <div className="lg:max-w-[340px]">
            <motion.p 
              className="text-body-lg text-text-secondary leading-relaxed overflow-hidden"
              {...withReducedMotion(variants.maskReveal)}
              transition={{ ...variants.maskReveal.transition, delay: 0.2 }}
            >
              Designed and developed to explore real-world digital experiences using modern technologies.
            </motion.p>
          </div>
        </div>

        {/* Interactive Projects Showcase */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative min-h-[700px]"
          {...withReducedMotion(variants.fade)}
        >
          
          {/* Desktop Left Navigation */}
          <div className="hidden lg:flex lg:col-span-4 flex-col relative">
            <div className="lg:sticky lg:top-32 flex flex-col border-l border-white/5 relative">
              {/* Active Indicator Line */}
              <motion.div 
                className="absolute left-[-1px] w-[2px] bg-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                animate={{
                  top: `${featuredProjects.findIndex(p => p.id === activeId) * (100 / featuredProjects.length)}%`,
                  height: `${100 / featuredProjects.length}%`
                }}
                transition={transitions.lux}
              />

              {featuredProjects.map((project, index) => {
                const isActive = activeId === project.id;
                return (
                  <motion.button 
                    key={project.id} 
                    onClick={() => handleProjectClick(project.id)}
                    animate={{ 
                      backgroundColor: isActive ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0)"
                    }}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    transition={transitions.swift}
                    className={`relative pl-6 py-5 flex flex-col items-start text-left w-full cursor-pointer rounded-r-lg border-y border-r border-transparent ${isActive ? 'border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]' : ''} origin-left`}
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-text-disabled'}`}>
                      0{index + 1} — {project.name}
                    </span>
                    <span className={`text-[11px] mt-1.5 transition-colors duration-300 ${isActive ? 'text-brand-primary' : 'text-text-muted'}`}>
                      {project.type}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Mobile Project Selector */}
          <div className="lg:hidden flex flex-col relative z-40 mb-4">
             <button 
               onClick={() => setIsMobileSelectorOpen(!isMobileSelectorOpen)}
               className="w-full flex items-center justify-between p-4 bg-[#0B1020] border border-white/10 rounded-2xl shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
             >
               <div className="flex flex-col text-left">
                 <span className="text-[10px] text-brand-primary uppercase tracking-widest font-bold mb-1">
                   Selected Project
                 </span>
                 <span className="text-sm font-medium text-white flex items-center gap-2">
                   0{featuredProjects.findIndex(p => p.id === transitioningProject.id) + 1} — {transitioningProject.name}
                 </span>
               </div>
               <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-white/5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileSelectorOpen ? 'rotate-180 bg-white/10' : ''}`}>
                 <ChevronDown size={16} className="text-white" />
               </div>
             </button>

             <AnimatePresence>
               {isMobileSelectorOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: -10, scale: 0.98 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -10, scale: 0.98 }}
                   transition={transitions.swift}
                   className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#0B1020]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col origin-top"
                 >
                   {featuredProjects.map((project, index) => {
                      const isActive = activeId === project.id;
                      return (
                        <button
                          key={project.id}
                          onClick={() => handleMobileSelect(project.id)}
                          className={`flex flex-col text-left px-5 py-4 border-b border-white/5 last:border-b-0 transition-colors ${isActive ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
                        >
                          <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-text-secondary'}`}>
                             0{index + 1} — {project.name}
                          </span>
                          <span className={`text-[11px] mt-1 ${isActive ? 'text-brand-primary' : 'text-text-muted'}`}>
                             {project.type}
                          </span>
                        </button>
                      );
                   })}
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Stage */}
          <div ref={stageRef} className="lg:col-span-8 flex flex-col relative overflow-hidden scroll-mt-24">
            <AnimatePresence mode="wait">
               {showSkeleton ? (
                 <motion.div
                   key="skeleton"
                   initial={{ opacity: 0, filter: "blur(4px)" }}
                   animate={{ opacity: 1, filter: "blur(0px)" }}
                   exit={{ opacity: 0, filter: "blur(4px)" }}
                   transition={transitions.swift}
                   className="w-full flex flex-col gap-10 md:gap-16 absolute top-0 left-0"
                 >
                    {/* Skeleton Mockup */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col">
                       <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                       <div className="h-10 border-b border-white/5 bg-white/[0.01] flex items-center px-4 gap-2">
                         <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                         <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                         <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                       </div>
                       <div className="flex-1 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10" />
                       </div>
                    </div>
                    {/* Skeleton Text */}
                    <div className="flex flex-col md:flex-row gap-10 px-2 md:px-8">
                       <div className="flex-1 flex flex-col gap-4">
                          <div className="w-24 h-6 bg-white/5 rounded-full" />
                          <div className="w-3/4 h-10 bg-white/5 rounded-lg mt-2" />
                          <div className="w-full h-4 bg-white/5 rounded-full mt-4" />
                          <div className="w-5/6 h-4 bg-white/5 rounded-full" />
                       </div>
                       <div className="flex-1 flex flex-col items-start md:items-end gap-6 mt-4 md:mt-0">
                          <div className="w-32 h-4 bg-white/5 rounded-full" />
                          <div className="w-full h-12 bg-white/5 rounded-full" />
                       </div>
                    </div>
                 </motion.div>
               ) : (
                 <motion.div 
                   key={transitioningProject.id}
                   initial={{ opacity: 0, filter: "blur(4px)" }}
                   animate={{ opacity: 1, filter: "blur(0px)" }}
                   exit={{ opacity: 0, filter: "blur(4px)" }}
                   transition={transitions.lux}
                   className="w-full flex flex-col gap-10 md:gap-16 group"
                 >
                   {/* Visual Presentation */}
                   <div className="relative w-full rounded-2xl md:rounded-[32px] bg-bg-elevated border border-border-primary overflow-hidden transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-border-hover hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                     
                     {/* Floating Project Badge */}
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ ...transitions.swift, delay: 0.2 }}
                       className="absolute top-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 pointer-events-none"
                     >
                       {getProjectIcon(transitioningProject.category)}
                       <span className="text-[11px] md:text-xs font-medium text-white tracking-wide">
                         0{featuredProjects.findIndex(p => p.id === transitioningProject.id) + 1} — {transitioningProject.type}
                       </span>
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)] ml-1" />
                     </motion.div>

                     {/* The Original Artwork Placeholder - Crossfade & Zoom */}
                     <motion.div 
                       className="relative w-full aspect-[4/3] md:aspect-[16/9] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
                       {...withReducedMotion(variants.scaleDownImage)}
                     >
                        <MockupMapper id={transitioningProject.mockupId} />
                     </motion.div>
                   </div>

                   {/* Details Block */}
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 px-2 md:px-8">
                     
                     {/* Left side: Tags, Title, Summary */}
                     <div className="flex-1 flex flex-col gap-6">
                       <div className="flex flex-wrap gap-2 mb-2">
                         <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20">
                           {transitioningProject.category}
                         </span>
                       </div>
                       <h3 className="text-display-sm md:text-display-md text-white font-semibold leading-tight">{transitioningProject.name}</h3>
                       <p className="text-body-lg text-text-secondary max-w-2xl">{transitioningProject.overview}</p>
                       
                       {/* Animated Tech Stack */}
                       <div className="flex gap-2 items-center mt-4 flex-wrap">
                          <span className="text-xs font-bold text-text-disabled uppercase tracking-wider mr-2">Powered By</span>
                          <AnimatePresence mode="popLayout">
                            {transitioningProject.technologies.slice(0, 3).map((tech, i) => (
                               <motion.span 
                                 key={`${transitioningProject.id}-${tech}`} 
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 exit={{ opacity: 0, scale: 0.9 }}
                                 transition={{ delay: i * 0.05, duration: 0.3, ease: transitions.swift.ease }}
                                 className="text-xs text-text-muted px-2 py-1 bg-black/40 rounded-md border border-white/5"
                               >
                                  {tech}
                               </motion.span>
                            ))}
                          </AnimatePresence>
                       </div>
                     </div>

                     {/* Right side: CTA Transitions */}
                     <div className="flex-1 flex flex-col items-start md:items-end gap-8 md:text-right mt-4 md:mt-0">
                       <div className="flex flex-col gap-2 max-w-sm">
                         <span className="text-caption text-text-muted">The Problem</span>
                         <p className="text-body-base text-white/80 line-clamp-2">{transitioningProject.problem}</p>
                       </div>
                       <div className="flex gap-4">
                         <AnimatePresence mode="popLayout">
                           <motion.div
                             key={`cta-${transitioningProject.id}`}
                             initial={{ opacity: 0, x: 10 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -10 }}
                             transition={transitions.swift}
                             className="flex gap-4"
                           >
                             {transitioningProject.githubUrl && (
                               <a href={transitioningProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10">
                                 <span className="sr-only">GitHub</span>
                                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.19-.3 6.5-1.5 6.5-7.a5.2 5.2 0 0 0-1.5-3.8.33.33 0 0 0-.08-.22.5.5 0 0 0-.39-.12 6.8 6.8 0 0 0-2.3 1.2 12.1 12.1 0 0 0-5 0 6.8 6.8 0 0 0-2.3-1.2.5.5 0 0 0-.39.12.33.33 0 0 0-.08.22 5.2 5.2 0 0 0-1.5 3.8c0 5.5 3.3 6.7 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-3 1-5-1-5-3"/></svg>
                               </a>
                             )}
                             <motion.div {...hover.button}>
                               <a href={transitioningProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 h-12 rounded-full bg-bg-elevated border border-border-primary text-white text-btn transition-all duration-500 hover:bg-white hover:text-bg-primary hover:border-transparent group/btn">
                                 Live Demo
                                 <ArrowRight size={16} className="transition-transform duration-500 group-hover/btn:translate-x-1" />
                               </a>
                             </motion.div>
                           </motion.div>
                         </AnimatePresence>
                       </div>
                     </div>
                   </div>
                 </motion.div>
               )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Premium View All Projects CTA */}
        <motion.div 
          className="mt-32 md:mt-48 flex justify-center pt-24 relative px-4"
          {...withReducedMotion(variants.fade)}
        >
          {/* Subtle gradient background line instead of solid border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <Link href="/projects" className="group relative w-full max-w-3xl flex flex-col items-center text-center py-16 md:py-24 px-6 rounded-[40px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] active:scale-[0.98]">
             
             {/* Hover Glow */}
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_60%)]" />

             <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-6 flex items-center gap-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">
               <span className="w-8 h-[1px] bg-brand-primary/50" />
               Explore Full Portfolio
               <span className="w-8 h-[1px] bg-brand-primary/50" />
             </span>

             <h2 className="text-display-md md:text-display-xl text-white font-bold leading-none tracking-tight mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
               12 Premium Projects
             </h2>

             <p className="text-body-base md:text-body-lg text-text-secondary mb-12 max-w-md transition-colors duration-500 group-hover:text-white/80">
               AI • SaaS • Finance • Business Websites
             </p>

             <motion.div {...hover.button} className="w-full sm:w-auto mt-4">
               <div className="inline-flex items-center justify-center gap-2 md:gap-3 px-5 sm:px-6 md:px-8 min-h-[56px] h-auto py-3 md:py-0 md:h-14 rounded-full bg-white text-bg-primary font-semibold text-[13px] sm:text-sm md:text-base relative overflow-hidden w-full sm:w-auto text-center mx-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 transition-colors duration-500">
                    <span className="leading-tight">View Complete Collection</span>
                    <ArrowRight size={18} className="transition-transform duration-500 ease-out group-hover:translate-x-1 shrink-0" />
                  </span>
               </div>
             </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
