"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { FinTrackMockup } from '../ui/mockups/FinTrackMockup';
import { ChatCVMockup } from '../ui/mockups/ChatCVMockup';
import { ProjectsCommerceMockup } from '../ui/mockups/ProjectsCommerceMockup';

const projects = [
  {
    title: "FinTrack App",
    summary: "A modern financial dashboard with real-time analytics, dynamic charting, and seamless transaction management.",
    tags: ["React", "Tailwind CSS", "Data Vis"],
    outcome: "Increased user retention by 42% in Q1.",
    visual: <FinTrackMockup />
  },
  {
    title: "ChatCV Studio",
    summary: "An AI-powered resume builder and chat interface optimized for modern ATS systems and candidate workflows.",
    tags: ["Next.js", "AI Integration", "Node.js"],
    outcome: "Helped 10,000+ job seekers land interviews.",
    visual: <ChatCVMockup />
  },
  {
    title: "Aura Commerce",
    summary: "A high-conversion headless e-commerce storefront designed specifically for luxury fashion brands.",
    tags: ["Shopify", "Tailwind", "GraphQL"],
    outcome: "Boosted checkout conversion rates by 28%.",
    visual: <ProjectsCommerceMockup />
  }
];

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-24 md:py-40 relative z-20 bg-bg-primary">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col">
            <div className="text-brand-primary text-caption font-bold uppercase tracking-widest mb-6">
              Featured Work
            </div>
            <h2 className="text-display-md md:text-display-lg text-white font-semibold leading-tight">
              Crafted with precision.<br />
              <span className="text-text-muted">Built for impact.</span>
            </h2>
          </div>
          <div className="lg:max-w-[340px]">
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Every project begins with strategy and ends with measurable results.
            </p>
          </div>
        </div>

        {/* Projects Stream */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              className="flex flex-col gap-10 md:gap-16 w-full group"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              
              {/* Visual Presentation */}
              <div className="relative w-full rounded-2xl md:rounded-[32px] bg-bg-elevated border border-border-primary overflow-hidden transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-border-hover group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] group-hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
                   {project.visual}
                </div>
              </div>

              {/* Details Block */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 px-2 md:px-8">
                
                {/* Left side: Tags, Title, Summary */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-bold uppercase tracking-wider text-brand-primary px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20 transition-all duration-200 group-hover:bg-brand-primary/20 group-hover:border-brand-primary/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-display-sm text-white font-semibold">{project.title}</h3>
                  <p className="text-body-lg text-text-secondary max-w-2xl">{project.summary}</p>
                </div>

                {/* Right side: Outcome, CTA */}
                <div className="flex-1 flex flex-col items-start md:items-end gap-8 md:text-right mt-4 md:mt-0">
                  <div className="flex flex-col gap-2">
                    <span className="text-caption text-text-muted">Key Outcome</span>
                    <p className="text-body-base text-white font-medium">{project.outcome}</p>
                  </div>
                  <Link href="#" className="inline-flex items-center justify-center gap-3 px-8 h-[52px] rounded-full bg-bg-elevated border border-border-primary text-white text-btn transition-all duration-500 hover:bg-white hover:text-bg-primary hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary">
                    View Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
