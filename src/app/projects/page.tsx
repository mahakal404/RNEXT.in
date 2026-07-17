"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Laptop, Smartphone, Database, Cpu, ChevronDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { projectsData } from '@/data/projects';
import { MockupMapper } from '@/components/ui/MockupMapper';

const getProjectIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'ai saas': return <Cpu size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
    case 'web application': return <Globe size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
    case 'mobile app': return <Smartphone size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
    case 'finance app': return <Database size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
    default: return <Laptop size={14} className="text-brand-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />;
  }
}

export default function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [isVTryModalOpen, setIsVTryModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Force scroll to top on mount to fix mobile scroll restoration bug
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // We are removing categories filter for this new layout to display a numbered list.
  const featuredProjects = projectsData; 

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

    const simulatedLoadTime = Math.random() > 0.5 ? 120 : 320; 

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
    <>
      <Navbar />
      
      <AnimatePresence>
        {isVTryModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-bg-elevated border border-white/10 rounded-3xl p-8 max-w-[480px] w-full shadow-2xl relative"
            >
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">V-Try</h2>
              <h3 className="text-lg text-white/80 font-medium mb-6">AI Virtual Try-On Prototype</h3>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                This project showcases the product vision, interface design, and complete user experience of an AI-powered virtual try-on platform.
                <br/><br/>
                The production AI image generation engine has not yet been integrated. This prototype demonstrates the interface, workflow, and product architecture only.
              </p>

              <div className="flex flex-col gap-3.5 mb-8">
                 <div className="flex items-center gap-3 text-sm font-medium text-emerald-400">
                   <span className="text-base leading-none">✔</span> Product Vision
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-emerald-400">
                   <span className="text-base leading-none">✔</span> Interface Prototype
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-emerald-400">
                   <span className="text-base leading-none">✔</span> User Experience
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-amber-400">
                   <span className="text-base leading-none">⏳</span> AI Generation Engine
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-amber-400">
                   <span className="text-base leading-none">⏳</span> Production Integration
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a href="https://vtry-app.netlify.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsVTryModalOpen(false)} className="w-full sm:w-auto px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-bg-primary font-bold rounded-xl transition-colors text-center text-sm">
                  Continue to Prototype
                </a>
                <button onClick={() => setIsVTryModalOpen(false)} className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors border border-white/10 text-sm">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen pt-32 pb-40">
        <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
          
          {/* Page Hero */}
          <header className="mb-24 md:mb-32 max-w-3xl">
            <h1 className="text-display-md md:text-display-xl text-white font-semibold leading-tight tracking-tight mb-6">
              Digital Design Journal.
            </h1>
            <p className="text-body-xl text-text-secondary leading-relaxed">
              An archive of products, conceptual prototypes, and digital architecture built to explore modern technologies and solve real-world problems.
            </p>
          </header>

          {/* Interactive Projects Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative min-h-[900px]">
            
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
                  transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
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
                      transition={{ duration: 0.3 }}
                      className={`relative pl-6 py-5 flex flex-col items-start text-left w-full cursor-pointer rounded-r-lg border-y border-r border-transparent ${isActive ? 'border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]' : ''} origin-left`}
                    >
                      <span className={`text-sm font-medium transition-all duration-300 ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-text-disabled'}`}>
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
                     transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                     initial={{ opacity: 0, y: 18, scale: 0.985 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -12, scale: 0.985 }}
                     transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
                     className="w-full flex flex-col gap-12 md:gap-20 absolute top-0 left-0"
                   >
                     {/* Skeleton Mockup */}
                     <div className="w-full rounded-2xl md:rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                        <div className="h-10 border-b border-white/5 bg-white/[0.01] flex items-center px-4 gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        </div>
                        <div className="relative w-full aspect-[4/3] lg:aspect-[21/9] flex items-center justify-center">
                          <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10" />
                        </div>
                     </div>
                     
                     {/* Skeleton Text (Editorial Layout style) */}
                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-5 flex flex-col gap-8">
                           <div className="w-3/4 h-10 bg-white/5 rounded-lg" />
                           <div className="w-full h-24 bg-white/5 rounded-lg" />
                           <div className="w-1/2 h-8 bg-white/5 rounded-lg mt-8" />
                        </div>
                        <div className="lg:col-span-7 flex flex-col gap-12 border-l border-white/5 lg:pl-16">
                           <div className="w-full h-16 bg-white/5 rounded-lg" />
                           <div className="w-full h-16 bg-white/5 rounded-lg" />
                           <div className="w-full h-32 bg-white/5 rounded-lg" />
                        </div>
                     </div>
                   </motion.div>
                 ) : (
                   <motion.div 
                     key={transitioningProject.id}
                     initial={{ opacity: 0, y: 18, scale: 0.985 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -12, scale: 0.985 }}
                     transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                     className="w-full flex flex-col gap-12 md:gap-20 group"
                   >
                     {/* Massive Preview Area */}
                     <div className="w-full rounded-2xl md:rounded-[32px] bg-bg-elevated border border-border-primary overflow-hidden shadow-2xl relative transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-border-hover hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                       <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 flex gap-2">
                          <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary border border-white/10">
                            {transitioningProject.category}
                          </span>
                          <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-text-muted border border-white/10 hidden sm:inline-block">
                            {transitioningProject.type}
                          </span>
                       </div>

                       {/* Floating Project Badge (like Home page) */}
                       <motion.div 
                         initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                         animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                         transition={{ duration: 0.3, delay: 0.2 }}
                         className="absolute top-4 right-4 md:top-8 md:right-8 z-50 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 pointer-events-none"
                       >
                         {getProjectIcon(transitioningProject.category)}
                         <span className="text-[11px] md:text-xs font-medium text-white tracking-wide">
                           0{featuredProjects.findIndex(p => p.id === transitioningProject.id) + 1} — Live
                         </span>
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)] ml-1" />
                       </motion.div>

                       <div className="relative w-full aspect-[4/3] lg:aspect-[21/9] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
                          <MockupMapper id={transitioningProject.mockupId} />
                       </div>
                     </div>

                     {/* Editorial Layout: 2 Columns */}
                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        
                        {/* Left Column: Title & Overview */}
                        <div className="lg:col-span-5 flex flex-col gap-8">
                          <h2 className="text-display-md text-white font-bold leading-none tracking-tight">
                            {transitioningProject.name}
                          </h2>
                          <p className="text-body-lg text-text-secondary">
                            {transitioningProject.overview}
                          </p>
                          
                          <div className="flex flex-col gap-3 mt-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-text-disabled">Technologies</span>
                            <div className="flex flex-wrap gap-2">
                              <AnimatePresence mode="popLayout">
                                {transitioningProject.technologies.map((tech, i) => (
                                  <motion.span 
                                    key={`${transitioningProject.id}-${tech}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-text-muted"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </AnimatePresence>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mt-8">
                            <AnimatePresence mode="popLayout">
                              <motion.div
                                key={`cta-${transitioningProject.id}`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                                className="flex gap-4"
                              >
                                {transitioningProject.id === 'vtry' ? (
                                  <button onClick={() => setIsVTryModalOpen(true)} className="btn-base btn-primary h-12 px-8 flex items-center justify-center gap-2 group">
                                    View Prototype
                                    <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                                  </button>
                                ) : (
                                  <a href={transitioningProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary h-12 px-8 flex items-center justify-center gap-2 group">
                                    Live Demo
                                    <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                                  </a>
                                )}
                                {transitioningProject.githubUrl && (
                                  <a href={transitioningProject.githubUrl} target="_blank" rel="noopener noreferrer" className="h-12 w-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-text-secondary hover:text-white transition-colors">
                                    <span className="sr-only">GitHub</span>
                                    <FaGithub size={20} />
                                  </a>
                                )}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Right Column: Deep Dive (Problem, Solution, Features) */}
                        <div className="lg:col-span-7 flex flex-col gap-12 border-l border-white/5 lg:pl-16">
                           
                           <div className="flex flex-col gap-4">
                             <h3 className="text-lg text-white font-medium">The Problem</h3>
                             <p className="text-text-secondary leading-relaxed">{transitioningProject.problem}</p>
                           </div>

                           <div className="flex flex-col gap-4">
                             <h3 className="text-lg text-white font-medium">The Solution</h3>
                             <p className="text-text-secondary leading-relaxed">{transitioningProject.solution}</p>
                           </div>

                           <div className="flex flex-col gap-4">
                             <h3 className="text-lg text-white font-medium">Key Features</h3>
                             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               {transitioningProject.features.map(feature => (
                                 <li key={feature} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary/60 shrink-0" />
                                    <span className="text-text-secondary">{feature}</span>
                                 </li>
                               ))}
                             </ul>
                           </div>

                           <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-white/5 mt-4">
                              <div className="flex-1 flex flex-col gap-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-disabled">Challenges</span>
                                <p className="text-sm text-text-muted leading-relaxed">{transitioningProject.challenges}</p>
                              </div>
                              <div className="flex-1 flex flex-col gap-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-disabled">Learnings</span>
                                <p className="text-sm text-text-muted leading-relaxed">{transitioningProject.learnings}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
