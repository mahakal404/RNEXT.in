"use client";

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { projectsData } from '@/data/projects';
import { MockupMapper } from '@/components/ui/MockupMapper';

export default function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI Product', 'Business Website', 'Finance Web Application', 'Finance Dashboard', 'AI Resume Builder', 'Portfolio Website'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      
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

          {/* Filtration System */}
          <div className="mb-24 flex flex-wrap gap-3">
             {categories.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                   activeCategory === cat 
                   ? 'bg-white text-bg-primary' 
                   : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white border border-white/10'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          {/* Editorial Showcase Stream */}
          <div className="flex flex-col gap-40 md:gap-56">
             {filteredProjects.map((project, idx) => (
                <motion.article 
                  key={project.id}
                  className="flex flex-col gap-12 md:gap-20"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  
                  {/* Massive Preview Area */}
                  <div className="w-full rounded-2xl md:rounded-[32px] bg-bg-elevated border border-border-primary overflow-hidden shadow-2xl relative group">
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 flex gap-2">
                       <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary border border-white/10">
                         {project.category}
                       </span>
                       <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-text-muted border border-white/10">
                         {project.type}
                       </span>
                    </div>
                    <div className="relative w-full aspect-[4/3] lg:aspect-[21/9]">
                       <MockupMapper id={project.mockupId} />
                    </div>
                  </div>

                  {/* Editorial Layout: 2 Columns */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                     
                     {/* Left Column: Title & Overview */}
                     <div className="lg:col-span-5 flex flex-col gap-8">
                       <h2 className="text-display-md text-white font-bold leading-none tracking-tight">
                         {project.name}
                       </h2>
                       <p className="text-body-lg text-text-secondary">
                         {project.overview}
                       </p>
                       
                       <div className="flex flex-col gap-3 mt-4">
                         <span className="text-xs font-bold uppercase tracking-widest text-text-disabled">Technologies</span>
                         <div className="flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                               <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-text-muted">
                                 {tech}
                               </span>
                            ))}
                         </div>
                       </div>

                       <div className="flex items-center gap-4 mt-8">
                         <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary h-12 px-8 flex items-center justify-center gap-2 group">
                           Live Demo
                           <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                         </a>
                         {project.githubUrl && (
                           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="h-12 w-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-text-secondary hover:text-white transition-colors">
                             <span className="sr-only">GitHub</span>
                             <FaGithub size={20} />
                           </a>
                         )}
                       </div>
                     </div>

                     {/* Right Column: Deep Dive (Problem, Solution, Features) */}
                     <div className="lg:col-span-7 flex flex-col gap-12 border-l border-white/5 lg:pl-16">
                        
                        <div className="flex flex-col gap-4">
                          <h3 className="text-lg text-white font-medium">The Problem</h3>
                          <p className="text-text-secondary leading-relaxed">{project.problem}</p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <h3 className="text-lg text-white font-medium">The Solution</h3>
                          <p className="text-text-secondary leading-relaxed">{project.solution}</p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <h3 className="text-lg text-white font-medium">Key Features</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features.map(feature => (
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
                             <p className="text-sm text-text-muted leading-relaxed">{project.challenges}</p>
                           </div>
                           <div className="flex-1 flex flex-col gap-3">
                             <span className="text-xs font-bold uppercase tracking-widest text-text-disabled">Learnings</span>
                             <p className="text-sm text-text-muted leading-relaxed">{project.learnings}</p>
                           </div>
                        </div>

                     </div>

                  </div>

                </motion.article>
             ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
