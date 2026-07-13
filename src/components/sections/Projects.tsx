"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { projectsData } from '../../data/projects';
import { MockupMapper } from '../ui/MockupMapper';

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  // Selected top 6 projects
  const topProjectIds = ['chatcv', 'vtry', 'fintrack', 'ai-paisee', 'harini-dental', 'expense-manager'];
  const featuredProjects = topProjectIds.map(id => projectsData.find(p => p.id === id)).filter(Boolean) as typeof projectsData;

  return (
    <section id="projects" className="py-24 md:py-40 relative z-20 bg-bg-primary">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Statistics Section */}
        <div className="flex flex-wrap gap-8 md:gap-16 items-center border-b border-white/5 pb-12 mb-24 md:mb-32">
           <div className="flex flex-col gap-1">
              <span className="text-display-md text-white font-bold tracking-tight">12+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">Projects Built</span>
           </div>
           <div className="w-[1px] h-12 bg-white/5 hidden md:block" />
           <div className="flex flex-col gap-1">
              <span className="text-display-md text-white font-bold tracking-tight">3</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">AI Products</span>
           </div>
           <div className="w-[1px] h-12 bg-white/5 hidden md:block" />
           <div className="flex flex-col gap-1">
              <span className="text-display-md text-white font-bold tracking-tight">6</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">Business Websites</span>
           </div>
           <div className="w-[1px] h-12 bg-white/5 hidden md:block" />
           <div className="flex flex-col gap-1">
              <span className="text-display-md text-white font-bold tracking-tight">2</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-disabled">Finance Apps</span>
           </div>
        </div>

        {/* Section Header */}
        <div className="mb-24 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col">
            <h2 className="text-brand-primary text-caption font-bold uppercase tracking-widest mb-6">
              Featured Work
            </h2>
            <div className="text-display-md md:text-display-lg text-white font-semibold leading-tight">
              Here is a collection of products,<br />
              <span className="text-text-muted">concept projects, and business websites.</span>
            </div>
          </div>
          <div className="lg:max-w-[340px]">
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Designed and developed to explore real-world digital experiences using modern technologies.
            </p>
          </div>
        </div>

        {/* Projects Stream */}
        <div className="flex flex-col gap-32 md:gap-48">
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="flex flex-col gap-10 md:gap-16 w-full group"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              
              {/* Visual Presentation */}
              <div className="relative w-full rounded-2xl md:rounded-[32px] bg-bg-elevated border border-border-primary overflow-hidden transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-border-hover group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] group-hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
                   <MockupMapper id={project.mockupId} />
                </div>
              </div>

              {/* Details Block */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 px-2 md:px-8">
                
                {/* Left side: Tags, Title, Summary */}
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-display-sm md:text-display-md text-white font-semibold leading-tight">{project.name}</h3>
                  <p className="text-body-lg text-text-secondary max-w-2xl">{project.overview}</p>
                  
                  {/* Subtle Tech Stack Display */}
                  <div className="flex gap-2 items-center mt-4">
                     <span className="text-xs font-bold text-text-disabled uppercase tracking-wider mr-2">Powered By</span>
                     {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs text-text-muted px-2 py-1 bg-black/40 rounded-md border border-white/5">
                           {tech}
                        </span>
                     ))}
                  </div>
                </div>

                {/* Right side: Problem/Solution brief & CTA */}
                <div className="flex-1 flex flex-col items-start md:items-end gap-8 md:text-right mt-4 md:mt-0">
                  <div className="flex flex-col gap-2 max-w-sm">
                    <span className="text-caption text-text-muted">The Problem</span>
                    <p className="text-body-base text-white/80 line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10">
                        <span className="sr-only">GitHub</span>
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.19-.3 6.5-1.5 6.5-7.a5.2 5.2 0 0 0-1.5-3.8.33.33 0 0 0-.08-.22.5.5 0 0 0-.39-.12 6.8 6.8 0 0 0-2.3 1.2 12.1 12.1 0 0 0-5 0 6.8 6.8 0 0 0-2.3-1.2.5.5 0 0 0-.39.12.33.33 0 0 0-.08.22 5.2 5.2 0 0 0-1.5 3.8c0 5.5 3.3 6.7 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-3 1-5-1-5-3"/></svg>
                      </a>
                    )}
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 h-12 rounded-full bg-bg-elevated border border-border-primary text-white text-btn transition-all duration-500 hover:bg-white hover:text-bg-primary hover:border-transparent">
                      Live Demo
                      <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-32 md:mt-48 flex justify-center border-t border-white/5 pt-24">
          <Link href="/projects" className="group flex items-center justify-between w-full max-w-2xl gap-12 border-b border-border-primary pb-6 transition-colors duration-500 hover:border-brand-primary">
            <span className="text-display-sm text-white font-medium group-hover:text-brand-primary transition-colors duration-500">
              View All Projects
            </span>
            <div className="w-12 h-12 rounded-full border border-border-primary flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 group-hover:-rotate-45">
              <ArrowRight size={20} className="text-text-secondary group-hover:text-brand-primary transition-colors duration-500" strokeWidth={1.5} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
